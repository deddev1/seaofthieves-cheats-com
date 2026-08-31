#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'sea of thieves cheats', espWallhack: 'sea of thieves cheats wallhack', aimbotCombat: 'sea of thieves cheats aimbot', squadFight: 'sea of thieves cheats', playerEsp: 'sea of thieves cheats esp', headerArt: 'sea of thieves cheats aimbot', hacksPackage: 'sea of thieves cheats radar', matchFight: 'sea of thieves cheats aimbot', battleRoyale: 'sea of thieves cheats', matchMap: 'sea of thieves cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', hacksPackage: '[^']+', matchFight: '[^']+', battleRoyale: '[^']+', matchMap: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Sea of Thieves ESP player tags hack'", "imageAlt: 'sea of thieves cheats esp'"],
	["imageAlt: 'Sea of Thieves ESP radar hack'", "imageAlt: 'sea of thieves cheats radar'"],
	["imageAlt: 'Sea of Thieves Aimbot sniper kill'", "imageAlt: 'sea of thieves cheats aimbot'"],
	["imageAlt: 'Sea of Thieves Aimbot skeleton targeting'", "imageAlt: 'sea of thieves cheats aimbot'"],
	["imageAlt: 'sea of thieves cheats ADS combat'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats setup PC activation'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats updates EAC maintenance'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats FAQ ESP aimbot'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats support license help'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'Undetected sea of thieves cheats ESP wallhack'", "imageAlt: 'undetected sea of thieves cheats'"],
	["imageAlt: 'thefinals wallhack skeleton ESP'", "imageAlt: 'sea of thieves cheats wallhack'"],
	["imageAlt: 'EAC bypass rust ESP aimbot'", "imageAlt: 'sea of thieves cheats eac'"],
	["imageAlt: 'sea of thieves cheats 2026 ESP aimbot'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats combat aimbot'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheat download ESP aimbot'", "imageAlt: 'sea of thieves cheats download'"],
	["imageAlt: 'Sea of Thieves mod menu ESP aimbot'", "imageAlt: 'sea of thieves cheats mod menu'"],
	["imageAlt: 'Sea of Thieves soft aim aimbot settings'", "imageAlt: 'sea of thieves cheats soft aim'"],
	["imageAlt: 'Best sea of thieves cheats 2026 ESP'", "imageAlt: 'best sea of thieves cheats'"],
	["imageAlt: 'Sea of Thieves Aimbot hack combat'", "imageAlt: 'sea of thieves cheats aimbot'"],
	["imageAlt: 'Sea of Thieves ESP hack wallhack'", "imageAlt: 'sea of thieves cheats esp'"],
	["imageAlt: 'Sea of Thieves unlock all items ESP aimbot guide'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats privacy policy'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats refund policy'", "imageAlt: 'sea of thieves cheats'"],
	["imageAlt: 'sea of thieves cheats terms of use'", "imageAlt: 'sea of thieves cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Sea of Thieves ${meta.altKeyword}`")
	.join("imageAlt: 'sea of thieves cheats'")
	.split("galleryTitle: `Sea of Thieves Cheats ${topicName}`")
	.join("galleryTitle: 'sea of thieves cheats'")
	.split("imageAlt: `sea of thieves cheats ${kind} policy`")
	.join("imageAlt: 'sea of thieves cheats'")
	.split("galleryTitle: `Sea of Thieves Cheats ${kind} resources`")
	.join("galleryTitle: 'sea of thieves cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
