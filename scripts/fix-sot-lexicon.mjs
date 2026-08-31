#!/usr/bin/env node
/**
 * Final-pass Sea of Thieves lexicon cleanup — removes leftover Valorant/Vanguard strings.
 * Run: node scripts/fix-sot-lexicon.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', 'tmp', '.astro', 'valorant-hacks-org']);

/** Ordered — specific patterns first. */
const REPLACEMENTS = [
	['valorant vanguard bypass', 'sea of thieves eac bypass'],
	['valorant soft aim', 'sea of thieves soft aim'],
	['valorant mod menu', 'sea of thieves mod menu'],
	['valorant external hack', 'sea of thieves external cheat'],
	['valorant 2d radar', 'sea of thieves 2d radar'],
	['soft aim valorant', 'soft aim sea of thieves'],
	['vanguard bypass valorant', 'eac bypass sea of thieves'],
	['valorant anti cheat bypass', 'sea of thieves anti cheat bypass'],
	['hwid spoofer valorant', 'hwid spoofer sea of thieves'],
	['vanguard update', 'EAC update'],
	['vanguard undetected', 'EAC undetected'],
	['Vanguard Safe', 'EAC Safe'],
	['Vanguard maintenance', 'EAC maintenance'],
	['Vanguard rebuilds', 'EAC rebuilds'],
	['Vanguard patches', 'EAC patches'],
	['Vanguard and Sea of Thieves', 'EAC and Sea of Thieves'],
	['Vanguard or Sea of Thieves', 'EAC or Sea of Thieves'],
	['Vanguard', 'EAC'],
	['vanguard', 'eac'],
	['vanlifevalorant', 'vanlifesot'],
	['vanLifeValorant', 'vanLifeSOT'],
	['valo hack', 'sea of thieves cheat'],
	['valo cheats', 'sea of thieves cheats'],
	['valorant-patch-notes', 'sot-patch-notes'],
	['valorant-cosmetics', 'sot-cosmetics'],
	['valorant-weapon-tier-list', 'sot-weapon-tier-list'],
	['valorant-loot-run', 'sot-loot-run'],
	['valorant-competitive-meta', 'sot-competitive-meta'],
	['valorant-cashout-routes', 'sot-loot-routes'],
	['valorant-pro-settings', 'sot-pro-settings'],
	['valorant-warmup-routine', 'sot-warmup-routine'],
	['free-valorant-hack-download', 'free-sea-of-thieves-cheat-download'],
	['how-long-valorant-hack-setup-takes', 'how-long-sea-of-thieves-cheat-setup-takes'],
	['agent tiers', 'ship tiers'],
	['agents and abilities', 'pirates and weapons'],
	['agents &', 'pirates &'],
	['agent ESP', 'player ESP'],
	['agent markers', 'ship and player markers'],
	['internalLinks.vanguard', 'internalLinks.eac'],
	['Sea of Thieves hacks', 'Sea of Thieves cheats'],
	['sea of thieves cheats', 'sea of thieves cheats'],
	['sea of thieves cheat', 'sea of thieves cheat'],
	['{game} hacks', '{game} cheats'],
	['Hacks FAQ', 'Cheats FAQ'],
	['navPreview: \'Hacks\'', "navPreview: 'Cheats'"],
	["navPreview: 'Hacks'", "navPreview: 'Cheats'"],
	['/products/valorant', '/products/naraka'],
	['valo/valo cheats', 'sot/sea of thieves cheats'],
	['antiCheat: \'Vanguard\'', "antiCheat: 'EAC'"],
	['sitemap-meta.ts', 'sitemap-meta.ts'], // noop anchor
];

function walk(dir, files = []) {
	for (const name of readdirSync(dir)) {
		if (SKIP_DIRS.has(name)) continue;
		const full = path.join(dir, name);
		if (statSync(full).isDirectory()) walk(full, files);
		else files.push(full);
	}
	return files;
}

const TEXT_EXT = /\.(ts|tsx|js|mjs|astro|css|json|toml|txt|md|mdc)$/i;
let changed = 0;

for (const file of walk(ROOT)) {
	if (!TEXT_EXT.test(file)) continue;
	if (path.basename(file) === 'fix-sot-lexicon.mjs') continue;
	if (path.basename(file) === 'adapt-seaofthieves.mjs') continue;
	if (path.basename(file) === 'adapt-valorant.mjs') continue;
	let text = readFileSync(file, 'utf8');
	const original = text;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		text = text.split(from).join(to);
	}
	if (text !== original) {
		writeFileSync(file, text, 'utf8');
		changed++;
	}
}

console.log(`fix-sot-lexicon: ${changed} file(s) updated`);
