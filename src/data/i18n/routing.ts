import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'sea-of-thieves-esp'
	| 'sea-of-thieves-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'sea-of-thieves-esp': '/sea-of-thieves-esp/',
	'sea-of-thieves-aimbot': '/sea-of-thieves-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-sea-of-thieves-cheats/',
	wallhack: '/sea-of-thieves-wallhack/',
	radar: '/sea-of-thieves-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/sea-of-thieves-cheats-2026/',
	hacks: '/sea-of-thieves-cheats/',
	'cheat-download': '/sea-of-thieves-cheat-download/',
	'mod-menu': '/sea-of-thieves-mod-menu/',
	'soft-aim': '/sea-of-thieves-soft-aim/',
	'best-cheats': '/best-sea-of-thieves-cheats/',
	'aimbot-hack': '/sea-of-thieves-aimbot-hack/',
	'esp-hack': '/sea-of-thieves-esp-hack/',
	'unlock-all': '/sea-of-thieves-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'sea-of-thieves-esp': {
		en: 'sea-of-thieves-esp',
		es: 'trucos-sea-of-thieves-esp',
		fr: 'triche-sea-of-thieves-esp',
		de: 'sea-of-thieves-esp-wallhack',
		pt: 'hacks-sea-of-thieves-esp',
		it: 'trucchi-sea-of-thieves-esp',
		nl: 'sea-of-thieves-esp-wallhack',
		pl: 'cheaty-sea-of-thieves-esp',
		ru: 'sea-of-thieves-esp-chity',
		tr: 'sea-of-thieves-esp-hile',
		ar: 'sea-of-thieves-esp-wallhack',
		ja: 'sea-of-thieves-esp-wallhack',
		ko: 'sea-of-thieves-esp-wallhack',
		zh: 'sea-of-thieves-esp-wallhack',
		hi: 'sea-of-thieves-esp-wallhack',
		id: 'sea-of-thieves-esp-wallhack',
		th: 'sea-of-thieves-esp-wallhack',
		vi: 'sea-of-thieves-esp-wallhack',
		uk: 'sea-of-thieves-esp-chity',
		cs: 'sea-of-thieves-esp-wallhack',
		ro: 'sea-of-thieves-esp-wallhack',
		sv: 'sea-of-thieves-esp-wallhack',
	},
	'sea-of-thieves-aimbot': {
		en: 'sea-of-thieves-aimbot',
		es: 'trucos-sea-of-thieves-aimbot',
		fr: 'triche-sea-of-thieves-aimbot',
		de: 'sea-of-thieves-aimbot',
		pt: 'hacks-sea-of-thieves-aimbot',
		it: 'trucchi-sea-of-thieves-aimbot',
		nl: 'sea-of-thieves-aimbot',
		pl: 'cheaty-sea-of-thieves-aimbot',
		ru: 'sea-of-thieves-aimbot-chity',
		tr: 'sea-of-thieves-aimbot-hile',
		ar: 'sea-of-thieves-aimbot',
		ja: 'sea-of-thieves-aimbot',
		ko: 'sea-of-thieves-aimbot',
		zh: 'sea-of-thieves-aimbot',
		hi: 'sea-of-thieves-aimbot',
		id: 'sea-of-thieves-aimbot',
		th: 'sea-of-thieves-aimbot',
		vi: 'sea-of-thieves-aimbot',
		uk: 'sea-of-thieves-aimbot-chity',
		cs: 'sea-of-thieves-aimbot',
		ro: 'sea-of-thieves-aimbot',
		sv: 'sea-of-thieves-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-sea-of-thieves',
		fr: 'fonctionnalites-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-funktionen',
		pt: 'recursos-cheats-sea-of-thieves',
		it: 'funzioni-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-functies',
		pl: 'funkcje-cheatow-sea-of-thieves',
		ru: 'funkcii-chitov-sea-of-thieves',
		tr: 'sot-hile-ozellikleri',
		ar: 'sea-of-thieves-cheats-features',
		ja: 'sea-of-thieves-cheats-features',
		ko: 'sea-of-thieves-cheats-features',
		zh: 'sea-of-thieves-cheats-features',
		hi: 'sea-of-thieves-cheats-features',
		id: 'sea-of-thieves-cheats-features',
		th: 'sea-of-thieves-cheats-features',
		vi: 'sea-of-thieves-cheats-features',
		uk: 'funkcii-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-funkce',
		ro: 'functii-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-sea-of-thieves',
		fr: 'prix-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-preise',
		pt: 'precos-cheats-sea-of-thieves',
		it: 'prezzi-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-prijzen',
		pl: 'ceny-cheatow-sea-of-thieves',
		ru: 'ceny-chitov-sea-of-thieves',
		tr: 'sot-hile-fiyatlari',
		ar: 'sea-of-thieves-cheats-pricing',
		ja: 'sea-of-thieves-cheats-pricing',
		ko: 'sea-of-thieves-cheats-pricing',
		zh: 'sea-of-thieves-cheats-pricing',
		hi: 'sea-of-thieves-cheats-pricing',
		id: 'sea-of-thieves-cheats-pricing',
		th: 'sea-of-thieves-cheats-pricing',
		vi: 'sea-of-thieves-cheats-pricing',
		uk: 'ciny-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-ceny',
		ro: 'preturi-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-sea-of-thieves',
		fr: 'installation-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-installation',
		pt: 'instalacao-cheats-sea-of-thieves',
		it: 'installazione-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-installatie',
		pl: 'instalacja-cheatow-sea-of-thieves',
		ru: 'ustanovka-chitov-sea-of-thieves',
		tr: 'sot-hile-kurulum',
		ar: 'sea-of-thieves-cheats-setup',
		ja: 'sea-of-thieves-cheats-setup',
		ko: 'sea-of-thieves-cheats-setup',
		zh: 'sea-of-thieves-cheats-setup',
		hi: 'sea-of-thieves-cheats-setup',
		id: 'sea-of-thieves-cheats-setup',
		th: 'sea-of-thieves-cheats-setup',
		vi: 'sea-of-thieves-cheats-setup',
		uk: 'vstanovka-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-instalace',
		ro: 'instalare-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-sea-of-thieves',
		fr: 'mises-a-jour-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-updates',
		pt: 'atualizacoes-cheats-sea-of-thieves',
		it: 'aggiornamenti-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-updates',
		pl: 'aktualizacje-cheatow-sea-of-thieves',
		ru: 'obnovleniya-chitov-sea-of-thieves',
		tr: 'sot-hile-guncellemeleri',
		ar: 'sea-of-thieves-cheats-updates',
		ja: 'sea-of-thieves-cheats-updates',
		ko: 'sea-of-thieves-cheats-updates',
		zh: 'sea-of-thieves-cheats-updates',
		hi: 'sea-of-thieves-cheats-updates',
		id: 'sea-of-thieves-cheats-updates',
		th: 'sea-of-thieves-cheats-updates',
		vi: 'sea-of-thieves-cheats-updates',
		uk: 'onovlennya-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-aktualizace',
		ro: 'actualizari-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-sea-of-thieves',
		fr: 'faq-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-faq',
		pt: 'faq-cheats-sea-of-thieves',
		it: 'faq-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-faq',
		pl: 'faq-cheatow-sea-of-thieves',
		ru: 'faq-chitov-sea-of-thieves',
		tr: 'sot-hile-sss',
		ar: 'sea-of-thieves-cheats-faq',
		ja: 'sea-of-thieves-cheats-faq',
		ko: 'sea-of-thieves-cheats-faq',
		zh: 'sea-of-thieves-cheats-faq',
		hi: 'sea-of-thieves-cheats-faq',
		id: 'sea-of-thieves-cheats-faq',
		th: 'sea-of-thieves-cheats-faq',
		vi: 'sea-of-thieves-cheats-faq',
		uk: 'faq-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-faq',
		ro: 'faq-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-sea-of-thieves',
		fr: 'support-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats-support',
		pt: 'suporte-cheats-sea-of-thieves',
		it: 'supporto-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats-support',
		pl: 'wsparcie-cheatow-sea-of-thieves',
		ru: 'podderzhka-chitov-sea-of-thieves',
		tr: 'sot-hile-destek',
		ar: 'sea-of-thieves-cheats-support',
		ja: 'sea-of-thieves-cheats-support',
		ko: 'sea-of-thieves-cheats-support',
		zh: 'sea-of-thieves-cheats-support',
		hi: 'sea-of-thieves-cheats-support',
		id: 'sea-of-thieves-cheats-support',
		th: 'sea-of-thieves-cheats-support',
		vi: 'sea-of-thieves-cheats-support',
		uk: 'pidtrymka-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheats-podpora',
		ro: 'suport-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats-support',
	},
	undetected: {
		en: 'undetected-sea-of-thieves-cheats',
		es: 'trucos-sea-of-thieves-indetectables',
		fr: 'triche-sea-of-thieves-indetectable',
		de: 'unentdeckte-sea-of-thieves-cheats',
		pt: 'cheats-sea-of-thieves-indetectaveis',
		it: 'trucchi-sea-of-thieves-indetectabili',
		nl: 'undetected-sea-of-thieves-cheats',
		pl: 'niewykrywalne-cheats-sea-of-thieves',
		ru: 'nedecektiruemye-chity-sea-of-thieves',
		tr: 'tespit-edilemeyen-sot-hileleri',
		ar: 'undetected-sea-of-thieves-cheats',
		ja: 'undetected-sea-of-thieves-cheats',
		ko: 'undetected-sea-of-thieves-cheats',
		zh: 'undetected-sea-of-thieves-cheats',
		hi: 'undetected-sea-of-thieves-cheats',
		id: 'undetected-sea-of-thieves-cheats',
		th: 'undetected-sea-of-thieves-cheats',
		vi: 'undetected-sea-of-thieves-cheats',
		uk: 'nedecektovani-chity-sea-of-thieves',
		cs: 'undetected-sea-of-thieves-cheats',
		ro: 'cheats-sea-of-thieves-nedetectabile',
		sv: 'undetected-sea-of-thieves-cheats',
	},
	wallhack: {
		en: 'sea-of-thieves-wallhack',
		es: 'wallhack-trucos-sea-of-thieves',
		fr: 'wallhack-triche-sea-of-thieves',
		de: 'sea-of-thieves-wallhack',
		pt: 'wallhack-cheats-sea-of-thieves',
		it: 'wallhack-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-wallhack',
		pl: 'wallhack-cheatow-sea-of-thieves',
		ru: 'wallhack-chity-sea-of-thieves',
		tr: 'sea-of-thieves-wallhack-hile',
		ar: 'sea-of-thieves-wallhack',
		ja: 'sea-of-thieves-wallhack',
		ko: 'sea-of-thieves-wallhack',
		zh: 'sea-of-thieves-wallhack',
		hi: 'sea-of-thieves-wallhack',
		id: 'sea-of-thieves-wallhack',
		th: 'sea-of-thieves-wallhack',
		vi: 'sea-of-thieves-wallhack',
		uk: 'wallhack-chity-sea-of-thieves',
		cs: 'sea-of-thieves-wallhack',
		ro: 'wallhack-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-wallhack',
	},
	radar: {
		en: 'sea-of-thieves-radar-hack',
		es: 'radar-hack-trucos-sea-of-thieves',
		fr: 'radar-hack-triche-sea-of-thieves',
		de: 'sea-of-thieves-radar-hack',
		pt: 'radar-hack-cheats-sea-of-thieves',
		it: 'radar-hack-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-radar-hack',
		pl: 'radar-hack-cheatow-sea-of-thieves',
		ru: 'radar-hack-chity-sea-of-thieves',
		tr: 'sea-of-thieves-radar-hack',
		ar: 'sea-of-thieves-radar-hack',
		ja: 'sea-of-thieves-radar-hack',
		ko: 'sea-of-thieves-radar-hack',
		zh: 'sea-of-thieves-radar-hack',
		hi: 'sea-of-thieves-radar-hack',
		id: 'sea-of-thieves-radar-hack',
		th: 'sea-of-thieves-radar-hack',
		vi: 'sea-of-thieves-radar-hack',
		uk: 'radar-hack-chity-sea-of-thieves',
		cs: 'sea-of-thieves-radar-hack',
		ro: 'radar-hack-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-hacks',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-hacks',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'sea-of-thieves-cheats-2026',
		es: 'trucos-sea-of-thieves-2026',
		fr: 'triche-sea-of-thieves-2026',
		de: 'sea-of-thieves-cheats-2026',
		pt: 'cheats-sea-of-thieves-2026',
		it: 'trucchi-sea-of-thieves-2026',
		nl: 'sea-of-thieves-cheats-2026',
		pl: 'cheaty-sea-of-thieves-2026',
		ru: 'chity-sea-of-thieves-2026',
		tr: 'sot-hileleri-2026',
		ar: 'sea-of-thieves-cheats-2026',
		ja: 'sea-of-thieves-cheats-2026',
		ko: 'sea-of-thieves-cheats-2026',
		zh: 'sea-of-thieves-cheats-2026',
		hi: 'sea-of-thieves-cheats-2026',
		id: 'sea-of-thieves-cheats-2026',
		th: 'sea-of-thieves-cheats-2026',
		vi: 'sea-of-thieves-cheats-2026',
		uk: 'chity-sea-of-thieves-2026',
		cs: 'sea-of-thieves-cheats-2026',
		ro: 'cheats-sea-of-thieves-2026',
		sv: 'sea-of-thieves-cheats-2026',
	},
	hacks: {
		en: 'sea-of-thieves-cheats',
		es: 'hacks-trucos-sea-of-thieves',
		fr: 'hacks-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheats',
		pt: 'cheats-sea-of-thieves',
		it: 'hacks-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheats',
		pl: 'hacks-cheatow-sea-of-thieves',
		ru: 'haksy-chity-sea-of-thieves',
		tr: 'sot-hile-hacks',
		ar: 'sea-of-thieves-cheats',
		ja: 'sea-of-thieves-cheats',
		ko: 'sea-of-thieves-cheats',
		zh: 'sea-of-thieves-cheats',
		hi: 'sea-of-thieves-cheats',
		id: 'sea-of-thieves-cheats',
		th: 'sea-of-thieves-cheats',
		vi: 'sea-of-thieves-cheats',
		uk: 'haksy-chity-sea-of-thieves',
		cs: 'sea-of-thieves-cheats',
		ro: 'cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheats',
	},
	'cheat-download': {
		en: 'sea-of-thieves-cheat-download',
		es: 'descarga-trucos-sea-of-thieves',
		fr: 'telechargement-triche-sea-of-thieves',
		de: 'sea-of-thieves-cheat-download',
		pt: 'download-cheats-sea-of-thieves',
		it: 'download-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-cheat-download',
		pl: 'pobieranie-cheatow-sea-of-thieves',
		ru: 'skachat-chity-sea-of-thieves',
		tr: 'sot-hile-indir',
		ar: 'sea-of-thieves-cheat-download',
		ja: 'sea-of-thieves-cheat-download',
		ko: 'sea-of-thieves-cheat-download',
		zh: 'sea-of-thieves-cheat-download',
		hi: 'sea-of-thieves-cheat-download',
		id: 'sea-of-thieves-cheat-download',
		th: 'sea-of-thieves-cheat-download',
		vi: 'sea-of-thieves-cheat-download',
		uk: 'zavantazhennya-chitiv-sea-of-thieves',
		cs: 'sea-of-thieves-cheat-download',
		ro: 'descarcare-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-cheat-download',
	},
	'mod-menu': {
		en: 'sea-of-thieves-mod-menu',
		es: 'menu-mod-trucos-sea-of-thieves',
		fr: 'menu-mod-triche-sea-of-thieves',
		de: 'sea-of-thieves-mod-menu',
		pt: 'menu-mod-cheats-sea-of-thieves',
		it: 'menu-mod-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-mod-menu',
		pl: 'menu-mod-cheatow-sea-of-thieves',
		ru: 'mod-menu-chity-sea-of-thieves',
		tr: 'sea-of-thieves-mod-menu',
		ar: 'sea-of-thieves-mod-menu',
		ja: 'sea-of-thieves-mod-menu',
		ko: 'sea-of-thieves-mod-menu',
		zh: 'sea-of-thieves-mod-menu',
		hi: 'sea-of-thieves-mod-menu',
		id: 'sea-of-thieves-mod-menu',
		th: 'sea-of-thieves-mod-menu',
		vi: 'sea-of-thieves-mod-menu',
		uk: 'mod-menu-chity-sea-of-thieves',
		cs: 'sea-of-thieves-mod-menu',
		ro: 'meniu-mod-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-mod-menu',
	},
	'soft-aim': {
		en: 'sea-of-thieves-soft-aim',
		es: 'soft-aim-trucos-sea-of-thieves',
		fr: 'soft-aim-triche-sea-of-thieves',
		de: 'sea-of-thieves-soft-aim',
		pt: 'soft-aim-cheats-sea-of-thieves',
		it: 'soft-aim-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-soft-aim',
		pl: 'soft-aim-cheatow-sea-of-thieves',
		ru: 'soft-aim-chity-sea-of-thieves',
		tr: 'sea-of-thieves-soft-aim',
		ar: 'sea-of-thieves-soft-aim',
		ja: 'sea-of-thieves-soft-aim',
		ko: 'sea-of-thieves-soft-aim',
		zh: 'sea-of-thieves-soft-aim',
		hi: 'sea-of-thieves-soft-aim',
		id: 'sea-of-thieves-soft-aim',
		th: 'sea-of-thieves-soft-aim',
		vi: 'sea-of-thieves-soft-aim',
		uk: 'soft-aim-chity-sea-of-thieves',
		cs: 'sea-of-thieves-soft-aim',
		ro: 'soft-aim-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-soft-aim',
	},
	'best-cheats': {
		en: 'best-sea-of-thieves-cheats',
		es: 'mejores-trucos-sea-of-thieves',
		fr: 'meilleures-triches-sea-of-thieves',
		de: 'beste-sea-of-thieves-cheats',
		pt: 'melhores-cheats-sea-of-thieves',
		it: 'migliori-trucchi-sea-of-thieves',
		nl: 'beste-sea-of-thieves-cheats',
		pl: 'najlepsze-cheats-sea-of-thieves',
		ru: 'luchshie-chity-sea-of-thieves',
		tr: 'en-iyi-sot-hileleri',
		ar: 'best-sea-of-thieves-cheats',
		ja: 'best-sea-of-thieves-cheats',
		ko: 'best-sea-of-thieves-cheats',
		zh: 'best-sea-of-thieves-cheats',
		hi: 'best-sea-of-thieves-cheats',
		id: 'best-sea-of-thieves-cheats',
		th: 'best-sea-of-thieves-cheats',
		vi: 'best-sea-of-thieves-cheats',
		uk: 'naykrashchi-chity-sea-of-thieves',
		cs: 'nejlepsi-sea-of-thieves-cheats',
		ro: 'cele-mai-bune-cheats-sea-of-thieves',
		sv: 'basta-sea-of-thieves-cheats',
	},
	'aimbot-hack': {
		en: 'sea-of-thieves-aimbot-hack',
		es: 'aimbot-hack-trucos-sea-of-thieves',
		fr: 'aimbot-hack-triche-sea-of-thieves',
		de: 'sea-of-thieves-aimbot-hack',
		pt: 'aimbot-hack-cheats-sea-of-thieves',
		it: 'aimbot-hack-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-aimbot-hack',
		pl: 'aimbot-hack-cheatow-sea-of-thieves',
		ru: 'aimbot-hack-chity-sea-of-thieves',
		tr: 'sea-of-thieves-aimbot-hack',
		ar: 'sea-of-thieves-aimbot-hack',
		ja: 'sea-of-thieves-aimbot-hack',
		ko: 'sea-of-thieves-aimbot-hack',
		zh: 'sea-of-thieves-aimbot-hack',
		hi: 'sea-of-thieves-aimbot-hack',
		id: 'sea-of-thieves-aimbot-hack',
		th: 'sea-of-thieves-aimbot-hack',
		vi: 'sea-of-thieves-aimbot-hack',
		uk: 'aimbot-hack-chity-sea-of-thieves',
		cs: 'sea-of-thieves-aimbot-hack',
		ro: 'aimbot-hack-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-aimbot-hack',
	},
	'esp-hack': {
		en: 'sea-of-thieves-esp-hack',
		es: 'esp-hack-trucos-sea-of-thieves',
		fr: 'esp-hack-triche-sea-of-thieves',
		de: 'sea-of-thieves-esp-hack',
		pt: 'esp-hack-cheats-sea-of-thieves',
		it: 'esp-hack-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-esp-hack',
		pl: 'esp-hack-cheatow-sea-of-thieves',
		ru: 'esp-hack-chity-sea-of-thieves',
		tr: 'sea-of-thieves-esp-hack',
		ar: 'sea-of-thieves-esp-hack',
		ja: 'sea-of-thieves-esp-hack',
		ko: 'sea-of-thieves-esp-hack',
		zh: 'sea-of-thieves-esp-hack',
		hi: 'sea-of-thieves-esp-hack',
		id: 'sea-of-thieves-esp-hack',
		th: 'sea-of-thieves-esp-hack',
		vi: 'sea-of-thieves-esp-hack',
		uk: 'esp-hack-chity-sea-of-thieves',
		cs: 'sea-of-thieves-esp-hack',
		ro: 'esp-hack-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-esp-hack',
	},
	'unlock-all': {
		en: 'sea-of-thieves-unlock-all',
		es: 'unlock-all-trucos-sea-of-thieves',
		fr: 'unlock-all-triche-sea-of-thieves',
		de: 'sea-of-thieves-unlock-all',
		pt: 'unlock-all-cheats-sea-of-thieves',
		it: 'unlock-all-trucchi-sea-of-thieves',
		nl: 'sea-of-thieves-unlock-all',
		pl: 'unlock-all-cheatow-sea-of-thieves',
		ru: 'unlock-all-chity-sea-of-thieves',
		tr: 'sea-of-thieves-unlock-all',
		ar: 'sea-of-thieves-unlock-all',
		ja: 'sea-of-thieves-unlock-all',
		ko: 'sea-of-thieves-unlock-all',
		zh: 'sea-of-thieves-unlock-all',
		hi: 'sea-of-thieves-unlock-all',
		id: 'sea-of-thieves-unlock-all',
		th: 'sea-of-thieves-unlock-all',
		vi: 'sea-of-thieves-unlock-all',
		uk: 'unlock-all-chity-sea-of-thieves',
		cs: 'sea-of-thieves-unlock-all',
		ro: 'unlock-all-cheats-sea-of-thieves',
		sv: 'sea-of-thieves-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	if (withSlash === '/sea-of-thieves-cheats/' || withSlash === '/sea-of-thieves-cheats/') {
		return getLocalizedPath('hacks', locale);
	}
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
	isReviewsIndex?: boolean;
	reviewSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (rest[0] === 'reviews') {
		if (rest.length === 1) {
			return { locale: defaultLocale, isReviewsIndex: true };
		}
		return { locale: defaultLocale, reviewSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.isReviewsIndex) {
		return '/reviews/';
	}
	if (context.reviewSlug) {
		return `/reviews/${context.reviewSlug}/`;
	}
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('sea-of-thieves-aimbot', locale), pageId: 'sea-of-thieves-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('sea-of-thieves-esp', locale), pageId: 'sea-of-thieves-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
