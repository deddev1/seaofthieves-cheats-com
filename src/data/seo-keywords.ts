import type { PageId } from './i18n/routing';

/** Primary money keyword — drives {primaryKeyword} tokens sitewide. */
export const primarySeoKeyword = 'sea of thieves cheats';

/**
 * Default meta keywords (fallback when no page-specific set).
 * Ordered by commercial intent + search volume fit for seaofthievescheats.com.
 */
export const globalSeoKeywords = [
	'sea of thieves cheats',
	'sea of thieves hacks',
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
	'sea of thieves cheats undetected',
	'sea of thieves aimbot hack',
	'sea of thieves esp hack',
	'best sea of thieves cheats 2026',
	'sea of thieves cheats for ranked',
	'sea of thieves external cheat',
] as const;

/** Page-level meta keywords — aligned to canonical URLs and on-page intent. */
export const pageSeoKeywords: Partial<Record<PageId, readonly string[]>> = {
	home: [
		'sea of thieves cheats',
		'sea of thieves cheats 2026',
		'undetected sea of thieves cheats',
		'buy sea of thieves cheats',
		'sea of thieves esp',
		'sea of thieves aimbot',
	],
	hacks: [
		'sea of thieves cheats',
		'sea of thieves cheats pc',
		'undetected sea of thieves cheats',
		'sea of thieves esp',
		'sea of thieves aimbot',
	],
	'sea-of-thieves-esp': [
		'sea of thieves esp',
		'sea of thieves esp hack',
		'sea of thieves wallhack',
		'sea of thieves esp wallhack',
		'sea of thieves cheats esp',
	],
	wallhack: [
		'sea of thieves wallhack',
		'sea of thieves esp wallhack',
		'sea of thieves wallhack hack',
		'sea of thieves esp',
	],
	'sea-of-thieves-aimbot': [
		'sea of thieves aimbot',
		'sea of thieves soft aim',
		'sea of thieves aimbot hack',
		'legit sea of thieves aimbot',
		'sea of thieves cheats aimbot',
	],
	'aimbot-hack': ['sea of thieves aimbot hack', 'sea of thieves aimbot', 'sea of thieves soft aim', 'sea of thieves cheats aimbot'],
	'soft-aim': ['sea of thieves soft aim', 'sea of thieves aimbot', 'soft aim sea of thieves', 'sea of thieves cheats soft aim'],
	radar: ['sea of thieves radar hack', 'sea of thieves 2d radar', 'sea of thieves radar', 'sea of thieves cheats radar'],
	'esp-hack': ['sea of thieves esp hack', 'sea of thieves esp', 'sea of thieves wallhack', 'sea of thieves cheats esp'],
	features: [
		'sea of thieves cheats features',
		'sea of thieves esp',
		'sea of thieves aimbot',
		'sea of thieves radar hack',
		'sea of thieves mod menu',
	],
	pricing: [
		'buy sea of thieves cheats',
		'sea of thieves cheats price',
		'sea of thieves cheats monthly',
		'sea of thieves cheats lifetime',
	],
	setup: [
		'sea of thieves cheats setup',
		'sea of thieves cheat download',
		'install sea of thieves cheats',
	],
	'cheat-download': [
		'sea of thieves cheat download',
		'sea of thieves cheats download',
		'sea of thieves cheats setup',
	],
	updates: [
		'undetected sea of thieves cheats',
		'sea of thieves cheats status',
		'EAC update',
		'sea of thieves cheats undetected',
	],
	undetected: [
		'undetected sea of thieves cheats',
		'sea of thieves cheats undetected',
		'EAC undetected',
	],
	eac: [
		'sea of thieves eac bypass',
		'eac bypass sea of thieves',
		'sea of thieves anti cheat bypass',
		'hwid spoofer sea of thieves',
	],
	'cheats-2026': [
		'sea of thieves cheats 2026',
		'best sea of thieves cheats 2026',
		'undetected sea of thieves cheats 2026',
	],
	'best-cheats': [
		'best sea of thieves cheats',
		'best sea of thieves cheats 2026',
		'sea of thieves cheats comparison',
	],
	'mod-menu': ['sea of thieves mod menu', 'sea of thieves cheat menu', 'sea of thieves cheats menu'],
	faq: ['sea of thieves cheats faq', 'sea of thieves cheats setup', 'undetected sea of thieves cheats'],
	support: ['sea of thieves cheats support', 'sea of thieves cheats license help'],
};

/** Meta keywords for /reviews/ and individual review pages (English-only routes). */
export const reviewsSeoKeywords = [
	'sea of thieves cheats reviews',
	'sea of thieves hacks',
	'sea of thieves cheats',
	'sea of thieves cheats',
	'sea of thieves cheats',
	'sea of thieves hacks pc',
	'sea of thieves esp',
	'sea of thieves aimbot',
	'sea of thieves radar hack',
	'undetected sea of thieves cheats',
] as const;

export function getPageSeoKeywords(pageId?: PageId): string[] {
	if (!pageId) return [...globalSeoKeywords];
	const pageKeywords = pageSeoKeywords[pageId];
	return pageKeywords?.length ? [...pageKeywords] : [...globalSeoKeywords];
}
