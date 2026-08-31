#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clea Sea of Thieves source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['sea-of-thieves-esp', 'sea-of-thieves-esp'],
	['sea-of-thieves-aimbot', 'sea-of-thieves-aimbot'],
	['eac', 'eac'],
	['undetected-sea-of-thieves-cheats', 'undetected-sea-of-thieves-cheats'],
	['sea-of-thieves-wallhack', 'sea-of-thieves-wallhack'],
	['sea-of-thieves-radar-hack', 'sea-of-thieves-radar-hack'],
	['sea-of-thieves-cheats-2026', 'sea-of-thieves-cheats-2026'],
	['eac-bypass', 'eac-bypass'],
	['seaofthievescheats.com', 'seaofthievescheats.com'],
	['trucos-sea-of-thieves', 'trucos-sea-of-thieves'],
	['triche-sea-of-thieves', 'triche-sea-of-thieves'],
	['sea-of-thieves-cheats', 'sea-of-thieves-cheats'],
	['cheats-sea-of-thieves', 'cheats-sea-of-thieves'],
	['trucchi-sea-of-thieves', 'trucchi-sea-of-thieves'],
	['cheaty-sea-of-thieves', 'cheaty-sea-of-thieves'],
	['chity-sea-of-thieves', 'chity-sea-of-thieves'],
	['chitov-sea-of-thieves', 'chitov-sea-of-thieves'],
	['chitiv-sea-of-thieves', 'chitiv-sea-of-thieves'],
	['cheatow-sea-of-thieves', 'cheatow-sea-of-thieves'],
	['hile-sea-of-thieves', 'hile-sea-of-thieves'],
	['sot-hile', 'sot-hile'],
	['sea-of-thieves-esp-chity', 'sea-of-thieves-esp-chity'],
	['sea-of-thieves-aimbot-chity', 'sea-of-thieves-aimbot-chity'],
	['unentdeckte-sea-of-thieves-cheats', 'unentdeckte-sea-of-thieves-cheats'],
	['cheats-sea-of-thieves-indetectaveis', 'cheats-sea-of-thieves-indetectaveis'],
	['trucchi-sea-of-thieves-indetectabili', 'trucchi-sea-of-thieves-indetectabili'],
	['niewykrywalne-cheats-sea-of-thieves', 'niewykrywalne-cheats-sea-of-thieves'],
	['nedecektiruemye-chity-sea-of-thieves', 'nedecektiruemye-chity-sea-of-thieves'],
	['tespit-edilemeyen-sot-hileleri', 'tespit-edilemeyen-sot-hileleri'],
	['nedecektovani-chity-sea-of-thieves', 'nedecektovani-chity-sea-of-thieves'],
	['cheats-sea-of-thieves-nedetectabile', 'cheats-sea-of-thieves-nedetectabile'],
	['basta-sea-of-thieves-cheats', 'basta-sea-of-thieves-cheats'],
	['eac-bypass-trucos-sea-of-thieves', 'eac-bypass-trucos-sea-of-thieves'],
	['eac-bypass-triche-sea-of-thieves', 'eac-bypass-triche-sea-of-thieves'],
	['eac-bypass-hacks-valorant', 'eac-bypass-hacks-valorant'],
	['eac-bypass-chity-sea-of-thieves', 'eac-bypass-chity-sea-of-thieves'],
	['eac-bypass-rust', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich sea-of-thieves-cheats paths. */
export const HERO_IMAGES = {
	home: '/images/the-sea-of-thieves-cheats-hero.webp',
	'sea-of-thieves-esp': '/images/the-sea-of-thieves-cheats-esp-wallhack.webp',
	'sea-of-thieves-aimbot': '/images/the-sea-of-thieves-cheats-aimbot-combat.webp',
	features: '/images/sea-of-thieves-cheats-package.webp',
	pricing: '/images/sea-of-thieves-cheats-cover.webp',
	setup: '/images/rust-loadout-builder.webp',
	updates: '/images/rust-header-art.webp',
	faq: '/images/rust-pack-fight.webp',
	support: '/images/sea-of-thieves-cheats-package.webp',
	undetected: '/images/rust-survival-combat.webp',
	wallhack: '/images/the-sea-of-thieves-cheats-esp-wallhack.webp',
	radar: '/images/rust-player-esp.webp',
	'eac': '/images/rust-reboot-van-fight.webp',
	'cheats-2026': '/images/the-sea-of-thieves-cheats-hero.webp',
	privacy: '/images/the-sea-of-thieves-cheats-aimbot-combat.webp',
	refund: '/images/sea-of-thieves-cheats-cover.webp',
	terms: '/images/sea-of-thieves-cheats-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'sea-of-thieves-esp', 'sea-of-thieves-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'sea-of-thieves-esp' | 'sea-of-thieves-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'raidFight');
	content = content.replace(/alMazrah/g, 'raidMap');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
