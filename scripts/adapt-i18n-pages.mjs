#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Sea of Thieves source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['sea-of-thieves-esp', 'sea-of-thieves-esp'],
	['sea-of-thieves-aimbot', 'sea-of-thieves-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-sea-of-thieves-cheats', 'undetected-sea-of-thieves-cheats'],
	['sea-of-thieves-wallhack', 'sea-of-thieves-wallhack'],
	['sea-of-thieves-radar-hack', 'sea-of-thieves-radar-hack'],
	['sea-of-thieves-cheats-2026', 'sea-of-thieves-cheats-2026'],
	['sea-of-thieves-cheats', 'sea-of-thieves-cheats'],
	['the-rust', 'rust'],
	['Sea of Thieves's, 'Sea of Thieves's],
	['Sea of Thieves's, 'Sea of Thieves's],
	['Sea of Thieves Cheats', 'Sea of Thieves Cheats'],
	['sea of thieves cheats', 'sea of thieves cheats'],
	['sea of thieves cheat', 'sea of thieves cheat'],
	['Sea of Thieves ESP', 'Sea of Thieves ESP'],
	['Sea of Thieves Aimbot', 'Sea of Thieves Aimbot'],
	['sea of thieves wallhack', 'Sea of Thieves wallhack'],
	['sea of thieves radar', 'Sea of Thieves radar'],
	['Sea of Thieves naval combats', 'Sea of Thieves naval combats'],
	['Sea of Thieves combat', 'Sea of Thieves combat'],
	['Sea of Thieves patches', 'Sea of Thieves patches'],
	['Sea of Thieves updates', 'Sea of Thieves updates'],
	['Sea of Thieves setup', 'Sea of Thieves setup'],
	['Sea of Thieves license', 'Sea of Thieves license'],
	['Sea of Thieves licenses', 'Sea of Thieves licenses'],
	['Sea of Thieves matches', 'Sea of Thieves matches'],
	['in Sea of Thieves', 'in Sea of Thieves'],
	['for Sea of Thieves', 'for Sea of Thieves'],
	['Sea of Thieves on', 'Sea of Thieves on'],
	['Sea of Thieves or', 'Sea of Thieves or'],
	['Sea of Thieves\'s', 'Sea of Thieves\'s'],
	['Sea of Thieves ', 'Sea of Thieves '],
	['EAC', 'EAC'],
	['EAC maintenance', 'EAC maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['EAC', 'EAC'],
	['eac', 'eac'],
	['support@seaofthievescheats.com', 'support@seaofthievescheats.com'],
	['islands, outposts, and sea routes', 'islands, outposts, and sea routes'],
	['islands, outposts and sea routes', 'islands, outposts and sea routes'],
	['raid fights', 'raid fights'],
	['raid fight', 'raid fight'],
	['match rounds', 'match rounds'],
	['extract', 'extract'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['raid timer', 'raid timer'],
	['voyages, PvP sessions and ranked matches', 'voyages, PvP sessions and ranked matches'],
	['voyages, PvP sessions and ranked matches', 'voyages, PvP sessions and ranked matches'],
	['crews & ranked teams', 'crews & ranked teams'],
	['high-value loot', 'high-value loot'],
	['high-value loot', 'high-value loot'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Sea of Thieves combat pace'],
	['COD', 'Sea of Thieves's],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Sea of Thieves Cheats',
	game: 'Sea of Thieves's,
	checkout: 'Zadeyo',
	eac: 'EAC',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'islands, outposts, and sea routes'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
