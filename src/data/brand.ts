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
	checkoutUrl: 'https://zadeyo.com/go/QRH?to=%2Fproducts%2Fsea-of-thieves-novaxware',

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
	demoVideoPoster: '/images/sot-screenshot-06.webp',

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
		accent: '#C9A227',
		bg: '#0A1628',
		soft: '#FFFFFF',
		deep: '#1A3A5C',
		hover: '#E0B83D',
		panel: '#0F1F35',
		elevated: '#152A45',
		line: '#1E3A5F',
		ink: '#E8EDF2',
		inkHeading: '#FFFFFF',
		inkSecondary: '#A8B8C8',
		inkMuted: '#6B8299',
		link: '#C9A227',
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
		contentLastmod: '2026-08-25',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'Sea of Thieves cheats & Sea of Thieves hacks — what buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/sot-screenshot-01.webp',
				title: 'Sea of Thieves ESP loot and item detection',
				caption: 'Sea of Thieves ESP wallhack with distance-tagged loot boxes and weapons',
			},
			{
				src: '/images/sot-screenshot-02.webp',
				title: 'Sea of Thieves wallhack ESP overlay',
				caption: 'Sea of Thieves wallhack ESP with loot tags visible through walls',
			},
			{
				src: '/images/sot-screenshot-03.webp',
				title: 'Sea of Thieves cheats in-match view',
				caption: 'Sea of Thieves gameplay session with cheats running on Windows PC',
			},
			{
				src: '/images/sot-screenshot-04.webp',
				title: 'Sea of Thieves ESP player tracking',
				caption: 'Sea of Thieves ESP showing enemy names, health, and distance through the map',
			},
			{
				src: '/images/sot-screenshot-05.webp',
				title: 'Sea of Thieves ESP threat markers',
				caption: 'Sea of Thieves ESP distance markers for players and loot in live matches',
			},
			{
				src: '/images/sot-screenshot-06.webp',
				title: 'Sea of Thieves cheats combat ESP',
				caption: 'Sea of Thieves cheats ESP active during a live Sea of Thieves match',
			},
			{
				src: '/images/sot-screenshot-07.webp',
				title: 'Sea of Thieves wallhack player ESP',
				caption: 'Sea of Thieves wallhack ESP with player outlines and distance tags',
			},
			{
				src: '/images/sot-screenshot-08.webp',
				title: 'Sea of Thieves ESP and loot ESP gameplay',
				caption: 'Sea of Thieves ESP loot tags and wallhack overlay during ranked gameplay',
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
