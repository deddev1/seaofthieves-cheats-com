#!/usr/bin/env node
/**
 * Generate Sea of Thieves Cheats favicons and site logo rasters from brand-mark-source.svg.
 * Run: npm run generate:favicon
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const IMAGES = path.join(PUBLIC, 'images');
const SOURCE_SVG = path.join(IMAGES, 'brand-mark-source.svg');

async function rasterize(size) {
	const svg = await readFile(SOURCE_SVG);
	return sharp(svg, { density: Math.max(72, Math.ceil((size / 512) * 300)) })
		.resize(size, size)
		.png()
		.toBuffer();
}

async function writeSiteLogos(sourcePng) {
	const logoPng = await sharp(sourcePng).resize(512, 512).png().toBuffer();
	const logoWebp = await sharp(logoPng).webp({ quality: 90, effort: 6 }).toBuffer();
	const markWebp = await sharp(logoPng).resize(128, 128).webp({ quality: 90, effort: 6 }).toBuffer();

	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo.png'), logoPng);
	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo.webp'), logoWebp);
	await writeFile(path.join(IMAGES, 'sea-of-thieves-cheats-logo-mark.webp'), markWebp);
	console.log('Wrote public/images/sea-of-thieves-cheats-logo.{png,webp} + logo-mark.webp');

	const markSvg = await readFile(SOURCE_SVG, 'utf8');
	await writeFile(path.join(IMAGES, 'brand-mark.svg'), markSvg);
	console.log('Wrote public/images/brand-mark.svg');
}

async function main() {
	const master = await rasterize(512);

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(path.join(PUBLIC, name), await sharp(master).resize(size, size).png().toBuffer());
		console.log(`Wrote public/${name}`);
	}

	await writeFile(path.join(PUBLIC, 'favicon.ico'), await sharp(master).resize(32, 32).png().toBuffer());
	console.log('Wrote public/favicon.ico');

	const svgBase64 = master.toString('base64');
	await writeFile(
		path.join(PUBLIC, 'favicon.svg'),
		`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><image width="512" height="512" href="data:image/png;base64,${svgBase64}"/></svg>`,
	);
	console.log('Wrote public/favicon.svg');

	await writeSiteLogos(master);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
