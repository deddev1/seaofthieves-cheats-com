import { siteConfig } from './site';

/** User-provided Supabase originals — kept for provenance; site serves optimized WebP copies. */
export const PRODUCT_SCREENSHOT_SOURCES = [
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185425.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185442.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185513.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185527.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185540.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185621.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185635.png',
	'https://boqgsoiwnpbisvrxulbe.supabase.co/storage/v1/object/public/valo/valo%20cheats/Screenshot%202026-08-13%20185646.png',
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
		alt: 'Sea of Thieves ESP showing loot box and weapon labels through walls',
		title: 'Sea of Thieves ESP loot and item detection',
		caption: 'Sea of Thieves ESP wallhack with distance-tagged loot boxes and weapons',
	},
	2: {
		alt: 'Sea of Thieves wallhack ESP highlighting weapons and corpses through geometry',
		title: 'Sea of Thieves wallhack ESP overlay',
		caption: 'Sea of Thieves wallhack ESP with loot tags visible through walls',
	},
	3: {
		alt: 'Sea of Thieves third-person gameplay view on Windows PC',
		title: 'Sea of Thieves cheats in-match view',
		caption: 'Sea of Thieves gameplay session with cheats running on Windows PC',
	},
	4: {
		alt: 'Sea of Thieves ESP player tracking with names and distance readouts',
		title: 'Sea of Thieves ESP player tracking',
		caption: 'Sea of Thieves ESP showing enemy names, health, and distance through the map',
	},
	5: {
		alt: 'Sea of Thieves ESP radar-style player and loot markers in match',
		title: 'Sea of Thieves ESP threat markers',
		caption: 'Sea of Thieves ESP distance markers for players and loot in live matches',
	},
	6: {
		alt: 'Sea of Thieves cheats ESP overlay during combat on Windows PC',
		title: 'Sea of Thieves cheats combat ESP',
		caption: 'Sea of Thieves cheats ESP active during a live Sea of Thieves match',
	},
	7: {
		alt: 'Sea of Thieves wallhack ESP with player outlines and corpse tags',
		title: 'Sea of Thieves wallhack player ESP',
		caption: 'Sea of Thieves wallhack ESP with player outlines and distance tags',
	},
	8: {
		alt: 'Sea of Thieves ESP loot detection and in-match overlay',
		title: 'Sea of Thieves ESP and loot ESP gameplay',
		caption: 'Sea of Thieves ESP loot tags and wallhack overlay during ranked gameplay',
	},
};

export function screenshotSrc(n: number): string {
	const id = ((n - 1) % PRODUCT_SCREENSHOT_COUNT) + 1;
	return `/images/sot-screenshot-${String(id).padStart(2, '0')}.webp`;
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
