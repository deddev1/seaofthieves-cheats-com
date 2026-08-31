/**
 * Near-duplicate pageIds → stronger pillars (301 in production via Worker + path-redirects).
 *
 * Long-tail URLs (/sea-of-thieves-wallhack/, /sea-of-thieves-mod-menu/, /sea-of-thieves-cheat-download/, etc.)
 * stay on 301 — not thin indexable stubs — to consolidate link equity on pillar pages
 * and avoid SERP cannibalization against /sea-of-thieves-esp/, /sea-of-thieves-aimbot/, /, and /sea-of-thieves-cheats/.
 */
export const cannibalRedirectTargets = {
	'mod-menu': 'home',
	'unlock-all': 'home',
	'aimbot-hack': 'sea-of-thieves-aimbot',
	'soft-aim': 'sea-of-thieves-aimbot',
	'esp-hack': 'sea-of-thieves-esp',
	wallhack: 'sea-of-thieves-esp',
	'cheat-download': 'setup',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
