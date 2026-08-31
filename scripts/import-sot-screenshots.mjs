/**
 * Import Sea of Thieves cheat screenshots from Supabase public storage.
 * Writes SEO crawl URLs: /images/sea-of-thieves-cheats-*.webp
 * plus -480w / -960w responsive variants. Does not touch hero assets.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const BASE =
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/';

/** User-provided Sea of Thieves screenshots (Aug 2026). */
const SCREENSHOTS = [
	{
		url: `${BASE}1.png`,
		slug: 'sea-of-thieves-cheats-esp-player-skeleton',
		aliases: [
			'sea-of-thieves-cheats-esp.webp',
			'sea-of-thieves-esp-player-tags.webp',
			'sea-of-thieves-cheats-wallhack.webp',
		],
	},
	{
		url: `${BASE}2.png`,
		slug: 'sea-of-thieves-cheats-ship-tracking-esp',
		aliases: ['sea-of-thieves-cheats-session.webp', 'sea-of-thieves-esp-radar.webp'],
	},
	{
		url: `${BASE}3.png`,
		slug: 'sea-of-thieves-cheats-aimbot-cannon',
		aliases: ['sea-of-thieves-cheats-aimbot.webp', 'sea-of-thieves-cheats-combat.webp'],
	},
	{
		url: `${BASE}4.png`,
		slug: 'sea-of-thieves-cheats-esp-ship-approach',
		aliases: [
			'sea-of-thieves-cheats-aimbot-view.webp',
			'sea-of-thieves-aimbot-skeleton.webp',
			'sea-of-thieves-aimbot-sniper.webp',
		],
	},
	{
		url: `${BASE}5.png`,
		slug: 'sea-of-thieves-cheats-esp-island-overlay',
		aliases: ['sea-of-thieves-cheats-radar.webp', 'sea-of-thieves-cheats-mod-menu.webp'],
	},
];

const imagesDir = path.resolve('public/images');
const tmpDir = path.resolve('tmp/sot-screenshots/sources');

const CONTENT_WIDTHS = [480, 960];
const WEBP = { quality: 82, effort: 6, smartSubsample: true };

async function fetchSource(url, index) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SeaOfThievesCheatsSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Download failed (${index + 1}): HTTP ${res.status} — ${url}`);
	const buf = Buffer.from(await res.arrayBuffer());
	const file = path.join(tmpDir, `source-${String(index + 1).padStart(2, '0')}.png`);
	await writeFile(file, buf);
	return file;
}

async function encodeWebp(input, width, options = WEBP) {
	const meta = await sharp(input).metadata();
	const nativeWidth = meta.width ?? width;
	const targetWidth = Math.min(width, nativeWidth);
	const height = Math.round(((meta.height ?? 595) / nativeWidth) * targetWidth);
	return sharp(input)
		.resize(targetWidth, height, { fit: 'inside', withoutEnlargement: true })
		.webp(options)
		.toBuffer();
}

async function writeScreenshotSet(pngPath, baseName) {
	const outputs = [];
	let canonical = null;

	for (const width of CONTENT_WIDTHS) {
		const file = `${baseName}-${width}w.webp`;
		const webp = await encodeWebp(pngPath, width);
		await writeFile(path.join(imagesDir, file), webp);
		outputs.push({ file, bytes: webp.length });
	}

	canonical = await encodeWebp(pngPath, 960);
	await writeFile(path.join(imagesDir, `${baseName}.webp`), canonical);
	outputs.push({ file: `${baseName}.webp`, bytes: canonical.length });

	return { outputs, canonical };
}

await mkdir(imagesDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

console.log(`Downloading ${SCREENSHOTS.length} Supabase screenshots…`);
const sourceFiles = [];
for (let i = 0; i < SCREENSHOTS.length; i += 1) {
	console.log(`  ↓ ${i + 1}/${SCREENSHOTS.length}`);
	sourceFiles.push(await fetchSource(SCREENSHOTS[i].url, i));
}

let totalBytes = 0;

for (let i = 0; i < SCREENSHOTS.length; i += 1) {
	const { slug, aliases } = SCREENSHOTS[i];
	const png = sourceFiles[i];

	console.log(`Processing ${slug}…`);
	const { outputs, canonical } = await writeScreenshotSet(png, slug);
	for (const { file, bytes } of outputs) {
		totalBytes += bytes;
		console.log(`  ✓ ${file} (${Math.round(bytes / 1024)}KB)`);
	}

	for (const name of aliases) {
		await writeFile(path.join(imagesDir, name), canonical);
		console.log(`  ✓ ${name} (alias)`);
	}
}

console.log(
	`\nDone — ${SCREENSHOTS.length} SEO canonical URLs + responsive variants (~${Math.round(totalBytes / 1024)}KB webp)`,
);
console.log('Hero assets unchanged.');
