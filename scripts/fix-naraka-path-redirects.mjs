#!/usr/bin/env node
/**
 * Fix path-redirects.json: rewrite valorant destinations → naraka and add legacy valorant → naraka 301s.
 * Run: node scripts/fix-naraka-path-redirects.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PATH_REDIRECTS = path.join(ROOT, 'functions/path-redirects.json');

const SLUG_MAP = [
	['valorant-hacks', 'sea-of-thieves-cheats'],
	['valorant-esp', 'sea-of-thieves-esp'],
	['valorant-aimbot', 'sea-of-thieves-aimbot'],
	['valorant-wallhack', 'sea-of-thieves-wallhack'],
	['valorant-radar-hack', 'sea-of-thieves-radar-hack'],
	['valorant-soft-aim', 'sea-of-thieves-soft-aim'],
	['valorant-mod-menu', 'sea-of-thieves-mod-menu'],
	['valorant-cheat-download', 'sea-of-thieves-cheat-download'],
	['valorant-aimbot-hack', 'sea-of-thieves-aimbot-hack'],
	['valorant-esp-hack', 'sea-of-thieves-esp-hack'],
	['valorant-unlock-all', 'sea-of-thieves-unlock-all'],
	['undetected-valorant-hacks', 'undetected-sea-of-thieves-cheats'],
	['best-valorant-hacks', 'best-sea-of-thieves-cheats'],
	['valorant-hacks-2026', 'sea-of-thieves-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['valorant-cheats', 'sea-of-thieves-cheats'],
	['valorant-cheat', 'sea-of-thieves-cheat'],
	['hacks-valorant', 'cheats-sea-of-thieves'],
	['valorant', 'sot'],
];

function rewritePath(p) {
	let out = p;
	for (const [from, to] of SLUG_MAP) {
		out = out.split(from).join(to);
	}
	return out;
}

function addPair(map, from, to) {
	if (!from || !to || from === to) return;
	map[from] = to;
	const noSlash = from.replace(/\/$/, '');
	if (noSlash !== from) map[noSlash] = to;
}

const raw = JSON.parse(await readFile(PATH_REDIRECTS, 'utf8'));
const fixed = {};

for (const [key, value] of Object.entries(raw)) {
	const newKey = rewritePath(key);
	const newValue = rewritePath(value);
	addPair(fixed, newKey, newValue);
}

// Legacy valorant EN paths → naraka
const EN_REDIRECTS = [
	['/valorant-hacks', '/sea-of-thieves-cheats/'],
	['/valorant-esp', '/sea-of-thieves-esp/'],
	['/valorant-aimbot', '/sea-of-thieves-aimbot/'],
	['/valorant-wallhack', '/sea-of-thieves-wallhack/'],
	['/valorant-radar-hack', '/sea-of-thieves-radar-hack/'],
	['/valorant-soft-aim', '/sea-of-thieves-soft-aim/'],
	['/valorant-mod-menu', '/sea-of-thieves-mod-menu/'],
	['/valorant-cheat-download', '/sea-of-thieves-cheat-download/'],
	['/valorant-aimbot-hack', '/sea-of-thieves-aimbot-hack/'],
	['/valorant-esp-hack', '/sea-of-thieves-esp-hack/'],
	['/valorant-unlock-all', '/sea-of-thieves-unlock-all/'],
	['/undetected-valorant-hacks', '/undetected-sea-of-thieves-cheats/'],
	['/best-valorant-hacks', '/best-sea-of-thieves-cheats/'],
	['/valorant-hacks-2026', '/sea-of-thieves-cheats-2026/'],
	['/eac-bypass', '/eac-bypass/'],
	['/valorant-cheats', '/sea-of-thieves-cheats/'],
];

for (const [from, to] of EN_REDIRECTS) {
	addPair(fixed, from, to);
	addPair(fixed, `${from}/`, to);
}

await writeFile(PATH_REDIRECTS, `${JSON.stringify(fixed, null, 2)}\n`);
console.log(`fix-naraka-path-redirects: ${Object.keys(fixed).length} redirect entries`);
