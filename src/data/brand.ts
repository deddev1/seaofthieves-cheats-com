/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Sea of Thieves Cheats',
	/** Short product label if needed */
	shortName: 'Sea of Thieves Cheats',
	/** Canonical origin — no trailing slash */
	url: 'https://seaofthievescheats.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@seaofthievescheats.com',
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsea-of-thieves',

	/** Public profiles for Organization sameAs + Twitter cards (edit in Brand Studio). */
	social: {
		twitterSite: '@seaofthievescheats',
		sameAs: [
			'https://x.com/seaofthievescheats',
			'https://www.reddit.com/r/Seaofthieves/',
			'https://store.steampowered.com/app/1172620/Sea_of_Thieves/',
		],
	} as const,

	/** Game this template instance targets */
	game: 'Sea of Thieves',
	/** Official game page — linked from the pirate image */
	gameUrl: 'https://store.steampowered.com/app/1172620/Sea_of_Thieves/',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'EAC',

	logo: '/images/sea-of-thieves-cheats-logo.webp',
	logoRaster: '/images/sea-of-thieves-cheats-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Sea of Thieves Cheats logo',
	defaultOgImage: '/images/sea-of-thieves-cheats-hero-1600w.webp',
	heroImage: '/images/sea-of-thieves-cheats-hero-1600w.webp',
	/** Product demo clip — lazy-loaded on homepage; fetched only after play */
	demoVideoUrl: 'https://seaofthievescheats.com/videos/hero.webm',
	demoVideoPoster: '/images/sea-of-thieves-cheats-aimbot-cannon.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * Edit in Brand Studio → Colors (tones are fully customizable).
	 */
	theme: {
		accent: '#18B6B0',
		bg: '#071A1F',
		soft: '#D6A84F',
		deep: '#128A86',
		hover: '#22CFC8',
		panel: '#102F34',
		elevated: '#0D292E',
		line: '#1A4248',
		ink: '#FFFFFF',
		inkHeading: '#FFFFFF',
		inkSecondary: '#FFFFFF',
		inkMuted: '#FFFFFF',
		link: '#18B6B0',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / meta keywords.
	 * Page-specific targeting lives in src/data/seo-keywords.ts
	 */
	keywords: {
		primary: 'sea of thieves cheats',
		list: [
			'sea of thieves cheats',
			'undetected sea of thieves cheats',
			'sea of thieves cheats 2026',
			'best sea of thieves cheats',
			'buy sea of thieves cheats',
			'sea of thieves esp',
			'sea of thieves wallhack',
			'sea of thieves aimbot',
			'sea of thieves soft aim',
			'sea of thieves radar hack',
			'sea of thieves eac bypass',
			'sea of thieves cheats pc',
			'sea of thieves cheat download',
			'sea of thieves mod menu',
			'undetected sea of thieves cheats',
			'sea of thieves cheats undetected',
			'sea of thieves aimbot hack',
			'sea of thieves esp hack',
			'best sea of thieves cheats 2026',
			'sea of thieves cheats for pvp',
			'sea of thieves external cheat',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 * Aim ~50–60 chars titles, ~140–160 chars descriptions.
	 */
	seo: {
		homeTitle: 'Sea of Thieves Cheats 2026 | ESP, Aimbot & Radar',
		homeDescription:
			'Buy undetected Sea of Thieves cheats — ESP, aimbot, wallhack & radar for voyages & PvP on PC. EAC updates included. Plans from $35/month.',
		featuresTitle: 'Sea of Thieves Cheats Features | ESP & Aimbot',
		featuresDescription:
			'Full Sea of Thieves cheats feature list — ESP wallhack, soft aim, 2D radar & toggles for voyages & PvP on PC. EAC maintenance at seaofthievescheats.com.',
		storeTitle: 'Sea of Thieves Cheats Pricing | $35/mo Lifetime',
		storeDescription:
			'Buy Sea of Thieves cheats — $35/month or $150 lifetime. ESP, aimbot & radar for voyages & PvP on PC. Instant digital delivery worldwide.',
		statusTitle: 'Sea of Thieves Status | Undetected {antiCheat} Updates',
		statusDescription:
			'Live status after {game} & {antiCheat} patches. Check undetected ESP, aimbot & radar rebuilds on PC before you queue. Status updated at seaofthievescheats.com.',
		previewTitle: 'Sea of Thieves Cheats | ESP, Aimbot & Radar Guide',
		previewDescription:
			'Sea of Thieves cheats guide — undetected ESP wallhack, soft aim, radar & {antiCheat} rebuilds for ranked & Arena on PC. Buy from $35 at seaofthievescheats.com.',
		setupTitle: 'Sea of Thieves Cheats Setup | Windows PC Install Guide',
		setupDescription:
			'Install {brand} on PC — activate ESP, soft aim & radar step by step. Setup guide at seaofthievescheats.com. Check {antiCheat} status before your first match.',
		supportTitle: 'Sea of Thieves Cheats Support | License & Setup Help',
		supportDescription:
			'Support for license delivery, ESP setup & billing on PC. Email {email} with your order ID. Fast help at seaofthievescheats.com/support before you play.',
		faqTitle: 'Sea of Thieves Cheats FAQ | ESP, Aimbot & EAC',
		faqDescription:
			'FAQ for Sea of Thieves cheats — delivery, setup, ranked & Arena use, {antiCheat} updates & pricing on PC. Answers at seaofthievescheats.com before you buy.',
		reviewsTitle: 'Sea of Thieves Cheats Reviews | Hacks & Cheats',
		reviewsDescription:
			'Real buyer reviews for Sea of Thieves cheats and Sea of Thieves hacks — ESP, soft aim, radar & {antiCheat} maintenance on PC. See license holder feedback at seaofthievescheats.com.',
		blogTitle: 'Sea of Thieves Blog | Guides & Patch Tips | {brand}',
		blogDescription:
			'Sea of Thieves guides — ranked tips, ESP & aimbot notes, ship tiers & {antiCheat} updates for PC. Read patch notes and buyer guides at seaofthievescheats.com/blog.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, and radar for PC',
		summary: '{brand} is an undetected {game} cheats package for Windows PC. Includes ESP, soft aim, and radar, with {antiCheat} maintenance after patches.',
		heroLede: 'Undetected ESP, soft aim, and radar for Sea of Thieves on Windows PC.',
		blogLabel: 'Sea of Thieves Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you queue.',
		previewIntro: '{brand} for Sea of Thieves — ESP wallhack, soft aim, 2D radar, and EAC rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro:
			'Real feedback on Sea of Thieves cheats and Sea of Thieves hacks — ESP, soft aim, radar, and support from {brand} buyers.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Soft aim',
		chipRadar: '2D radar',
		chipUpdates: 'Patch updates',
		navPreview: 'Cheats',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	/**
	 * Sitemap labels — XML is generated at build/dev from routes + these strings.
	 * Domain comes from `url` (also written to robots.txt via sync:brand).
	 * Tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
		sitemap: {
		/** YYYY-MM-DD — Brand Studio can bump this on refresh crawl dates */
		contentLastmod: '2026-08-31',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'Sea of Thieves cheats & Sea of Thieves hacks — what buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/sea-of-thieves-cheats-esp-player-skeleton.webp',
				title: 'Sea of Thieves ESP player skeleton and bone ESP',
				caption:
					'Sea of Thieves cheats ESP showing player skeleton boxes, crew list, and ship approaching alerts',
			},
			{
				src: '/images/sea-of-thieves-cheats-ship-tracking-esp.webp',
				title: 'Sea of Thieves ship tracking ESP and distance radar',
				caption:
					'Sea of Thieves cheats ship ESP with brigantine distance markers and crew player tags',
			},
			{
				src: '/images/sea-of-thieves-cheats-aimbot-cannon.webp',
				title: 'Sea of Thieves aimbot cannon and trajectory ESP',
				caption:
					'Sea of Thieves cheats aimbot cannon view with red trajectory line, outpost distances, and ship alerts',
			},
			{
				src: '/images/sea-of-thieves-cheats-esp-ship-approach.webp',
				title: 'Sea of Thieves ESP ship approach and cannon aimbot',
				caption:
					'Sea of Thieves cheats ESP showing ship approaching warnings, hull damage, and outpost distance readouts',
			},
			{
				src: '/images/sea-of-thieves-cheats-esp-island-overlay.webp',
				title: 'Sea of Thieves ESP island overlay and mod menu features',
				caption:
					'Sea of Thieves cheats ESP island markers, skeleton fleet alerts, and in-game feature hotkey overlay',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions in Google's preferred range (~140–160 chars). */
export function seoDescription(template: string): string {
	let text = fillBrandTokens(template).trim();
	if (text.length < 140) {
		const pad = text.toLowerCase().includes('seaofthievescheats.com')
			? ' Windows PC license with EAC maintenance after patches.'
			: ' Compare plans and guides at seaofthievescheats.com.';
		text = `${text.replace(/[.…]+$/, '')}.${pad}`;
	}
	if (text.length <= 160) return text;
	const trimmed = text.slice(0, 160);
	const lastSpace = trimmed.lastIndexOf(' ');
	return lastSpace > 130 ? trimmed.slice(0, lastSpace) : trimmed.slice(0, 160);
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
