import { siteConfig } from './site';

/** User-provided Supabase originals — kept for provenance; site serves optimized WebP copies. */
export const PRODUCT_SCREENSHOT_SOURCES = [
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/1.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/2.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/3.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/4.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/sea/5.png',
] as const;

/** SEO-friendly crawl paths — each image has its own descriptive URL for Google. */
export const PRODUCT_SCREENSHOT_SLUGS = [
	'sea-of-thieves-cheats-esp-player-skeleton',
	'sea-of-thieves-cheats-ship-tracking-esp',
	'sea-of-thieves-cheats-aimbot-cannon',
	'sea-of-thieves-cheats-esp-ship-approach',
	'sea-of-thieves-cheats-esp-island-overlay',
] as const;

export const PRODUCT_SCREENSHOT_COUNT = PRODUCT_SCREENSHOT_SOURCES.length;

export type ProductScreenshotMeta = {
	id: number;
	src: string;
	url: string;
	sourceUrl: string;
	alt: string;
	title: string;
	caption: string;
};

const alts: Record<number, { alt: string; title: string; caption: string }> = {
	1: {
		alt: 'Sea of Thieves ESP player skeleton overlay with ship approaching warning on deck at night',
		title: 'Sea of Thieves ESP player skeleton and bone ESP',
		caption:
			'Sea of Thieves cheats ESP showing player skeleton boxes, crew list, and ship approaching alerts',
	},
	2: {
		alt: 'Sea of Thieves ship tracking ESP highlighting a Brigantine at 549 meters across open water',
		title: 'Sea of Thieves ship tracking ESP and distance radar',
		caption:
			'Sea of Thieves cheats ship ESP with brigantine distance markers and crew player tags',
	},
	3: {
		alt: 'Sea of Thieves aimbot cannon overlay with trajectory prediction line and ship approaching alert',
		title: 'Sea of Thieves aimbot cannon and trajectory ESP',
		caption:
			'Sea of Thieves cheats aimbot cannon view with red trajectory line, outpost distances, and ship alerts',
	},
	4: {
		alt: 'Sea of Thieves ESP ship approach warning with cannon aimbot reticle and location distance tags',
		title: 'Sea of Thieves ESP ship approach and cannon aimbot',
		caption:
			'Sea of Thieves cheats ESP showing ship approaching warnings, hull damage, and outpost distance readouts',
	},
	5: {
		alt: 'Sea of Thieves ESP island overlay with outpost markers, world events, and cheat feature list',
		title: 'Sea of Thieves ESP island overlay and mod menu features',
		caption:
			'Sea of Thieves cheats ESP island markers, skeleton fleet alerts, and in-game feature hotkey overlay',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/${PRODUCT_SCREENSHOT_SLUGS[id - 1]}.webp`;
}

export function absoluteScreenshotUrl(n: number): string {
	return new URL(screenshotSrc(n), siteConfig.url).href;
}

export function getProductScreenshot(n: number): ProductScreenshotMeta {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	const meta = alts[id] ?? {
		alt: `Sea of Thieves Cheats gameplay screenshot ${id}`,
		title: `Sea of Thieves Cheats screenshot ${id}`,
		caption: `Sea of Thieves Cheats screenshot ${id} for Sea of Thieves on Windows PC`,
	};
	const src = screenshotSrc(id);
	return {
		id,
		src,
		url: new URL(src, siteConfig.url).href,
		sourceUrl: PRODUCT_SCREENSHOT_SOURCES[id - 1]!,
		...meta,
	};
}

export const productScreenshots: ProductScreenshotMeta[] = Array.from(
	{ length: PRODUCT_SCREENSHOT_COUNT },
	(_, i) => getProductScreenshot(i + 1),
);

/** JSON-LD ImageObject nodes for gallery / sitemap parity. */
export function screenshotImageObjects(limit = PRODUCT_SCREENSHOT_COUNT) {
	return productScreenshots.slice(0, limit).map((shot) => ({
		'@type': 'ImageObject' as const,
		'@id': `${shot.url}#image`,
		url: shot.url,
		contentUrl: shot.url,
		name: shot.title,
		description: shot.caption,
		thumbnailUrl: shot.url,
	}));
}
