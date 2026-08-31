#!/usr/bin/env node
/** Final pass: fix remaining Sea of Thieves references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['sotImages', 'sotImages'],
	["from '../data/sot'", "from '../data/sot'"],
	["from './sot'", "from './sot'"],
	['/undetected-sea-of-thieves-cheats/', '/undetected-sea-of-thieves-cheats/'],
	['/sea-of-thieves-wallhack/', '/sea-of-thieves-wallhack/'],
	['/sea-of-thieves-radar-hack/', '/sea-of-thieves-radar-hack/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/sea-of-thieves-cheats-2026/', '/sea-of-thieves-cheats-2026/'],
	['/sea-of-thieves-aimbot/', '/sea-of-thieves-aimbot/'],
	['/sea-of-thieves-esp/', '/sea-of-thieves-esp/'],
	['/sea-of-thieves-cheats/', '/sea-of-thieves-esp/'],
	['Sea of Thieves Cheats', 'Sea of Thieves Cheats'],
	['sea of thieves cheats', 'sea of thieves cheats'],
	['thefinals wallhack', 'Sea of Thieves wallhack'],
	['sea of thieves radar', 'Sea of Thieves radar'],
	['Sea of Thieves Aimbot', 'Sea of Thieves Aimbot'],
	['Sea of Thieves ESP', 'Sea of Thieves ESP'],
	['Sea of Thieves's, 'Sea of Thieves's],
	['EAC', 'EAC'],
	['eac', 'eac'],
	['seaofthievescheats.com', 'seaofthievescheats.com'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'raidFight'],
	['alMazrah', 'raidMap'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
