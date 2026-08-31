#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Rare'"],
	['Activision\u2019', "Rare'"],
	['Activision services', 'Rare services'],
	['Activision service', 'Rare service'],
	['Activision platform', 'Rare platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Rare bans'],
	['Activision security', 'EAC security'],
	['Activision Status', 'Sea of Thieves on PC'],
	['Activision Sea of Thieves's, 'Sea of Thieves's],
	['Activision Support', 'Sea of Thieves on PC'],
	['Activision', 'Rare'],
	['EAC guide', 'EAC guide'],
	['undetected EAC notes', 'undetected EAC notes'],
	['status.epicgames.com', 'store.steampowered.com/app/376210/The_Isle'],
	['www.epicgames.com/rust', 'store.steampowered.com/app/376210/The_Isle'],
	['www.rust.com/official server', 'store.steampowered.com/app/376210/The_Isle'],
	['https://www.rust.com/', 'https://store.steampowered.com/app/1172620/Sea_of_Thieves/'],
	['Sea of Thieves.com', 'Sea of Thieves's],
	['Sea of Thieves Competitive', 'Sea of Thieves's],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
