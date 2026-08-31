#!/usr/bin/env node
/**
 * Migrate URL slugs from sea-of-thieves-cheats → sea-of-thieves-cheats (paths + sitemaps).
 * Generates 301 redirects in functions/path-redirects.json from old routing slugs.
 * Run: node scripts/migrate-cheats-urls-to-hacks.mjs
 */
import { readFile, writeFile, readdir, rename, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROUTING = path.join(ROOT, 'src/data/i18n/routing.ts');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SKIP_DIRS = new Set([
	'node_modules',
	'dist',
	'.git',
	'tmp',
	'.astro',
	'the-finals-cheats-org',
	'sea-of-thieves-cheats-org-audit',
]);
const SKIP_FILES = new Set(['package-lock.json', 'migrate-cheats-urls-to-hacks.mjs']);

/** Ordered — longest / most specific first. Image asset names are excluded via guard. */
const SLUG_REPLACEMENTS = [
	['undetected-sea-of-thieves-cheats-eac', 'undetected-sea-of-thieves-cheats-eac'],
	['undetected-sea-of-thieves-cheats', 'undetected-sea-of-thieves-cheats'],
	['unentdeckte-sea-of-thieves-cheats', 'unentdeckte-sea-of-thieves-cheats'],
	['buy-undetected-sea-of-thieves-cheats-windows-pc', 'buy-undetected-sea-of-thieves-cheats-windows-pc'],
	['eac-anti-cheat-and-sea-of-thieves-cheats', 'eac-anti-cheat-and-sea-of-thieves-cheats'],
	['are-sea-of-thieves-cheats-undetected-in-2026', 'are-sea-of-thieves-cheats-undetected-in-2026'],
	['what-are-sea-of-thieves-cheats', 'what-are-sea-of-thieves-cheats'],
	['does-sea-of-thieves-cheats-include-radar-hack', 'does-sea-of-thieves-cheats-include-radar-hack'],
	['sea-of-thieves-cheats-vs-ghostware-features-pricing', 'sea-of-thieves-cheats-vs-ghostware-features-pricing'],
	['sea-of-thieves-cheats-vs-cheatvault-comparison', 'sea-of-thieves-cheats-vs-cheatvault-comparison'],
	['elitefn-vs-sea-of-thieves-cheats-two-week-test', 'elitefn-vs-sea-of-thieves-cheats-two-week-test'],
	['sea-of-thieves-cheats-complete-guide-2026', 'sea-of-thieves-cheats-complete-guide-2026'],
	['sea-of-thieves-cheats-2026-whats-new', 'sea-of-thieves-cheats-2026-whats-new'],
	['sea-of-thieves-cheats-buyers-guide', 'sea-of-thieves-cheats-buyers-guide'],
	['best-sea-of-thieves-cheats', 'best-sea-of-thieves-cheats'],
	['beste-sea-of-thieves-cheats', 'beste-sea-of-thieves-cheats'],
	['basta-sea-of-thieves-cheats', 'basta-sea-of-thieves-cheats'],
	['nejlepsi-sea-of-thieves-cheats', 'nejlepsi-sea-of-thieves-cheats'],
	['sea-of-thieves-cheats-2026', 'sea-of-thieves-cheats-2026'],
	['sea-of-thieves-cheats-funktionen', 'sea-of-thieves-cheats-funktionen'],
	['sea-of-thieves-cheats-functies', 'sea-of-thieves-cheats-functies'],
	['sea-of-thieves-cheats-funkce', 'sea-of-thieves-cheats-funkce'],
	['sea-of-thieves-cheats-funktioner', 'sea-of-thieves-cheats-funktioner'],
	['sea-of-thieves-cheats-features', 'sea-of-thieves-cheats-features'],
	['sea-of-thieves-cheats-preise', 'sea-of-thieves-cheats-preise'],
	['sea-of-thieves-cheats-prijzen', 'sea-of-thieves-cheats-prijzen'],
	['sea-of-thieves-cheats-priser', 'sea-of-thieves-cheats-priser'],
	['sea-of-thieves-cheats-pricing', 'sea-of-thieves-cheats-pricing'],
	['sea-of-thieves-cheats-ceny', 'sea-of-thieves-cheats-ceny'],
	['sea-of-thieves-cheats-installation', 'sea-of-thieves-cheats-installation'],
	['sea-of-thieves-cheats-installatie', 'sea-of-thieves-cheats-installatie'],
	['sea-of-thieves-cheats-instalace', 'sea-of-thieves-cheats-instalace'],
	['sea-of-thieves-cheats-setup', 'sea-of-thieves-cheats-setup'],
	['sea-of-thieves-cheats-updates', 'sea-of-thieves-cheats-updates'],
	['sea-of-thieves-cheats-uppdateringar', 'sea-of-thieves-cheats-uppdateringar'],
	['sea-of-thieves-cheats-aktualizace', 'sea-of-thieves-cheats-aktualizace'],
	['sea-of-thieves-cheats-faq', 'sea-of-thieves-cheats-faq'],
	['sea-of-thieves-cheats-support', 'sea-of-thieves-cheats-support'],
	['sea-of-thieves-cheats-podpora', 'sea-of-thieves-cheats-podpora'],
	['niewykrywalne-cheats-sea-of-thieves', 'niewykrywalne-cheats-sea-of-thieves'],
	['najlepsze-cheats-sea-of-thieves', 'najlepsze-hacks-valorant'],
	['melhores-cheats-sea-of-thieves', 'melhores-hacks-valorant'],
	['cele-mai-bune-cheats-sea-of-thieves', 'cele-mai-bune-hacks-valorant'],
	['cheats-sea-of-thieves-indetectaveis', 'cheats-sea-of-thieves-indetectaveis'],
	['cheats-sea-of-thieves-nedetectabile', 'cheats-sea-of-thieves-nedetectabile'],
	['cheats-sea-of-thieves-2026', 'hacks-valorant-2026'],
	['hacks-cheats-sea-of-thieves', 'hacks-valorant'],
	['faq-cheats-sea-of-thieves', 'faq-hacks-valorant'],
	['functii-cheats-sea-of-thieves', 'functii-hacks-valorant'],
	['preturi-cheats-sea-of-thieves', 'preturi-hacks-valorant'],
	['actualizari-cheats-sea-of-thieves', 'actualizari-hacks-valorant'],
	['instalare-cheats-sea-of-thieves', 'instalare-hacks-valorant'],
	['suport-cheats-sea-of-thieves', 'suport-hacks-valorant'],
	['recursos-cheats-sea-of-thieves', 'recursos-cheats-sea-of-thieves'],
	['precos-cheats-sea-of-thieves', 'precos-hacks-valorant'],
	['atualizacoes-cheats-sea-of-thieves', 'atualizacoes-hacks-valorant'],
	['instalacao-cheats-sea-of-thieves', 'instalacao-hacks-valorant'],
	['suporte-cheats-sea-of-thieves', 'suporte-hacks-valorant'],
	['download-cheats-sea-of-thieves', 'download-hacks-valorant'],
	['menu-mod-cheats-sea-of-thieves', 'menu-mod-hacks-valorant'],
	['meniu-mod-cheats-sea-of-thieves', 'meniu-mod-hacks-valorant'],
	['soft-aim-cheats-sea-of-thieves', 'soft-aim-hacks-valorant'],
	['aimbot-hack-cheats-sea-of-thieves', 'aimbot-hack-hacks-valorant'],
	['esp-hack-cheats-sea-of-thieves', 'esp-hack-hacks-valorant'],
	['unlock-all-cheats-sea-of-thieves', 'unlock-all-hacks-valorant'],
	['wallhack-cheats-sea-of-thieves', 'wallhack-hacks-valorant'],
	['radar-hack-cheats-sea-of-thieves', 'radar-hack-hacks-valorant'],
	['descarcare-cheats-sea-of-thieves', 'descarcare-hacks-valorant'],
	['cheats-sea-of-thieves-esp', 'hacks-sea-of-thieves-esp'],
	['cheats-sea-of-thieves-aimbot', 'hacks-sea-of-thieves-aimbot'],
	['eac-bypass-cheats', 'eac-bypass-hacks'],
	['/sea-of-thieves-cheats/', '/sea-of-thieves-cheats/'],
	['/sea-of-thieves-cheats', '/sea-of-thieves-cheats'],
	["'sea-of-thieves-cheats'", "'sea-of-thieves-cheats'"],
	['"sea-of-thieves-cheats"', '"sea-of-thieves-cheats"'],
];

const IMAGE_ASSET_PREFIX = '/images/sea-of-thieves-cheats';

function applySlugReplacements(text) {
	let out = text;
	for (const [from, to] of SLUG_REPLACEMENTS) {
		if (!out.includes(from)) continue;
		out = out
			.split('\n')
			.map((line) => {
				// Never rewrite static image asset filenames.
				if (line.includes('/images/sea-of-thieves-cheats')) {
					return line;
				}
				return line.split(from).join(to);
			})
			.join('\n');
	}
	return out;
}

function parseEnglishPaths(src) {
	const block = src.match(/export const englishPaths[\s\S]*?=\s*\{([\s\S]*?)\n\};/);
	if (!block) throw new Error('englishPaths block not found');
	/** @type {Record<string, string>} */
	const paths = {};
	for (const row of block[1].matchAll(/\t(?:'([^']+)'|(\w+)):\s*'([^']*)',/g)) {
		paths[row[1] ?? row[2]] = row[3];
	}
	return paths;
}

function parseLocalizedSlugs(src) {
	const localized = src.slice(src.indexOf('export const localizedSlugs'));
	/** @type {Record<string, Record<string, string>>} */
	const slugs = {};
	for (const block of localized.matchAll(/\t(?:'([^']+)'|(\w+)):\s*\{([\s\S]*?)\n\t\},/g)) {
		const pageId = block[1] ?? block[2];
		slugs[pageId] = {};
		for (const row of block[3].matchAll(/\t(\w+):\s*'([^']*)',/g)) {
			slugs[pageId][row[1]] = row[2];
		}
	}
	return slugs;
}

function localePath(locale, slug) {
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

function addRedirectPair(map, fromPath, toPath) {
	if (!fromPath || !toPath || fromPath === toPath) return;
	map[fromPath] = toPath;
	const noSlash = fromPath.replace(/\/$/, '');
	if (noSlash !== fromPath) map[noSlash] = toPath;
}

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else files.push(full);
	}
	return files;
}

