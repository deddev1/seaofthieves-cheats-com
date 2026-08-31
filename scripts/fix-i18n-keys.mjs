#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['Sea of Thieves Cheats', 'Sea of Thieves Cheats'],
	['sea of thieves cheats', 'sea of thieves cheats'],
	['Sea of Thieves Cheats', 'Sea of Thieves Cheats'],
	['Sea of Thieves's, 'Sea of Thieves's],
	['Sea of Thieves's, 'Sea of Thieves's],
	['Call of Duty', 'Sea of Thieves's],
	['Sea of Thieves PC', 'Sea of Thieves PC'],
	['for Sea of Thieves', 'for Sea of Thieves'],
	['Sea of Thieves ', 'Sea of Thieves '],
	['rust ', 'rust '],
	['EAC maintenance', 'EAC maintenance'],
	['EAC', 'EAC'],
	['EAC', 'EAC'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'raidFight'],
	['alMazrah', 'raidMap'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['farming run', 'farming run'],
	['extract', 'extract'],
	['seaofthievescheats.com', 'seaofthievescheats.com'],
	['Trucos Sea of Thieves's, 'Trucos Sea of Thieves's],
	['Triches Sea of Thieves's, 'Triches Sea of Thieves's],
	['Cheats Sea of Thieves's, 'Cheats Sea of Thieves's],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac': {");
pagesEn = pagesEn.replace(/Sea of Thieves Sea of Thieves/g, 'Sea of Thieves's);
pagesEn = pagesEn.replace(/for Sea of Thieves Sea of Thieves/g, 'for Sea of Thieves');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'eac'/g, "'eac'");
pagesI18n = pagesI18n.replace(/eac:/g, "'eac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
