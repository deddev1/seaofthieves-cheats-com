#!/usr/bin/env node
/**
 * One-time migration: Naraka Cheats → Sea of Thieves Cheats (seaofthievescheats.com).
 * Run from project root: node scripts/adapt-seaofthieves.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['naraka-aimbot', 'sea-of-thieves-aimbot'],
	['naraka-esp', 'sea-of-thieves-esp'],
	['naraka-wallhack', 'sea-of-thieves-wallhack'],
	['naraka-radar-hack', 'sea-of-thieves-radar-hack'],
	['undetected-naraka-cheats', 'undetected-sea-of-thieves-cheats'],
	['naraka-cheats-2026', 'sea-of-thieves-cheats-2026'],
	['neac-bypass', 'eac-bypass'],
	['naraka-cheats', 'sea-of-thieves-cheats'],
	['naraka-cheat-download', 'sea-of-thieves-cheat-download'],
	['naraka-mod-menu', 'sea-of-thieves-mod-menu'],
	['naraka-soft-aim', 'sea-of-thieves-soft-aim'],
	['best-naraka-cheats', 'best-sea-of-thieves-cheats'],
	['naraka-aimbot-hack', 'sea-of-thieves-aimbot-hack'],
	['naraka-esp-hack', 'sea-of-thieves-esp-hack'],
	['naraka-unlock-all', 'sea-of-thieves-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://www.narakacheats.org', 'https://www.seaofthievescheats.com'],
	['https://narakacheats.org', 'https://seaofthievescheats.com'],
	['https://narakacheats.net', 'https://seaofthievescheats.com'],
	['www.narakacheats.org', 'www.seaofthievescheats.com'],
	['narakacheats.org', 'seaofthievescheats.com'],
	['narakacheats.net', 'seaofthievescheats.com'],
	['support@narakacheats.org', 'support@seaofthievescheats.com'],
	['project-name=narakacheats', 'project-name=seaofthievescheats'],
	['name = "naraka-cheats-org"', 'name = "seaofthieves-cheats-com"'],
	['name = "narakacheats"', 'name = "seaofthievescheats"'],
	['"name": "naraka-cheats"', '"name": "sea-of-thieves-cheats"'],
	['https://store.steampowered.com/app/1203220/news/', 'https://store.steampowered.com/app/1172620/news/'],
	['https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/', 'https://store.steampowered.com/app/1172620/Sea_of_Thieves/'],
	['https://store.steampowered.com/app/1203220', 'https://store.steampowered.com/app/1172620'],
	['https://naraka.fandom.com/wiki/NARAKA:_BLADEPOINT', 'https://seaofthieves.fandom.com/wiki/Sea_of_Thieves'],
	['https://naraka.fandom.com', 'https://seaofthieves.fandom.com'],
	['naraka.fandom.com', 'seaofthieves.fandom.com'],
	['https://www.narakathegame.com/', 'https://www.seaofthieves.com/'],
	['www.narakathegame.com', 'www.seaofthieves.com'],
	['https://www.reddit.com/r/NARAKA/', 'https://www.reddit.com/r/Seaofthieves/'],
	['https://x.com/narakacheats', 'https://x.com/seaofthievescheats'],
	['@narakacheats', '@seaofthievescheats'],
	['/products/naraka-bladepoint-novaxware', '/products/sea-of-thieves-novaxware'],
	['naraka-bladepoint-novaxware', 'sea-of-thieves-novaxware'],
	['undetected-naraka-cheats', 'undetected-sea-of-thieves-cheats'],
	['best-naraka-cheats', 'best-sea-of-thieves-cheats'],
	['naraka-cheat-download', 'sea-of-thieves-cheat-download'],
	['naraka-cheats-2026', 'sea-of-thieves-cheats-2026'],
	['naraka-radar-hack', 'sea-of-thieves-radar-hack'],
	['naraka-aimbot-hack', 'sea-of-thieves-aimbot-hack'],
	['naraka-esp-hack', 'sea-of-thieves-esp-hack'],
	['naraka-unlock-all', 'sea-of-thieves-unlock-all'],
	['naraka-soft-aim', 'sea-of-thieves-soft-aim'],
	['naraka-mod-menu', 'sea-of-thieves-mod-menu'],
	['naraka-wallhack', 'sea-of-thieves-wallhack'],
	['naraka-aimbot', 'sea-of-thieves-aimbot'],
	['naraka-esp', 'sea-of-thieves-esp'],
	["'naraka-esp'", "'sot-esp'"],
	['"naraka-esp"', '"sot-esp"'],
	["'naraka-aimbot'", "'sot-aimbot'"],
	['"naraka-aimbot"', '"sot-aimbot"'],
	['naraka-cheats', 'sea-of-thieves-cheats'],
	['naraka-cheat', 'sea-of-thieves-cheat'],
	['narakaImages', 'sotImages'],
	["from './naraka'", "from './sot'"],
	["from '../data/naraka'", "from '../data/sot'"],
	["from '../../data/naraka'", "from '../../data/sot'"],
	['fetch-naraka-images', 'fetch-sot-images'],
	['fetch-naraka-hero', 'fetch-sot-hero'],
	['import-naraka-screenshots', 'import-sot-screenshots'],
	['naraka-hack-overlays', 'sot-hack-overlays'],
	['fix-naraka-copy', 'fix-sot-copy'],
	['fix-naraka-content', 'fix-sot-content'],
	['fix-naraka-lexicon', 'fix-sot-lexicon'],
	['adapt-naraka', 'adapt-seaofthieves'],
	['rebrand-naraka-cheats', 'rebrand-seaofthieves-cheats'],
	['trucos-naraka', 'trucos-sea-of-thieves'],
	['triche-naraka', 'triche-sea-of-thieves'],
	['cheats-naraka', 'cheats-sea-of-thieves'],
	['trucchi-naraka', 'trucchi-sea-of-thieves'],
	['cheaty-naraka', 'cheaty-sea-of-thieves'],
	['chity-naraka', 'chity-sea-of-thieves'],
	['chitov-naraka', 'chitov-sea-of-thieves'],
	['chitiv-naraka', 'chitiv-sea-of-thieves'],
	['cheatow-naraka', 'cheatow-sea-of-thieves'],
	['hile-naraka', 'hile-sea-of-thieves'],
	['naraka-hile', 'sot-hile'],
	['naraka-esp-chity', 'sot-esp-chity'],
	['naraka-aimbot-chity', 'sot-aimbot-chity'],
	['unentdeckte-naraka-cheats', 'unentdeckte-sea-of-thieves-cheats'],
	['cheats-naraka-indetectaveis', 'cheats-sea-of-thieves-indetectaveis'],
	['trucchi-naraka-indetectabili', 'trucchi-sea-of-thieves-indetectabili'],
	['niewykrywalne-cheats-naraka', 'niewykrywalne-cheats-sea-of-thieves'],
	['nedecektiruemye-chity-naraka', 'nedecektiruemye-chity-sea-of-thieves'],
	['tespit-edilemeyen-naraka-hileleri', 'tespit-edilemeyen-sea-of-thieves-hileleri'],
	['nedecektovani-chity-naraka', 'nedecektovani-chity-sea-of-thieves'],
	['cheats-naraka-nedetectabile', 'cheats-sea-of-thieves-nedetectabile'],
	['basta-naraka-cheats', 'basta-sea-of-thieves-cheats'],
	['naraka-cheats-funktionen', 'sea-of-thieves-cheats-funktionen'],
	['naraka-cheats-functies', 'sea-of-thieves-cheats-functies'],
	['caracteristicas-trucos-naraka', 'caracteristicas-trucos-sea-of-thieves'],
	['fonctionnalites-triche-naraka', 'fonctionnalites-triche-sea-of-thieves'],
	['recursos-cheats-naraka', 'recursos-cheats-sea-of-thieves'],
	['maps, zones, and combat points', 'islands, outposts, and sea routes'],
	['maps, zones and combat points', 'islands, outposts and sea routes'],
	['battle royale rounds and ranked matches', 'voyages, PvP sessions and ranked matches'],
	['heroes & ranked teams', 'crews & ranked teams'],
	['hero markers', 'ship and player markers'],
	['combat zones', 'island zones'],
	['maps and combat zones', 'islands and outposts'],
	['near combat zones and choke points', 'near islands and choke points'],
	['grapple routes', 'sailing routes'],
	['Hero and weapon ESP', 'Ship and player ESP'],
	['hero ESP', 'player ESP'],
	['elimination worth the push', 'loot haul worth the push'],
	['melee combat tools', 'naval combat tools'],
	['24 Entertainment', 'Rare'],
	['melee combat sessions', 'naval combat sessions'],
	['melee combat', 'naval combat'],
	['battle royale tips', 'sailing and PvP tips'],
	['map zones', 'island callouts'],
	['in combat zones', 'on islands'],
	['NarakaCheatsSite', 'SeaOfThievesCheatsSite'],
	['Naraka Intel', 'Sea of Thieves Intel'],
	['Naraka Cheats', 'Sea of Thieves Cheats'],
	['naraka cheats', 'sea of thieves cheats'],
	['naraka cheat', 'sea of thieves cheat'],
	['Naraka ESP', 'Sea of Thieves ESP'],
	['Naraka Aimbot', 'Sea of Thieves Aimbot'],
	['naraka esp', 'sea of thieves esp'],
	['naraka aimbot', 'sea of thieves aimbot'],
	['naraka wallhack', 'sea of thieves wallhack'],
	['naraka radar', 'sea of thieves radar'],
	['Buy Naraka Cheats', 'Buy Sea of Thieves Cheats'],
	['what-are-naraka-cheats', 'what-are-sea-of-thieves-cheats'],
	['are-naraka-cheats-undetected-in-2026', 'are-sea-of-thieves-cheats-undetected-in-2026'],
	['battle-royale-rounds-and-ranked-sessions', 'voyages-and-ranked-sessions'],
	['what-is-a-naraka-wallhack', 'what-is-a-sea-of-thieves-wallhack'],
	['does-naraka-cheats-include-radar-hack', 'does-sea-of-thieves-cheats-include-radar-hack'],
	['neac-anti-cheat-and-naraka-cheats', 'eac-anti-cheat-and-sea-of-thieves-cheats'],
	['buy-undetected-naraka-cheats-windows-pc', 'buy-undetected-sea-of-thieves-cheats-windows-pc'],
	['naraka-soft-aim-review', 'sot-soft-aim-review'],
	['naraka-esp-ranked-review', 'sot-esp-ranked-review'],
	['naraka-cloud-dma-review', 'sot-cloud-dma-review'],
	['naraka-cheat-setup-review', 'sot-cheat-setup-review'],
	['naraka-hero-esp-review', 'sot-player-esp-review'],
	['naraka-soft-aim-ranked-review', 'sot-soft-aim-ranked-review'],
	['naraka-radar-hack-review', 'sot-radar-hack-review'],
	['naraka-neac-update-review', 'sot-eac-update-review'],
	['naraka-melee-soft-aim-review', 'sot-cannon-soft-aim-review'],
	['xKrypt0_Naraka', 'xKrypt0_SOT'],
	['vanLifeNaraka', 'vanLifeSOT'],
	['naraka-screenshot', 'sot-screenshot'],
	['naraka-cheats-logo', 'sot-cheats-logo'],
	['naraka-cheats-hero', 'sot-cheats-hero'],
	['naraka-hero-banner', 'sot-hero-banner'],
	['naraka-hero-ghost', 'sot-hero-ghost'],
	['naraka-hero-source', 'sot-hero-source'],
	['naraka-esp-player-tags', 'sot-esp-player-tags'],
	['naraka-wallhack-skeleton', 'sot-wallhack-skeleton'],
	['naraka-aimbot-skeleton', 'sot-aimbot-skeleton'],
	['naraka-aimbot-melee', 'sot-aimbot-cannon'],
	['naraka-esp-radar', 'sot-esp-radar'],
	['naraka-cheats-combat', 'sot-cheats-combat'],
	['naraka-cheats-wallhack', 'sot-cheats-wallhack'],
	['naraka-cheats-aimbot-view', 'sot-cheats-aimbot-view'],
	['naraka-cheats-aimbot', 'sot-cheats-aimbot'],
	['naraka-cheats-radar', 'sot-cheats-radar'],
	['naraka-cheats-session', 'sot-cheats-session'],
	['naraka-cheats-esp', 'sot-cheats-esp'],
	['Naraka Features', 'Sea of Thieves Features'],
	['Naraka Status', 'Sea of Thieves Status'],
	['Naraka patches', 'Sea of Thieves patches'],
	['Naraka updates', 'Sea of Thieves updates'],
	['Naraka setup', 'Sea of Thieves setup'],
	['Naraka license', 'Sea of Thieves license'],
	['Naraka licenses', 'Sea of Thieves licenses'],
	['Naraka on PC', 'Sea of Thieves on PC'],
	['Naraka on Steam', 'Sea of Thieves on Steam'],
	['neac-bypass', 'eac-bypass'],
	['NEAC bypass', 'EAC bypass'],
	['NEAC Bypass', 'EAC Bypass'],
	['NEAC maintenance', 'EAC maintenance'],
	['NEAC rebuilds', 'EAC rebuilds'],
	['NEAC update', 'EAC update'],
	['NEAC updates', 'EAC updates'],
	['NEAC patch', 'EAC patch'],
	['NEAC patches', 'EAC patches'],
	["'neac'", "'eac'"],
	['| neac', '| eac'],
	['neac-anti-cheat', 'eac-anti-cheat'],
	['pageId="neac"', 'pageId="eac"'],
	["pageId: 'neac'", "pageId: 'eac'"],
	['nc_locale', 'sotc_locale'],
	['in Naraka', 'in Sea of Thieves'],
	['for Naraka', 'for Sea of Thieves'],
	['Naraka on', 'Sea of Thieves on'],
	['Naraka or', 'Sea of Thieves or'],
	["Naraka's", "Sea of Thieves's"],
	['Naraka ', 'Sea of Thieves '],
	['Naraka,', 'Sea of Thieves,'],
	['Naraka.', 'Sea of Thieves.'],
	['Naraka', 'Sea of Thieves'],
	['Bladepoint', ''],
	['NARAKA', 'Sea of Thieves'],
	['NEAC', 'EAC'],
	['Tian Cheng', 'Golden Sands'],
	['Mori', 'Plunder Outpost'],
	['Yushan', 'Sanctuary Outpost'],
	['Fushan', 'Galleons Grave'],
	['Asura', 'Reapers Hideout'],
	['Showdown', 'Arena'],
	['ranked & Showdown', 'voyages & Arena'],
	['ranked and Showdown', 'voyages and Arena'],
	['heroes', 'pirates'],
	['hero tiers', 'ship tiers'],
	['hero ', 'pirate '],
	['naraka/naraka cheats', 'sot/sea of thieves cheats'],
	['naraka-verdansk-map', 'sot-world-map'],
	['steamcommunity.com/app/1203220', 'steamcommunity.com/app/1172620'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'tmp', 'naraka-cheats-org']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-theisle.mjs',
	'adapt-rust.mjs',
	'adapt-finals.mjs',
	'adapt-valorant.mjs',
	'adapt-naraka.mjs',
	'adapt-seaofthieves.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataTs() {
	const from = path.join(ROOT, 'src', 'data', 'naraka.ts');
	const to = path.join(ROOT, 'src', 'data', 'sot.ts');
	try {
		await rename(from, to);
		console.log('Renamed naraka.ts → sot.ts');
	} catch (e) {
		console.warn(`naraka.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-naraka-images.mjs', 'fetch-sot-images.mjs'],
		['fetch-naraka-hero.mjs', 'fetch-sot-hero.mjs'],
		['import-naraka-screenshots.mjs', 'import-sot-screenshots.mjs'],
		['naraka-hack-overlays.mjs', 'sot-hack-overlays.mjs'],
		['fix-naraka-copy.mjs', 'fix-sot-copy.mjs'],
		['fix-naraka-content.mjs', 'fix-sot-content.mjs'],
		['fix-naraka-lexicon.mjs', 'fix-sot-lexicon.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'sea-of-thieves-aimbot': 'sot-aimbot',
		'sea-of-thieves-esp': 'sot-esp',
		'sea-of-thieves-wallhack': 'wallhack',
		'sea-of-thieves-radar-hack': 'radar',
		'undetected-sea-of-thieves-cheats': 'undetected',
		'sea-of-thieves-cheats-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'sea-of-thieves-cheats': 'hacks',
		'sea-of-thieves-cheat-download': 'cheat-download',
		'sea-of-thieves-mod-menu': 'mod-menu',
		'sea-of-thieves-soft-aim': 'soft-aim',
		'best-sea-of-thieves-cheats': 'best-cheats',
		'sea-of-thieves-aimbot-hack': 'aimbot-hack',
		'sea-of-thieves-esp-hack': 'esp-hack',
		'sea-of-thieves-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('naraka')) continue;
		const newName = file
			.replace(/naraka-cheats/g, 'sot-cheats')
			.replace(/naraka/g, 'sot');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Naraka Cheats → Sea of Thieves Cheats (seaofthievescheats.com)...\n');
	await renamePageDirs();
	await renameDataTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, sync:brand, regenerate i18n/blog.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