function shouldProcess(file) {
	const rel = path.relative(ROOT, file);
	if (SKIP_FILES.has(path.basename(file))) return false;
	if (rel.startsWith('public/images/')) return false;
	if (/\.(png|jpg|jpeg|webp|gif|ico|woff2?|mp4)$/i.test(file)) return false;
	return true;
}

const DIR_RENAMES = [
	['src/pages/sea-of-thieves-cheats', 'src/pages/sea-of-thieves-cheats'],
	['src/pages/best-sea-of-thieves-cheats', 'src/pages/best-sea-of-thieves-cheats'],
	['src/pages/undetected-sea-of-thieves-cheats', 'src/pages/undetected-sea-of-thieves-cheats'],
	['src/pages/sea-of-thieves-cheats-2026', 'src/pages/sea-of-thieves-cheats-2026'],
];

// --- Parse routing before migration ---
const routingBefore = await readFile(ROUTING, 'utf8');
const englishBefore = parseEnglishPaths(routingBefore);
const slugsBefore = parseLocalizedSlugs(routingBefore);

// --- Apply text replacements across repo ---
let changed = 0;
const files = await walk(ROOT);
for (const file of files) {
	if (!shouldProcess(file)) continue;
	const original = await readFile(file, 'utf8');
	const updated = applySlugReplacements(original);
	if (updated !== original) {
		await writeFile(file, updated, 'utf8');
		changed++;
	}
}

