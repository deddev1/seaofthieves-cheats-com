/**
 * English simple-page overrides — mirrors src/data/i18n/simple-pages.ts (resolved tokens).
 * Used as canonical EN content for features, pricing, updates, hacks, sea-of-thieves-esp, sea-of-thieves-aimbot, radar, setup, support, faq.
 */
export const SIMPLE_PAGE_IDS = [
	'features',
	'pricing',
	'updates',
	'hacks',
	'sea-of-thieves-esp',
	'sea-of-thieves-aimbot',
	'radar',
	'setup',
	'support',
	'faq',
];

export const simplePagesEn = {
	features: {
		title: 'Sea of Thieves Cheats Features | ESP, Aimbot & Radar',
		description:
			'Full Sea of Thieves cheats feature list — ESP wallhack, soft aim, 2D radar & toggles for ranked & Arena on PC. EAC maintenance at seaofthievescheats.com.',
		h1: 'Sea of Thieves Cheats Features — Full Control List',
		intro: 'Everything included in one license for Sea of Thieves on Windows PC.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & wallhack',
				paragraphs: [
					'See players, objects, and loot through walls with distance readouts.',
					'Use filters so the overlay stays clear in arena zones, vault sectors, and high-traffic PvP areas.',
				],
				list: ['Player boxes & distance', 'Loot and ship and player markers', 'Objective and vehicle filters'],
			},
			{
				h2: 'Aimbot & soft aim',
				paragraphs: [
					'Aim help you can tune to feel natural.',
					'Set FOV, smoothness, and bone priority per weapon before you queue.',
				],
				list: ['Smooth aim strength', 'FOV and bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Radar',
				paragraphs: [
					'A simple 2D radar for threats outside your view.',
					'Spot flanks near maps and island zones without filling the whole screen.',
				],
				list: ['Nearby enemy cues', 'Adjustable range', 'Works in matches & roaming'],
			},
			{
				h2: 'Explore related topics',
				paragraphs: [
					'Most Sea of Thieves cheat sites cover ESP, aimbot, radar, setup, and status on separate pages. Use these guides next:',
					'Each guide covers one part of the match stack so you can compare before checkout.',
				],
				list: [
					'<a href="/sea-of-thieves-esp/">ESP & wallhack guide</a>',
					'<a href="/sea-of-thieves-aimbot/">Aimbot & soft aim</a>',
					'<a href="/sea-of-thieves-radar-hack/">2D radar overlay</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Live status</a>',
					'<a href="/blog/">Sea of Thieves Intel blog</a>',
					'<a href="https://store.steampowered.com/app/1172620/news/" target="_blank" rel="noopener noreferrer">Official Sea of Thieves patch notes</a>',
					'<a href="https://seaofthieves.fandom.com/wiki/Sea_of_Thieves" target="_blank" rel="noopener noreferrer">Sea of Thieves Wiki (Fandom)</a>',
				],
			},
			{
				h2: 'Updates & support',
				paragraphs: [
					'We rebuild after big Sea of Thieves or EAC patches.',
					'Check Status before you play after a patch day.',
					'Verify official changes on <a href="https://store.steampowered.com/app/1172620/news/" target="_blank" rel="noopener noreferrer">Sea of Thieves patch notes</a> and the <a href="https://seaofthieves.fandom.com/wiki/Sea_of_Thieves" target="_blank" rel="noopener noreferrer">Sea of Thieves Wiki</a> before you tune overlays.',
				],
				list: ['Status on the Status page', 'Setup guide included', 'Email support with your order ID'],
			},
		],
	},
	pricing: {
		title: 'Sea of Thieves Cheats Pricing | $35/mo or $150',
		description:
			'Buy Sea of Thieves cheats — $35/month or $150 lifetime. ESP, aimbot & radar for ranked & Arena on PC. Same features, instant delivery.',
		h1: 'Sea of Thieves Cheats Pricing — Monthly & Lifetime',
		intro: 'Monthly and lifetime plans with the same ESP, soft aim, and radar stack.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, soft aim, and radar on monthly and lifetime plans.',
				],
				list: ['ESP, aimbot, and radar', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: [
					'Read the refund policy if you need it. Contact support with your order ID for help.',
					'Prices are listed in USD for Windows 10 and 11 PCs worldwide.',
				],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	},
	updates: {
		title: 'Sea of Thieves Status | EAC Updates | Sea of Thieves Cheats',
		description:
			'Live status after Sea of Thieves & EAC patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. seaofthievescheats.com.',
		h1: 'Status',
		intro: 'Check maintenance notes before you load in after a Sea of Thieves or EAC patch.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Sea of Thieves Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of 13 Aug 2026 the package is online for Sea of Thieves on Windows PC. We post a new note here when a game or EAC patch needs a rebuild.',
					'If Status is green, you can match. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every match after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
					'Follow setup if something fails and email support with your order ID.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: [
					'No cheat is 100% safe forever. Stay updated and use safe settings.',
					'Check this page before every match after a patch day.',
				],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	},
	hacks: {
		title: 'Sea of Thieves Cheats Guide | ESP, Aimbot & Radar',
		description:
			'Sea of Thieves cheats guide — undetected ESP wallhack, soft aim, radar & EAC rebuilds for ranked & Arena on PC. Buy from $35 at seaofthievescheats.com.',
		h1: 'Sea of Thieves Cheats — Full Guide',
		intro:
			'Sea of Thieves cheats add ESP, radar, and soft aim on top of the base game. This page explains what sea of thieves cheats are, what Sea of Thieves Cheats includes, how EAC maintenance works, and where to go next before you buy.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'Sea of Thieves cheats in action',
		sections: [
			{
				h2: 'What are sea of thieves cheats?',
				paragraphs: [
					'Sea of Thieves cheats are third-party tools that give you extra information and combat assist during matches. Most players search for sea of thieves cheats when they want player ESP, loot visibility, off-screen radar, or smoother aim under pressure.',
					'Sea of Thieves Cheats bundles those tools in one license for Windows PC — no stacking separate downloads for wallhack, radar, and aimbot.',
				],
			},
			{
				h2: 'What Sea of Thieves Cheats includes',
				paragraphs: [
					'One license covers the full match stack: player ESP with distance, ship and player markers, 2D radar for flanks, and configurable soft aim profiles per weapon.',
					'Monthly and lifetime plans include the same feature stack with EAC rebuilds.',
				],
				list: [
					'ESP / wallhack with distance readouts',
					'Loot and resource markers',
					'2D radar for off-screen threats',
					'Soft aim & aimbot profiles',
					'EAC rebuilds after patches',
				],
			},
			{
				h2: 'Module guides',
				paragraphs: [
					'Each tool has its own deep-dive page if you want details before checkout.',
					'Read ESP, aimbot, radar, and feature guides before you buy.',
				],
				list: [
					'<a href="/sea-of-thieves-esp/">Sea of Thieves ESP & wallhack</a>',
					'<a href="/sea-of-thieves-aimbot/">Sea of Thieves Aimbot & soft aim</a>',
					'<a href="/sea-of-thieves-radar-hack/">Radar hack overlay</a>',
					'<a href="/features/">Full feature list</a>',
				],
			},
			{
				h2: 'Undetected status & patches',
				paragraphs: [
					'Sea of Thieves uses EAC. No cheat stays undetected forever — maintenance after patches is what matters. Check the Status page after every Sea of Thieves or EAC update before you load in.',
					'Read the undetected cheats guide and EAC maintenance notes for the full workflow.',
				],
				list: [
					'<a href="/updates/">Live status & patch notes</a>',
					'<a href="/updates/">Undetected cheats guide</a>',
					'<a href="/eac-bypass/">EAC maintenance</a>',
					'<a href="/faq/">FAQ before you buy</a>',
				],
			},
			{
				h2: 'How to get started',
				paragraphs: [
					'Pick monthly ($35) or lifetime ($150) on the store — same features on both. After checkout you receive license details by email. Follow the setup guide, then check status after major patches.',
					'Compare plans, complete setup, and bookmark support for license questions.',
				],
				list: [
					'<a href="/pricing/">Compare plans</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/support/">Contact support</a>',
				],
			},
		],
	},
	'sea-of-thieves-esp': {
		title: 'Sea of Thieves ESP | Wallhack & Player Boxes',
		description:
			'Sea of Thieves ESP wallhack — player boxes, ship and player markers & distance for ranked & Arena on PC. Bundled with aimbot & radar at seaofthievescheats.com.',
		h1: 'Sea of Thieves ESP — Player Boxes & Wallhack',
		intro: 'See players and loot through walls during Sea of Thieves matches. Part of the same Sea of Thieves Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Sea of Thieves Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'ESP in match',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: [
					'Boxes, distance, and filters for players, objects, and loot.',
					'Toggle categories so only match-critical overlays stay active during rotations.',
				],
				list: ['Player ESP', 'Loot markers', 'Objective and vehicle filters'],
			},
			{
				h2: 'When to use it',
				paragraphs: [
					'Clear high-traffic POIs and sailing routes without flooding the screen.',
					'Tune opacity and filters for arena zones, vault sectors, and high-traffic PvP areas.',
				],
				list: ['Tune opacity', 'Filter noise', 'Pair with radar'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'ESP is included with aimbot and radar in one plan.',
					'Compare monthly and lifetime options on the store before checkout.',
				],
				list: [
					'<a href="/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	'sea-of-thieves-aimbot': {
		title: 'Sea of Thieves Aimbot | Soft Aim & FOV Settings',
		description:
			'Sea of Thieves aimbot with soft aim, FOV & bone priority for ranked melee fights on PC. Undetected package with ESP & radar at seaofthievescheats.com.',
		h1: 'Sea of Thieves Aimbot — Soft Aim for Windows PC',
		intro: 'Soft aim and aim assist you can tune for Sea of Thieves. Included in the same Sea of Thieves Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Sea of Thieves Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: [
					'Set FOV, smoothness, and bone priority before you queue.',
					'Save per-weapon profiles for ARs, SMGs, and long-range rifles.',
				],
				list: ['Soft aim strength', 'Bone priority', 'Hotkeys mid-match'],
			},
			{
				h2: 'Play styles',
				paragraphs: [
					'Keep settings subtle for longer matches. Raise strength only when you accept more risk.',
					'Soft aim works alongside ESP and radar in the same license.',
				],
				list: ['Legit soft aim', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: [
					'Aimbot ships with ESP and radar in one license.',
					'Read the full feature list and compare plans on the store.',
				],
				list: [
					'<a href="/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	radar: {
		title: 'Sea of Thieves Radar Hack | 2D Threat Map',
		description:
			'2D radar hack for flank reads in Sea of Thieves ranked & Arena on PC. Bundled with ESP wallhack & soft aim in one license at seaofthievescheats.com.',
		h1: 'Sea of Thieves Radar Hack — 2D Threat Awareness',
		intro: 'A simple 2D radar for threats outside your view. Included in the same Sea of Thieves Cheats license.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Sea of Thieves Cheats overview',
		ctaSecondaryHref: '/',
		galleryTitle: 'Radar overlay',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: [
					'Nearby enemy cues with adjustable range for solo farmers and matchers.',
					'Directional threat cues for players outside your line of sight.',
				],
				list: ['Flank awareness', 'Base approaches', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: [
					'Use radar for threats you cannot see yet. Use ESP when you push.',
					'Radar complements ESP markers during squad pushes and zone fights.',
				],
				list: [
					'<a href="/sea-of-thieves-esp/">ESP guide</a>',
					'<a href="/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	},
	setup: {
		title: 'Sea of Thieves Cheats Setup | Windows PC Install Guide',
		description:
			'Install Sea of Thieves Cheats on PC — activate ESP, soft aim & radar step by step. Setup guide at seaofthievescheats.com. Check EAC status first.',
		h1: 'Setup',
		intro: 'Install and activate your license on Windows 10 or 11 before your first match.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: [
					'Buy a plan first. You get a license by email.',
					'Have your order email ready before you start installation.',
					'Sea of Thieves Cheats runs on Windows 10 or 11 (64-bit) with administrator rights for the loader. Close conflicting overlays and aim for 8 GB RAM minimum (16 GB recommended) for smooth ESP in busy naval combats.',
				],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: [
					'Run the loader as admin, paste your license, then launch Sea of Thieves.',
					'Download the loader from your delivery email and follow the steps in order.',
				],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: [
					'Check Status after a patch. Email support@seaofthievescheats.com with your order ID.',
					'Include your Windows version and what you already tried for faster replies.',
				],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	},
	support: {
		title: 'Sea of Thieves Cheats Support | License & Setup Help',
		description:
			'Support for license delivery, ESP setup & billing on PC. Email support@seaofthievescheats.com with your order ID. seaofthievescheats.com/support.',
		h1: 'Support',
		intro: 'Get help with licenses, setup, and billing for Sea of Thieves Cheats on Windows PC.',
		ctaPrimary: 'Email support',
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: [
					'Email support@seaofthievescheats.com. Include your order ID and a short note about the issue.',
					'We review support requests daily for delivery, billing, and setup issues.',
				],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: [
					'Check FAQ and Status before you write. Many setup questions are already covered.',
					'Self-service guides often resolve activation issues faster than a new ticket. For patch timing, follow official Sea of Thieves channels on Riot and the <a href="https://store.steampowered.com/app/1172620/Sea_of_Thieves/" target="_blank" rel="noopener noreferrer">official site</a>.',
				],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	},
	faq: {
		title: 'Sea of Thieves Cheats FAQ | ESP, Aimbot & EAC',
		description:
			'FAQ for Sea of Thieves cheats — delivery, setup, ranked & Arena use, EAC updates & pricing on PC. Answers at seaofthievescheats.com before you buy.',
		h1: 'Sea of Thieves Cheats FAQ — Common Questions',
		intro: 'Common questions about Sea of Thieves Cheats — delivery, setup, updates, and refunds.',
		ctaPrimary: 'Get Access',
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: [
					'You get a digital license by email after payment.',
					'Keep your order confirmation email for support and activation.',
				],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: [
					'Follow Setup after you buy. Check Status after big Sea of Thieves or EAC patches.',
					'Maintenance rebuilds publish on the Status page when patches require updates.',
				],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: [
					'Read the refund policy before you buy if you need details.',
					'Contact support with your order ID for billing or delivery questions.',
				],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	},
};
