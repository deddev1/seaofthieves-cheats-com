#!/usr/bin/env node
/**
 * Rebrand seaofthievescheats.com → seaofthievescheats.com (Sea of Thieves Cheats → Sea of Thieves Cheats).
 * Run from project root: node scripts/rebrand-sea-of-thieves-cheats.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro']);
const SKIP_FILES = new Set(['package-lock.json', 'rebrand-sea-of-thieves-cheats.mjs']);

/** Ordered — most specific first. */
const REPLACEMENTS = [
	['https://www.seaofthievescheats.com', 'https://www.seaofthievescheats.com'],
	['https://seaofthievescheats.com', 'https://seaofthievescheats.com'],
	['www.seaofthievescheats.com', 'www.seaofthievescheats.com'],
	['support@seaofthievescheats.com', 'support@seaofthievescheats.com'],
	['seaofthievescheats.com', 'seaofthievescheats.com'],
	['project-name=seaofthievescheats', 'project-name=seaofthievescheats'],
	['name = "valorantcheats"', 'name = "seaofthieves-cheats-com"'],
	['Sea of Thieves Cheats', 'Sea of Thieves Cheats'],
];

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

let changed = 0;
const files = await walk(ROOT);
for (const file of files) {
	if (!shouldProcess(file)) continue;
	let text = await readFile(file, 'utf8');
	const original = text;
	for (const [from, to] of REPLACEMENTS) {
		text = text.split(from).join(to);
	}
	if (text !== original) {
		await writeFile(file, text, 'utf8');
		changed++;
		console.log('updated', path.relative(ROOT, file));
	}
}

console.log(`\nrebrand-sea-of-thieves-cheats: ${changed} file(s) updated`);
