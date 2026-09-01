#!/usr/bin/env node
/**
 * Live HTTP check: every built sitemap must return 200 + application/xml (not 301).
 * Run after Cloudflare deploy: node scripts/validate-sitemap-http.mjs
 * Optional: SITE_URL=https://example.com node scripts/validate-sitemap-http.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function readBrandUrl() {
	const src = readFileSync(path.join(ROOT, 'src/data/brand.ts'), 'utf8');
	const m = src.match(/(?:^|\n)\turl:\s*'((?:\\'|[^'])*)'/);
	if (!m) throw new Error('brand.ts missing url');
	return m[1].replace(/\\'/g, "'").replace(/\/$/, '');
}

const SITE = (process.env.SITE_URL || readBrandUrl()).replace(/\/$/, '');
const distDir = path.join(ROOT, 'dist');
const files = readdirSync(distDir)
	.filter((f) => /^sitemap.*\.xml$/i.test(f))
	.sort();

if (files.length === 0) {
	console.error('No sitemap*.xml in dist/ — run npm run build first');
	process.exit(1);
}

let errors = 0;

console.log(`Checking ${files.length} sitemaps at ${SITE}…\n`);

for (const file of files) {
	const url = `${SITE}/${file}`;
	try {
		const res = await fetch(url, { redirect: 'manual' });
		const type = res.headers.get('content-type') || '';
		const location = res.headers.get('location') || '';

		if (res.status >= 300 && res.status < 400) {
			console.error(`✗ ${file}: HTTP ${res.status} → ${location || '(no Location)'}`);
			errors++;
			continue;
		}
		if (!res.ok) {
			console.error(`✗ ${file}: HTTP ${res.status}`);
			errors++;
			continue;
		}
		if (!type.includes('xml')) {
			console.error(`✗ ${file}: HTTP ${res.status} but Content-Type is "${type}"`);
			errors++;
			continue;
		}
		const body = await res.text();
		if (!body.includes('<?xml') || (!body.includes('<urlset') && !body.includes('<sitemapindex'))) {
			console.error(`✗ ${file}: response is not valid sitemap XML`);
			errors++;
			continue;
		}
		console.log(`✓ ${file} — ${res.status} ${type.split(';')[0]}`);
	} catch (err) {
		console.error(`✗ ${file}: ${err.message}`);
		errors++;
	}
}

console.log('');
if (errors > 0) {
	console.error(`${errors} sitemap(s) failed. Redeploy the Cloudflare Worker (npm run deploy) after merging the apex-host fix.`);
	process.exit(1);
}
console.log(`All ${files.length} sitemaps return 200 with XML. Safe to submit ${SITE}/sitemap.xml to Google Search Console.`);
