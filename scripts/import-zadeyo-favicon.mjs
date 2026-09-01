#!/usr/bin/env node
/**
 * Replace public favicons and site logo rasters with Zadeyo assets (checkout provider).
 * Run: node scripts/import-zadeyo-favicon.mjs
 */
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const IMAGES = path.join(PUBLIC, 'images');
const TMP = path.join(ROOT, 'tmp');

const ZADEYO_FAVICON = 'https://zadeyo.com/favicon.ico';
const ZADEYO_APPLE = 'https://zadeyo.com/apple-touch-icon.png';
const SITE_BG = { r: 7, g: 26, b: 31, alpha: 1 }; // brand.theme.bg #071A1F

async function download(url, dest) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
	await writeFile(dest, Buffer.from(await res.arrayBuffer()));
}

async function squareLogoPng(sourceBuffer, size) {
	return sharp(sourceBuffer)
		.resize(size, size, { fit: 'contain', background: SITE_BG })
		.png()
		.toBuffer();
}

async function writeSiteLogos(sourceBuffer) {
	const logoPng = await squareLogoPng(sourceBuffer, 512);
	const logoWebp = await sharp(logoPng).webp({ quality: 90, effort: 6 }).toBuffer();
	const markWebp = await sharp(logoPng).resize(128, 128).webp({ quality: 90, effort: 6 }).toBuffer();

	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo.png'), logoPng);
	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo.webp'), logoWebp);
	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo-mark.webp'), markWebp);
	console.log('Wrote public/images/sea-of-thieves-cheats-logo.{png,webp} + logo-mark.webp');

	const markSvg = await sharp(logoPng).resize(64, 64).png().toBuffer();
	const svgBase64 = markSvg.toString('base64');
	await writeFile(
		path.join(IMAGES, 'brand-mark.svg'),
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" role="img" aria-label="Sea of Thieves Cheats">
  <image width="64" height="64" href="data:image/png;base64,${svgBase64}"/>
</svg>`,
	);
	console.log('Wrote public/images/brand-mark.svg');
}

async function main() {
	await mkdir(TMP, { recursive: true });
	await mkdir(IMAGES, { recursive: true });

	await download(ZADEYO_FAVICON, path.join(TMP, 'zadeyo-favicon.ico'));
	await download(ZADEYO_APPLE, path.join(TMP, 'zadeyo-apple-touch.png'));

	const source = await sharp(path.join(TMP, 'zadeyo-apple-touch.png')).png().toBuffer();

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(path.join(PUBLIC, name), await sharp(source).resize(size, size).png().toBuffer());
		console.log(`Wrote public/${name}`);
	}

	await copyFile(path.join(TMP, 'zadeyo-favicon.ico'), path.join(PUBLIC, 'favicon.ico'));
	console.log('Wrote public/favicon.ico');

	const svgBase64 = (await sharp(source).resize(512, 512).png().toBuffer()).toString('base64');
	await writeFile(
		path.join(PUBLIC, 'favicon.svg'),
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`,
	);
	console.log('Wrote public/favicon.svg');

	await writeSiteLogos(source);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
