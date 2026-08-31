export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global Sea of Thieves Cheats blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'Sea of Thieves Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Sea of Thieves guides — sailing and PvP tips, ESP, aimbot notes, sailing routes, and EAC update coverage. English blog at seaofthievescheats.com/blog/.',
		blogH1: 'Sea of Thieves Cheats Intel',
		blogIntro:
			'Short Sea of Thieves guides for voyages, PvP sessions and ranked matches. Pair these tips with Sea of Thieves Cheats product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'Sea of Thieves Cheats home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de Sea of Thieves Cheats con guías de trucos indetectables, ESP wallhack, radar y Aimbot para Sea of Thieves en PC Windows.',
		blogH1: 'Blog Sea of Thieves Cheats — Guías globales',
		blogIntro:
			'Guías SEO de trucos Sea of Thieves indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento EAC en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías Sea of Thieves relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio Sea of Thieves Cheats',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Guides en 22 langues',
		blogDescription:
			'Blog Sea of Thieves Cheats : triches indétectables, ESP wallhack, radar et Aimbot pour Sea of Thieves sur PC Windows.',
		blogH1: 'Blog Sea of Thieves Cheats — Guides mondiaux',
		blogIntro:
			'Guides SEO triches Sea of Thieves indétectables, ESP wallhack, radar hack, Aimbot et EAC en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides Sea of Thieves associés',
		allPosts: 'Tous les articles',
		home: 'Accueil Sea of Thieves Cheats',
		language: 'Langue',
	},
	de: {
		blogTitle: 'Sea of Thieves Cheats Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'Sea of Thieves Cheats Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für Sea of Thieves auf Windows PC.',
		blogH1: 'Sea of Thieves Cheats Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected Sea of Thieves Cheats, ESP Wallhack, Radar Hack, Aimbot und EAC in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte Sea of Thieves Guides',
		allPosts: 'Alle Beiträge',
		home: 'Sea of Thieves Cheats Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog Sea of Thieves Cheats com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para Sea of Thieves no PC.',
		blogH1: 'Blog Sea of Thieves Cheats — Guias globais',
		blogIntro:
			'Guias SEO de cheats Sea of Thieves indetectáveis, ESP wallhack, radar hack, Aimbot e EAC em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias Sea of Thieves relacionados',
		allPosts: 'Todos os posts',
		home: 'Início Sea of Thieves Cheats',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog Sea of Thieves Cheats con guide cheat indetectable, ESP wallhack, radar e Aimbot per Sea of Thieves su PC Windows.',
		blogH1: 'Blog Sea of Thieves Cheats — Guide globali',
		blogIntro:
			'Guide SEO cheat Sea of Thieves indetectable, ESP wallhack, radar hack, Aimbot e EAC in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide Sea of Thieves correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home Sea of Thieves Cheats',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'Sea of Thieves Cheats Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'Sea of Thieves Cheats blog met undetected ESP, wallhack, radar en Aimbot gidsen voor Sea of Thieves op Windows PC.',
		blogH1: 'Sea of Thieves Cheats Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected sea of thieves cheats, ESP wallhack, radar hack, Aimbot en EAC in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde Sea of Thieves gidsen',
		allPosts: 'Alle posts',
		home: 'Sea of Thieves Cheats home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog Sea of Thieves Cheats z poradnikami undetected ESP, wallhack, radar i Aimbot dla Sea of Thieves na PC.',
		blogH1: 'Blog Sea of Thieves Cheats — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów Sea of Thieves, ESP wallhack, radar hack, Aimbot i EAC w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki Sea of Thieves',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna Sea of Thieves Cheats',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог Sea of Thieves Cheats 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог Sea of Thieves Cheats: undetected ESP, wallhack, radar и Aimbot для Sea of Thieves на Windows PC.',
		blogH1: 'Блог Sea of Thieves Cheats — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам Sea of Thieves, ESP wallhack, radar hack, Aimbot и EAC на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды Sea of Thieves',
		allPosts: 'Все статьи',
		home: 'Главная Sea of Thieves Cheats',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'Sea of Thieves Cheats Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'Sea of Thieves Cheats blog: undetected ESP, wallhack, radar ve Aimbot rehberleri Sea of Thieves Windows PC.',
		blogH1: 'Sea of Thieves Cheats Blog — Küresel rehberler',
		blogIntro:
			'Undetected Sea of Thieves hileleri, ESP wallhack, radar hack, Aimbot ve EAC SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili Sea of Thieves rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'Sea of Thieves Cheats ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة Sea of Thieves Cheats 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة Sea of Thieves Cheats: غش undetected وESP wallhack ورadar وAimbot لـ Sea of Thieves على Windows PC.',
		blogH1: 'مدونة Sea of Thieves Cheats — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش Sea of Thieves undetected وESP wallhack ورadar hack وAimbot وEAC بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة Sea of Thieves ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية Sea of Thieves Cheats',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'Sea of Thieves Cheats ブログ 2026 | 22言語ガイド',
		blogDescription:
			'Sea of Thieves Cheatsブログ：undetected ESP、wallhack、radar、Aimbotガイド。Sea of Thieves Windows PC向け。',
		blogH1: 'Sea of Thieves Cheats ブログ — グローバルガイド',
		blogIntro:
			'undetected Sea of Thievesチート、ESP wallhack、radar hack、Aimbot、EACのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連Sea of Thievesガイド',
		allPosts: 'すべての記事',
		home: 'Sea of Thieves Cheats ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'Sea of Thieves Cheats 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'Sea of Thieves Cheats 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. Sea of Thieves Windows PC.',
		blogH1: 'Sea of Thieves Cheats 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected Sea of Thieves 치트, ESP wallhack, radar hack, Aimbot, EAC SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 Sea of Thieves 가이드',
		allPosts: '모든 게시물',
		home: 'Sea of Thieves Cheats 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'Sea of Thieves Cheats 博客 2026 | 22种语言指南',
		blogDescription:
			'Sea of Thieves Cheats博客：undetected ESP、wallhack、radar和Aimbot指南，适用于Sea of Thieves Windows PC。',
		blogH1: 'Sea of Thieves Cheats 博客 — 全球指南',
		blogIntro:
			'undetected Sea of Thieves作弊、ESP wallhack、radar hack、Aimbot和EAC的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关Sea of Thieves指南',
		allPosts: '所有文章',
		home: 'Sea of Thieves Cheats 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'Sea of Thieves Cheats ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'Sea of Thieves Cheats ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड Sea of Thieves Windows PC के लिए।',
		blogH1: 'Sea of Thieves Cheats ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected sea of thieves cheats, ESP wallhack, radar hack, Aimbot और EAC SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित Sea of Thieves गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'Sea of Thieves Cheats होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog Sea of Thieves Cheats: panduan undetected ESP, wallhack, radar dan Aimbot untuk Sea of Thieves di PC Windows.',
		blogH1: 'Blog Sea of Thieves Cheats — Panduan global',
		blogIntro:
			'Panduan SEO cheat Sea of Thieves undetected, ESP wallhack, radar hack, Aimbot dan EAC dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Pandua Sea of Thieves terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda Sea of Thieves Cheats',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก Sea of Thieves Cheats 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก Sea of Thieves Cheats: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ Sea of Thieves บน PC',
		blogH1: 'บล็อก Sea of Thieves Cheats — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat Sea of Thieves undetected, ESP wallhack, radar hack, Aimbot และ EAC 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ Sea of Thieves ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก Sea of Thieves Cheats',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog Sea of Thieves Cheats: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho Sea of Thieves trên PC.',
		blogH1: 'Blog Sea of Thieves Cheats — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat Sea of Thieves undetected, ESP wallhack, radar hack, Aimbot và EAC bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn Sea of Thieves liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ Sea of Thieves Cheats',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог Sea of Thieves Cheats 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог Sea of Thieves Cheats: undetected ESP, wallhack, radar та Aimbot для Sea of Thieves на Windows PC.',
		blogH1: 'Блог Sea of Thieves Cheats — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів Sea of Thieves, ESP wallhack, radar hack, Aimbot та EAC 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди Sea of Thieves",
		allPosts: 'Усі статті',
		home: 'Головна Sea of Thieves Cheats',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog Sea of Thieves Cheats: undetected ESP, wallhack, radar a Aimbot pro Sea of Thieves na Windows PC.',
		blogH1: 'Blog Sea of Thieves Cheats — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected sea of thieves cheaty, ESP wallhack, radar hack, Aimbot a EAC ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související Sea of Thieves průvodce',
		allPosts: 'Všechny články',
		home: 'Domů Sea of Thieves Cheats',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog Sea of Thieves Cheats 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog Sea of Thieves Cheats: ghiduri undetected ESP, wallhack, radar și Aimbot pentru Sea of Thieves pe PC.',
		blogH1: 'Blog Sea of Thieves Cheats — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri Sea of Thieves undetected, ESP wallhack, radar hack, Aimbot și EAC în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri Sea of Thieves related',
		allPosts: 'Toate articolele',
		home: 'Acasă Sea of Thieves Cheats',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'Sea of Thieves Cheats Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'Sea of Thieves Cheats blogg med undetected ESP, wallhack, radar och Aimbot guider för Sea of Thieves på PC.',
		blogH1: 'Sea of Thieves Cheats Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected sea of thieves cheats, ESP wallhack, radar hack, Aimbot och EAC på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade Sea of Thieves guider',
		allPosts: 'Alla inlägg',
		home: 'Sea of Thieves Cheats hem',
		language: 'Språk',
	},
};
