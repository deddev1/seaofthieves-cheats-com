import { brand } from './brand';
import type { PageId } from './i18n/routing';

export type ExternalResource = {
	id: string;
	label: string;
	href: string;
	note?: string;
};

export type GuideCta = {
	label: string;
	href: string;
};

/** Canonical outbound URLs — single source for CTAs, pills, and resource blocks. */
export const externalUrls = {
	steam: brand.gameUrl,
	steamNews: 'https://store.steampowered.com/app/1172620/news/',
	officialSite: 'https://www.seaofthieves.com/',
	wiki: 'https://seaofthieves.fandom.com/wiki/Sea_of_Thieves',
	steamCommunity: 'https://steamcommunity.com/app/1172620',
} as const;

/** Authoritative third-party guides — cite official game sources for readers and search engines. */
export const externalResources: ExternalResource[] = [
	{
		id: 'steam',
		label: 'Sea of Thieves on PC',
		href: externalUrls.steam,
		note: 'Official store page, system requirements, and player reviews.',
	},
	{
		id: 'patch',
		label: 'Sea of Thieves patch notes & news',
		href: externalUrls.steamNews,
		note: 'Read official update posts before you change your loadout.',
	},
	{
		id: 'official',
		label: 'Official Sea of Thieves website',
		href: externalUrls.officialSite,
		note: 'Game overview from Rare.',
	},
	{
		id: 'wiki',
		label: 'Sea of Thieves Wiki (Fandom)',
		href: externalUrls.wiki,
		note: 'Player stats, maps, and survival mechanics.',
	},
	{
		id: 'community',
		label: 'Sea of Thieves Community hub',
		href: externalUrls.steamCommunity,
		note: 'Announcements and community discussions.',
	},
];

/** Compact above-the-fold guide links for blogs and page banners. */
export const featuredGuidePills: GuideCta[] = [
	{ label: 'Sea of Thieves on PC', href: externalUrls.steam },
	{ label: 'Official patch notes', href: externalUrls.steamNews },
	{ label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
];

/**
 * Secondary banner buttons that should point to official guides — not internal sales pages.
 * Keeps primary Buy CTAs while giving Google clear outbound citations.
 */
export const externalSecondaryByPageId: Partial<Record<PageId, GuideCta>> = {
	features: { label: 'Official patch notes', href: externalUrls.steamNews },
	updates: { label: 'Sea of Thieves patch notes', href: externalUrls.steamNews },
	hacks: { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'sea-of-thieves-esp': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'sea-of-thieves-aimbot': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	radar: { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	setup: { label: 'Official game site', href: externalUrls.officialSite },
	support: { label: 'Sea of Thieves community', href: externalUrls.steamCommunity },
	faq: { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	undetected: { label: 'Sea of Thieves patch notes', href: externalUrls.steamNews },
	wallhack: { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	eac: { label: 'Official patch notes', href: externalUrls.steamNews },
	'cheats-2026': { label: 'Sea of Thieves on PC', href: externalUrls.steam },
	'cheat-download': { label: 'Official game site', href: externalUrls.officialSite },
	'mod-menu': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'soft-aim': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'best-cheats': { label: 'Sea of Thieves community', href: externalUrls.steamCommunity },
	'aimbot-hack': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'esp-hack': { label: 'Sea of Thieves Wiki', href: externalUrls.wiki },
	'unlock-all': { label: 'Official game site', href: externalUrls.officialSite },
	pricing: { label: 'Sea of Thieves on PC', href: externalUrls.steam },
};

export function getExternalSecondaryCta(pageId: PageId): GuideCta | undefined {
	return externalSecondaryByPageId[pageId];
}

export function isExternalHref(href: string): boolean {
	return href.startsWith('http');
}