// Fix duplicate check in routing.ts
let routing = await readFile(ROUTING, 'utf8');
routing = routing.replace(
	"if (withSlash === '/sea-of-thieves-cheats/' || withSlash === '/sea-of-thieves-cheats/')",
	"if (withSlash === '/sea-of-thieves-cheats/' || withSlash === '/sea-of-thieves-cheats/')",
);
await writeFile(ROUTING, routing, 'utf8');

// --- Rename page directories ---
for (const [fromRel, toRel] of DIR_RENAMES) {
	const from = path.join(ROOT, fromRel);
	const to = path.join(ROOT, toRel);
	try {
		await access(from);
		await rename(from, to);
		console.log(`renamed ${fromRel} → ${toRel}`);
	} catch {
		// already migrated
	}
}

// --- Build redirects from slug diff ---
const routingAfter = await readFile(ROUTING, 'utf8');
const englishAfter = parseEnglishPaths(routingAfter);
const slugsAfter = parseLocalizedSlugs(routingAfter);

const existingRedirects = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const newRedirects = { ...existingRedirects };

for (const [pageId, oldPath] of Object.entries(englishBefore)) {
	const newPath = englishAfter[pageId];
	if (oldPath && newPath && oldPath !== newPath) {
		addRedirectPair(newRedirects, oldPath.replace(/\/$/, ''), newPath);
		addRedirectPair(newRedirects, oldPath, newPath);
	}
}

for (const [pageId, localeMap] of Object.entries(slugsBefore)) {
	const afterMap = slugsAfter[pageId] ?? {};
	for (const [locale, oldSlug] of Object.entries(localeMap)) {
		const newSlug = afterMap[locale];
		if (oldSlug === newSlug) continue;
		const from = localePath(locale, oldSlug);
		const to = localePath(locale, newSlug);
		addRedirectPair(newRedirects, from, to);
	}
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(newRedirects, null, 2)}\n`);

console.log(`\nmigrate-cheats-urls-to-hacks: ${changed} file(s) updated`);
console.log(
	`Added/updated ${Object.keys(newRedirects).length - Object.keys(existingRedirects).length} redirect entries in path-redirects.json`,
);
