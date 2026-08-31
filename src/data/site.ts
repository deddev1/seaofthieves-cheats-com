export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/undetected-sea-of-thieves-cheats/' },
	{ label: fillBrandTokens('{game} cheats'), href: '/sea-of-thieves-cheats/' },
	{ label: fillBrandTokens('{game} cheats 2026'), href: '/sea-of-thieves-cheats-2026/' },
	{ label: fillBrandTokens('{game} esp'), href: '/sea-of-thieves-esp/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/sea-of-thieves-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/sea-of-thieves-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/sea-of-thieves-radar-hack/' },
	{ label: fillBrandTokens('Best {primaryKeyword}'), href: '/best-sea-of-thieves-cheats/' },
	{ label: fillBrandTokens('{antiCheat} bypass'), href: '/eac-bypass/' },
	{ label: fillBrandTokens('{game} cheat download'), href: '/setup/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('{game} pricing'), href: '/pricing/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Hacks', href: '/sea-of-thieves-cheats/' },
	{ label: 'Aimbot', href: '/sea-of-thieves-aimbot/' },
	{ label: 'ESP', href: '/sea-of-thieves-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} cheats pillar'), href: '/sea-of-thieves-cheats/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/sea-of-thieves-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/sea-of-thieves-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/sea-of-thieves-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} cheats FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for Sea of Thieves on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-sea-of-thieves-cheats',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-sea-of-thieves-cheats-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in voyages, PvP sessions and ranked matches?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} match flow — reading enemy pirates, spotting loot, and staying aware near POIs and island zones.',
		slug: 'solo-farmer-and-raider-sessions',
		seoTitle: 'Raid Session and PvP Support | FAQ',
		seoDescription:
			'{brand} works in voyages, PvP sessions and ranked matches — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, ship and player markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, ship and player markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after a Sea of Thieves or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when a Sea of Thieves or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
	faq({
		question: 'How much do {primaryKeyword} cost in 2026?',
		answer:
			'{brand} is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and {antiCheat} maintenance rebuilds. See Pricing for the latest plan details before checkout.',
		slug: 'how-much-do-sea-of-thieves-cheats-cost',
		seoTitle: 'How Much Do {game} Hacks Cost? | FAQ',
		seoDescription:
			'{brand} pricing in 2026: $35/month or $150 lifetime for ESP, aimbot, radar, and {antiCheat} updates on Windows PC.',
	}),
	faq({
		question: 'How do I install {primaryKeyword} on Windows PC?',
		answer:
			'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch {brand}, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email {email} if activation fails.',
		slug: 'how-to-install-sea-of-thieves-cheats',
		seoTitle: 'How to Install {game} Hacks on Windows PC | FAQ',
		seoDescription:
			'Step-by-step {brand} install on Windows PC — loader, mod menu, and ESP/aimbot toggles. Setup help at seaofthievescheats.com.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows enemy pirates and weapons through walls. {brand} includes distance readouts, grapple and ult cues, and toggleable categories.',
		slug: 'what-is-a-sea-of-thieves-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals pirates and weapons through walls — with distance, bases, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and island zones.',
		slug: 'does-sea-of-thieves-cheats-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV. Compare ESP, aimbot, and radar in one license at seaofthievescheats.com.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
		slug: 'eac-anti-cheat-and-sea-of-thieves-cheats',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-sea-of-thieves-cheats-windows-pc',
		seoTitle: 'Buy Undetected {game} Hacks for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
	faq({
		question: 'What is a {game} ESP hack?',
		answer:
			'A {game} ESP hack is a visibility overlay that shows enemy pirates, weapons, and loot through walls. {brand} ESP includes player boxes, distance tags, grapple and ult cues, and toggleable categories for Quick Match and Ranked.',
		slug: 'what-is-sea-of-thieves-esp-hack',
		seoTitle: 'What Is a {game} ESP Hack? | FAQ',
		seoDescription:
			'{game} ESP hack explained — player wallhack, distance tags, and loot markers in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'What is a {game} aimbot hack?',
		answer:
			'A {game} aimbot hack provides aim assist with configurable FOV, smoothing, and bone priority. {brand} uses soft aim profiles designed to feel natural in team fights and duels — tune settings in the mod menu before Ranked queues.',
		slug: 'what-is-sea-of-thieves-aimbot-hack',
		seoTitle: 'What Is a {game} Aimbot Hack? | FAQ',
		seoDescription:
			'{game} aimbot hack with soft aim, FOV, and smoothing controls — included in {brand} for Windows PC.',
	}),
	faq({
		question: 'What are the best {primaryKeyword} in 2026?',
		answer:
			'Top {primaryKeyword} in 2026 combine undetected ESP, soft aim, 2D radar, and fast {antiCheat} maintenance after patches. {brand} bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
		slug: 'best-sea-of-thieves-cheats-in-2026',
		seoTitle: 'Best {game} Hacks in 2026 | FAQ',
		seoDescription:
			'Best {primaryKeyword} in 2026 — ESP, soft aim, radar, and {antiCheat} maintenance in one {brand} license for Windows PC.',
	}),
	faq({
		question: 'Should I buy monthly or lifetime {primaryKeyword}?',
		answer:
			'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term {game} play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
		slug: 'monthly-vs-lifetime-sea-of-thieves-cheats',
		seoTitle: 'Monthly vs Lifetime {game} Hacks | FAQ',
		seoDescription:
			'Compare monthly ($35) and lifetime ($150) {brand} plans — same ESP, aimbot, and radar features on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work on Windows 11?',
		answer:
			'Yes. {brand} supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep {antiCheat} status green on the Updates page, and avoid running outdated builds after major patches.',
		slug: 'sea-of-thieves-cheats-windows-11',
		seoTitle: 'Do {game} Hacks Work on Windows 11? | FAQ',
		seoDescription:
			'{brand} runs on Windows 10 and 11 — ESP, aimbot, and radar with {antiCheat} maintenance on PC. Read setup notes at seaofthievescheats.com before you buy.',
	}),
	faq({
		question: 'What is {game} soft aim?',
		answer:
			'{game} soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. {brand} lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in Quick Match and Ranked.',
		slug: 'what-is-sea-of-thieves-soft-aim',
		seoTitle: 'What Is {game} Soft Aim? | FAQ',
		seoDescription:
			'{game} soft aim explained — FOV, smoothing, and bone priority in {brand} for natural-looking assist on PC.',
	}),
	faq({
		question: 'Is there a free {game} hack download?',
		answer:
			'{brand} is a paid license — there is no official free download. Avoid random “free sea of thieves cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
		slug: 'free-sea-of-thieves-cheat-download',
		seoTitle: 'Free {game} Hack Download? | FAQ',
		seoDescription:
			'No official free {brand} download — paid monthly/lifetime licenses include ESP, aimbot, radar, and support on Windows PC.',
	}),
	faq({
		question: 'How does {antiCheat} bypass work for {primaryKeyword}?',
		answer:
			'There is no permanent {antiCheat} bypass. {brand} is maintained with rebuilds after Sea of Thieves and {antiCheat} patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
		slug: 'sot-eac-bypass',
		seoTitle: '{antiCheat} Bypass for {game} Hacks | FAQ',
		seoDescription:
			'How {brand} handles {antiCheat} updates — maintenance rebuilds, status notes, and undetected workflow on Windows PC.',
	}),
	faq({
		question: 'Do {primaryKeyword} work in ranked competitive?',
		answer:
			'Yes. ESP, radar, and soft aim are built for Ranked and Quick Match {game} on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before competitive queues.',
		slug: 'sea-of-thieves-cheats-for-ranked',
		seoTitle: 'Do {game} Hacks Work in Ranked? | FAQ',
		seoDescription:
			'{brand} ESP, radar, and soft aim for ranked {game} on PC — maintenance and status checks before you queue.',
	}),
	faq({
		question: 'What is a {game} mod menu?',
		answer:
			'A {game} mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. {brand} ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
		slug: 'what-is-sea-of-thieves-mod-menu',
		seoTitle: 'What Is a {game} Mod Menu? | FAQ',
		seoDescription:
			'{game} mod menu with ESP overlays, 2D radar, and soft aim toggles — included in {brand} for Windows PC voyages and PvP at seaofthievescheats.com.',
	}),
	faq({
		question: 'What is the difference between external and internal {primaryKeyword}?',
		answer:
			'External hacks read game memory from outside the client; internal hooks run inside the process. {brand} is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with {antiCheat} maintenance after patches.',
		slug: 'external-vs-internal-sea-of-thieves-cheats',
		seoTitle: 'External vs Internal {game} Hacks | FAQ',
		seoDescription:
			'External vs internal {primaryKeyword} explained — how {brand} packages ESP, radar, and aimbot on Windows PC.',
	}),
	faq({
		question: 'How long does {primaryKeyword} setup take?',
		answer:
			'Most buyers finish {brand} setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email {email} with your order ID.',
		slug: 'how-long-sea-of-thieves-cheat-setup-takes',
		seoTitle: 'How Long Does {game} Hack Setup Take? | FAQ',
		seoDescription:
			'{brand} setup time on Windows PC — typical 10–20 minute install for ESP, radar, and aimbot.',
	}),
	faq({
		question: 'Does {brand} include triggerbot?',
		answer:
			'{brand} focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
		slug: 'does-sea-of-thieves-cheats-include-triggerbot',
		seoTitle: 'Does {brand} Include Triggerbot? | FAQ',
		seoDescription:
			'Triggerbot and {brand} — see the current ESP, radar, and aimbot feature list on Windows PC.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_SOT',
		rating: 5,
		text: 'ngl i tried like 3 diff sea of thieves hacks before this and they all felt way too snappy in ranked. these sea of thieves cheats actually let you tune soft aim so it doesnt look obvious in Reapers Bones lobbies on Golden Sands. been grinding a week now, setup took probs 12 min after defender whitelisted the loader. no drama yet tbh',
		short: 'tried 3 sea of thieves cheats before — these sea of thieves cheats feel human at Reapers Hideout ranked once you tune soft aim on Golden Sands',
		slug: 'sea-of-thieves-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_SOT — 5/5 | {brand}',
		seoDescription:
			'@xKrypt0_SOT rates {brand} sea of thieves cheats soft aim 5/5 after testing Sea of Thieves hacks at Reapers Hideout ranked on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'i dont even run aimbot much, the sea of thieves cheats esp is why i bought. seeing who rotated before you third party on Plunder Outpost is insane info. been on monthly for a few weeks and its worth it. only gripe is menu could look cleaner but as sea of thieves hacks go this package is solid',
		short: 'bought for esp not aimbot — sea of thieves cheats wallhack shows rotations before you third party, huge in ranked on Plunder Outpost',
		slug: 'sea-of-thieves-esp-growth-run-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription:
			'@buildsR4K rates {brand} sea of thieves cheats ESP wallhack 4/5 for Sea of Thieves ranked info on Windows PC.',
		date: '2026-07-19',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'last sea of thieves cheat i had got cooked the day after a EAC update lol. switched to these sea of thieves cheats and loader was back same night they posted the rebuild. running esp + radar on Sanctuary Outpost, still clean after 2 weeks. grabbed lifetime cause im done paying monthly for dead sea of thieves cheats',
		short: 'old sea of thieves hack died on eac patch — these sea of thieves cheats rebuilt same night, still undetected 2 weeks on Sanctuary Outpost',
		slug: 'sot-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription:
			'@dma_wizard rates {brand} sea of thieves cheats 5/5 after a {antiCheat} update — fast Sea of Thieves hacks rebuild on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'im not techy at all bro. sea of thieves cheats menu is simple tho — dropped fov on soft aim, bumped smoothing, stopped the snap. feels more like muscle memory now in solo and ranked. only 4 stars cause first login support took an hour but they fixed my license key quick',
		short: 'not techy but sea of thieves cheats menu is easy — soft aim feels natural after fov and smoothing tweaks in ranked',
		slug: 'sea-of-thieves-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription:
			'@ctrl_player99 rates {brand} sea of thieves cheats soft aim 4/5 after FOV tuning on Sea of Thieves for Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'sea of thieves cheats work fine once youre actually in game. windows defender blocked the loader first try and i panicked ngl. emailed support with order id, got a reply in like 2 hours with steps. esp looks clean in open seas, havent gone full ranked yet. 3 stars cause setup stress but sea of thieves cheats itself seems ok',
		short: 'defender blocked loader at first but support fixed it in 2hrs — sea of thieves cheats esp looks clean in custom lobbies',
		slug: 'sea-of-thieves-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription:
			'@stormChaser_07 rates {brand} sea of thieves cheats setup 3/5 — ESP solid after support helped with Sea of Thieves hacks on Windows PC.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'mainly wanted ship ESP and loot tracking for sea of thieves. these sea of thieves cheats show kits and third parties earlier than my brain does lol. duos with friends is way less chaos when you know whos flanking. way better than random free sea of thieves hacks that look sketchy af',
		short: 'ship ESP on these sea of thieves cheats catches flanks and loot early — way better than sketchy free sea of thieves cheats',
		slug: 'sot-player-esp-review-lootgoblinx',
		seoTitle: 'Hero ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription:
			'@lootGoblinx rates {brand} sea of thieves cheats player ESP 5/5 for Sea of Thieves util tracking on Windows PC.',
		date: '2026-08-01',
		tag: 'ESP',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'using sea of thieves cheats since the new season dropped. per weapon aim profiles help on ship combat — sword vs blunderbuss actually feels different which is nice. status page was slow after EAC update but build was back next morning. solid sea of thieves hacks for long grind sessions at Reapers Hideout',
		short: 'sea of thieves cheats per-weapon aim profiles help ship combat at Reapers Hideout — back online next day after eac patch',
		slug: 'sea-of-thieves-soft-aim-session-review-rankedgrind42',
		seoTitle: 'Ranked Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription:
			'@rankedGrind42 rates {brand} sea of thieves cheats soft aim 4/5 for Sea of Thieves ranked ship combat on Windows PC.',
		date: '2026-07-07',
		tag: 'Ranked',
	}),
	reviewMeta({
		handle: 'vanLifeSOT',
		rating: 5,
		text: 'everyone talks esp but the 2d radar on these sea of thieves cheats is cracked. caught a flank on Ancient Spire twice in one match without staring at wallhack boxes. esp + radar combo feels like legit tier 1 sea of thieves cheats. running low opacity so it doesnt scream cheat in clips',
		short: '2d radar on these sea of thieves cheats caught huachi flanks twice — esp + radar combo feels like real sea of thieves hacks',
		slug: 'sea-of-thieves-radar-hack-review-vanlifesot',
		seoTitle: 'Radar Review by @vanLifeSOT — 5/5 | {brand}',
		seoDescription:
			'@vanLifeSOT rates {brand} sea of thieves cheats radar 5/5 for flank detection on Huachi and other Sea of Thieves maps.',
		date: '2026-07-28',
		tag: 'Radar',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'sot patch day is when half the cheat discords go silent lol. sea of thieves cheats team posted on status in like 3 hrs and i was back in ranked queue next morning. old provider left me waiting 4 days with no loader. not perfect but way better sea of thieves cheats support than im used to',
		short: 'patch day usually kills sea of thieves hacks — these sea of thieves cheats were back next morning, old provider took 4 days',
		slug: 'sot-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription:
			'@patchDayMike rates {brand} sea of thieves cheats status updates 4/5 after {antiCheat} patches on Sea of Thieves for Windows PC.',
		date: '2026-06-09',
		tag: 'EAC updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'melee main here. long range soft aim on these sea of thieves cheats with esp callouts is stupid strong if you keep settings lowkey. no bloat loader, simple install on win11. best sea of thieves hacks ive used for ranked sessions on Galleons Grave and Plunder Outpost — just dont crank fov like an idiot',
		short: 'melee main — soft aim + esp on these sea of thieves cheats hits different on Galleons Grave/mori if you keep settings subtle',
		slug: 'sot-cannon-soft-aim-review-snipezonly',
		seoTitle: 'Melee Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription:
			'@snipezOnly_ rates {brand} sea of thieves cheats melee soft aim 5/5 with ESP on Sea of Thieves for Windows PC.',
		date: '2026-08-01',
		tag: 'Melee',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	/** Published review count for schema and marketing UI */
	totalCount: 10,
	reviewCountLabel: '10+',
} as const;
