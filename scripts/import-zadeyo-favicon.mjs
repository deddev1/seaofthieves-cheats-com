#!/usr/bin/env node
/**
 * Replace public favicons with Zadeyo's favicon (checkout provider).
 * Run: node scripts/import-zadeyo-favicon.mjs
 */
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const TMP = path.join(ROOT, 'tmp');

const ZADEYO_FAVICON = 'https://zadeyo.com/favicon.ico';
const ZADEYO_APPLE = 'https://zadeyo.com/apple-touch-icon.png';

async function download(url, dest) {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to download ${url}: ${res.status}`);
	await writeFile(dest, Buffer.from(await res.arrayBuffer()));
}

async function main() {
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
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
