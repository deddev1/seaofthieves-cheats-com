#!/usr/bin/env node
/**
 * Final cleanup: remove all Naraka/Bladepoint leftovers after adapt-seaofthieves.mjs
 */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const REPLACEMENTS = [
	['Sea of Thieves  ', 'Sea of Thieves '],
	['Sea of Thieves  ', 'Sea of Thieves '],
	['|  Hacks', '| Hacks'],
	["from '../naraka'", "from '../sot'"],
	["from './naraka'", "from './sot'"],
	['naraka bladepoint hacks', 'sea of thieves hacks'],
	['naraka bladepoint cheats', 'sea of thieves cheats'],
	['naraka bladepoint cheat', 'sea of thieves cheat'],
	['naraka bladepoint hack', 'sea of thieves hack'],
	['Naraka bladepoint', 'Sea of Thieves'],
	['naraka bladepoint', 'sea of thieves'],
	['naraka hacks', 'sea of thieves cheats'],
	['naraka hack', 'sea of thieves cheat'],
	['naraka soft aim', 'sea of thieves soft aim'],
	['naraka neac bypass', 'sea of thieves eac bypass'],
	['naraka mod menu', 'sea of thieves mod menu'],
	['naraka external cheat', 'sea of thieves external cheat'],
	['naraka 2d radar', 'sea of thieves 2d radar'],
	['soft aim naraka', 'soft aim sea of thieves'],
	['neac bypass naraka', 'eac bypass sea of thieves'],
	['naraka anti cheat bypass', 'sea of thieves anti cheat bypass'],
	['hwid spoofer naraka', 'hwid spoofer sea of thieves'],
	['neac patch', 'eac patch'],
	['neac update', 'eac update'],
	['neac bypass', 'eac bypass'],
	['vanlifenaraka', 'vanlifesot'],
	['vanLifeNaraka', 'vanLifeSOT'],
	['naraka-patch-notes', 'sot-patch-notes'],
	['naraka-cosmetics', 'sot-cosmetics'],
	['naraka-weapon-tier-list', 'sot-weapon-tier-list'],
	['naraka-loot-run', 'sot-loot-run'],
	['naraka-loot-run-strategies', 'sot-loot-run-strategies'],
	['naraka-competitive-meta', 'sot-competitive-meta'],
	['naraka-loot-routes', 'sot-loot-routes'],
	['naraka-pro-settings', 'sot-pro-settings'],
	['naraka-warmup-routine', 'sot-warmup-routine'],
	['naraka-eac-bypass', 'sot-eac-bypass'],
	['naraka pricing', 'sea of thieves pricing'],
	['naraka updates', 'sea of thieves updates'],
	['naraka weapon tier list', 'sot weapon tier list'],
	['best naraka loadouts', 'best sot loadouts'],
	['naraka meta', 'sot meta'],
	['naraka competitive', 'sot competitive'],
	['naraka sailing routes', 'sot sailing routes'],
	['naraka settings', 'sot settings'],
	['naraka visibility', 'sot visibility'],
	['naraka audio', 'sot audio'],
	['naraka aim practice', 'sot aim practice'],
	['naraka cosmetics guide', 'sot cosmetics guide'],
	['naraka cosmetics', 'sot cosmetics'],
	['meilleures-triches-naraka', 'meilleures-triches-sea-of-thieves'],
	['internalLinks.neac', 'internalLinks.eac'],
	["pageId: 'neac'", "pageId: 'eac'"],
	['pageId="neac"', 'pageId="eac"'],
	["'neac'", "'eac'"],
	['\tneac:', '\teac:'],
	[' TOPIC_LINKS.neac', ' TOPIC_LINKS.eac'],
	['\tneac: [', '\teac: ['],
	['id: \'naraka\'', "id: 'sot'"],
	['guide.game.toLowerCase() === \'naraka\'', "guide.game.toLowerCase() === 'sea of thieves'"],
	['asura lobbies on tian cheng', 'Reapers Bones lobbies on Golden Sands'],
	['on tian cheng', 'on Golden Sands'],
	['on mori', 'on Plunder Outpost'],
	['on yushan', 'on Sanctuary Outpost'],
	['on fushan and mori', 'on Galleons Grave and Plunder Outpost'],
	['on fushan', 'on Galleons Grave'],
	['on huachi', 'on Ancient Spire'],
	['in asura', 'at Reapers Hideout'],
	['in customs', 'in open seas'],
	['katana vs spear', 'sword vs blunderbuss'],
	['melee holds', 'ship combat'],
	['pirate esp', 'ship ESP'],
	['narakacheats.org', 'seaofthievescheats.com'],
	['narakacheats', 'seaofthievescheats'],
	['Bladepoint', ''],
	['bladepoint', ''],
	['NEAC', 'EAC'],
	['neac', 'eac'],
	['novaxware', 'novaxware'],
	['/naraka-', '/sot-'],
	['"naraka', '"sot'],
	["'naraka", "'sot"],
];

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro', 'tmp']);
const SKIP_FILES = new Set(['adapt-naraka.mjs', 'adapt-seaofthieves.mjs', 'fix-sot-final.mjs']);
const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md']);

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

async function main() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		if (!TEXT_EXT.has(path.extname(file))) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		let updated = original;
		for (const [from, to] of REPLACEMENTS) {
			if (from === to) continue;
			updated = updated.split(from).join(to);
		}
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Fixed ${changed} files`);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
