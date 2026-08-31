import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';
import { FOCUS_I18N } from './focus-i18n.mjs';
import { LEGAL_I18N } from './legal-i18n.mjs';

/** Page-specific translated meta for home across locales. */
export const PAGE_META_HOME = {
	es: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Sea of Thieves indetectables para Sea of Thieves en PC. ESP wallhack, radar hack y Aimbot con mantenimiento EAC. Entrega digital instantánea.', h1: 'cheats indetectables para Sea of Thieves', intro: 'Paquete undetected para Sea of Thieves en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento EAC tras cada parche.', imageAlt: 'Sea of Thieves ESP — etiquetas de jugador hack', gallery: 'Galería Sea of Thieves Cheats — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Sea of Thieves Cheats en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y Quick Match sessions.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Sea of Thieves indétectables pour Sea of Thieves sur PC. ESP wallhack, radar hack et Aimbot avec maintenance EAC. Livraison numérique instantanée.', h1: 'triches indétectables pour Sea of Thieves', intro: 'Pack undetected pour Sea of Thieves sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance EAC après chaque patch.', imageAlt: 'Sea of Thieves ESP — tags joueur hack', gallery: 'Galerie Sea of Thieves Cheats — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Sea of Thieves Cheats en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les équipes ennemies en BR et Quick Match sessions.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Sea of Thieves Cheats für Sea of Thieves auf PC. ESP Wallhack, Radar Hack und Aimbot mit EAC-Wartung. Sofortige digitale Lieferung.', h1: 'undetected Cheats für Sea of Thieves', intro: 'Undetected Windows PC Paket für Sea of Thieves: ESP Wallhack, Radar und Aimbot mit EAC-Wartung nach jedem Patch.', imageAlt: 'Sea of Thieves ESP — Spieler-Tags Hack', gallery: 'Sea of Thieves Cheats Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Sea of Thieves Cheats 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und Quick Match sessions zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Sea of Thieves indetectáveis para Sea of Thieves no PC. ESP wallhack, radar hack e Aimbot com manutenção EAC. Entrega digital instantánea.', h1: 'cheats indetectáveis para Sea of Thieves', intro: 'Pacote undetected para Sea of Thieves no Windows PC: ESP wallhack, radar e Aimbot com manutenção EAC após cada patch.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galeria Sea of Thieves Cheats — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Sea of Thieves Cheats em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler equipes inimigos em BR e Quick Match sessions.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Sea of Thieves indetectable per Sea of Thieves su PC. ESP wallhack, radar hack e Aimbot con manutenzione EAC. Consegna digitale istantanea.', h1: 'cheat indetectable per Sea of Thieves', intro: 'Pacchetto undetected per Sea of Thieves su PC Windows: ESP wallhack, radar e Aimbot con manutenzione EAC dopo ogni patch.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galleria Sea of Thieves Cheats — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Sea of Thieves Cheats nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e Quick Match sessions.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected sea of thieves cheats voor Sea of Thieves op PC. ESP wallhack, radar hack en Aimbot met EAC-onderhoud. Directe digitale levering.', h1: 'undetected cheats voor Sea of Thieves', intro: 'Undetected Windows PC pakket voor Sea of Thieves: ESP wallhack, radar en Aimbot met EAC-onderhoud na elke patch.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Sea of Thieves Cheats galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Sea of Thieves Cheats in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en Quick Match sessions.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Sea of Thieves dla Sea of Thieves na PC. ESP wallhack, radar hack i Aimbot z konserwacją EAC. Natychmiastowa dostawa cyfrowa.', h1: 'undetected cheaty dla Sea of Thieves', intro: 'Pakiet undetected dla Sea of Thieves na Windows PC: ESP wallhack, radar i Aimbot z konserwacją EAC po każdym patchu.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galeria Sea of Thieves Cheats — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Sea of Thieves Cheats w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i Quick Match sessions.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Sea of Thieves для Sea of Thieves на PC. ESP wallhack, radar hack и Aimbot с обслуживанием EAC. Мгновенная цифровая доставка.', h1: 'undetected читы для Sea of Thieves', intro: 'Undetected пакет для Sea of Thieves на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием EAC после патчей.', imageAlt: 'Sea of Thieves ESP — теги игроков hack', gallery: 'Галерея Sea of Thieves Cheats — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Sea of Thieves Cheats в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и Quick Match sessions.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack ve Aimbot', desc: 'Sea of Thieves için undetected hileler. ESP wallhack, radar hack ve Aimbot — EAC bakımı. Anında dijital teslimat.', h1: 'Sea of Thieves için undetected hileler', intro: 'Sea of Thieves Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — EAC bakımı dahil.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Sea of Thieves Cheats galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Sea of Thieves Cheats', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve Quick Match sessions\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Sea of Thieves Cheats 2026 | ESP وWallhack وAimbot', desc: 'غش Sea of Thieves undetected لـ Sea of Thieves على PC. ESP wallhack ورadar hack وAimbot مع صيانة EAC. تسليم رقمي فوري.', h1: 'غش غير مكتشف لـ Sea of Thieves', intro: 'حزمة undetected لـ Sea of Thieves على Windows PC: ESP wallhack ورadar وAimbot مع صيانة EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'معرض Sea of Thieves Cheats — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Sea of Thieves Cheats في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وQuick Match sessions.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Sea of Thieves Cheats 2026 | ESP・Wallhack・Aimbot', desc: 'Sea of Thieves向けundetectedチート。ESP wallhack、radar hack、Aimbot、EACメンテナンス。即時デジタル配信。', h1: 'Sea of Thieves向けundetectedチート', intro: 'Sea of Thieves Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、EACメンテナンス付き。', imageAlt: 'sea of thieves cheats player ESP aimbot wallhack', gallery: 'Sea of Thieves Cheatsギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にSea of Thieves Cheatsを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとQuick Match sessionsで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack, Aimbot', desc: 'Sea of Thieves undetected 치트. ESP wallhack, radar hack, Aimbot, EAC 유지보수. 즉시 디지털 배송.', h1: 'Sea of Thieves용 undetected 치트', intro: 'Sea of Thieves Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, EAC 유지보수 포함.', imageAlt: 'sea of thieves cheats player ESP aimbot wallhack', gallery: 'Sea of Thieves Cheats 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Sea of Thieves Cheats를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 Quick Match sessions에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Sea of Thieves Cheats 2026 | ESP、Wallhack、Aimbot', desc: 'Sea of Thieves undetected作弊。ESP wallhack、radar hack、Aimbot、EAC维护。即时数字交付。', h1: 'Sea of Thieves的undetected外挂', intro: 'Sea of Thieves Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含EAC维护。', imageAlt: 'sea of thieves cheats player ESP aimbot wallhack', gallery: 'Sea of Thieves Cheats图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Sea of Thieves Cheats的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和Quick Match sessions中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack और Aimbot', desc: 'Sea of Thieves undetected hacks. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.', h1: 'Sea of Thieves ke liye undetected cheats', intro: 'Sea of Thieves Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.', imageAlt: 'sea of thieves cheats player ESP aimbot wallhack', gallery: 'Sea of Thieves Cheats gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Sea of Thieves Cheats क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और Quick Match sessions में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Sea of Thieves undetected untuk Sea of Thieves di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan EAC. Pengiriman digital instan.', h1: 'cheat undetected untuk Sea of Thieves', intro: 'Paket undetected Sea of Thieves di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galeri Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Sea of Thieves Cheats di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan Quick Match sessions.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Sea of Thieves undetected สำหรับ Sea of Thieves บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.', h1: 'cheat undetected สำหรับ Sea of Thieves', intro: 'แพ็ก undetected สำหรับ Sea of Thieves บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'แกลเลอรี Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Sea of Thieves Cheats ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ Quick Match sessions', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Sea of Thieves undetected cho Sea of Thieves trên PC. ESP wallhack, radar hack, Aimbot, bảo trì EAC. Giao hàng kỹ thuật số tức thì.', h1: 'cheat undetected cho Sea of Thieves', intro: 'Gói undetected Sea of Thieves trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Thư viện Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Sea of Thieves Cheats 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và Quick Match sessions.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Sea of Thieves для Sea of Thieves на PC. ESP wallhack, radar hack, Aimbot, обслуговування EAC. Мгновенная цифровая доставка.', h1: 'undetected чіти для Sea of Thieves', intro: 'Undetected пакет для Sea of Thieves на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Галерея Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Sea of Thieves Cheats у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і Quick Match sessions.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected sea of thieves cheaty pro Sea of Thieves na PC. ESP wallhack, radar hack, Aimbot, údržba EAC. Okamžité digitální doručení.', h1: 'undetected cheaty pro Sea of Thieves', intro: 'Undetected balíček pro Sea of Thieves na Windows PC: ESP wallhack, radar, Aimbot s údržbou EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galerie Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Sea of Thieves Cheats v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a Quick Match sessions.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Sea of Thieves undetected pentru Sea of Thieves pe PC. ESP wallhack, radar hack, Aimbot, mentenanță EAC. Livrare digitală instantă.', h1: 'cheat-uri undetected pentru Sea of Thieves', intro: 'Pachet undetected Sea of Thieves pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță EAC.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Galerie Sea of Thieves Cheats — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Sea of Thieves Cheats în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și Quick Match sessions.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Sea of Thieves Cheats 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected sea of thieves cheats för Sea of Thieves på PC. ESP wallhack, radar hack, Aimbot, EAC-underhåll. Omedelbar digital leverans.', h1: 'undetected cheats för Sea of Thieves', intro: 'Undetected paket för Sea of Thieves på Windows PC: ESP wallhack, radar, Aimbot med EAC-underhåll.', imageAlt: 'Sea of Thieves ESP player tags hack', gallery: 'Sea of Thieves Cheats galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Sea of Thieves Cheats 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och Quick Match sessions.', topicB: 'En licens istället för separata verktyg.' },
};

export function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for pirate H1/subtitle. */
export const PAGE_META_TAILS = {
	'sea-of-thieves-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, ship and player markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'sea-of-thieves-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Live Status Log', focus: 'EAC patch status and rebuild notes', altKeyword: 'updates EAC maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and EAC questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'EAC Safe Status', focus: 'undetected maintenance after EAC patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how EAC updates are handled for Sea of Thieves cheats', altKeyword: 'EAC bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 sea of thieves cheats checklist before checkout', altKeyword: 'hacks 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'Sea of Thieves Cheats pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying sea of thieves cheats', altKeyword: 'best hacks ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Sea of Thieves', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all items ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
export const SUFFIX_I18N = {
	es: {
		'sea-of-thieves-esp': 'Cajas de jugador y wallhack',
		'sea-of-thieves-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro de estado',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'sea-of-thieves-esp': 'Boîtes joueur et wallhack',
		'sea-of-thieves-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal de statut',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'sea-of-thieves-esp': 'Spielerboxen & Wallhack',
		'sea-of-thieves-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Wartungsprotokoll',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'sea-of-thieves-esp': 'Caixas de jogador e wallhack',
		'sea-of-thieves-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro de estado',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'sea-of-thieves-esp': 'Box giocatore e wallhack',
		'sea-of-thieves-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'sea-of-thieves-esp': 'Боксы игроков и wallhack',
		'sea-of-thieves-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал обновлений',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Sea of Thieves Cheats', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const focus = FOCUS_I18N[locale]?.[pageKey] ?? meta.focus;
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(
				`${topicName} for Sea of Thieves ranked & Arena on Windows PC — ${focus}. ${p.delivery}. ${p.undetected}. Official sea of thieves cheats at seaofthievescheats.com.`,
			),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Sea of Thieves Cheats screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

export const TOPIC_NAMES = {
	'sea-of-thieves-esp': { en: 'Sea of Thieves ESP', es: 'ESP Sea of Thieves', fr: 'ESP Sea of Thieves', de: 'Sea of Thieves ESP', pt: 'ESP Sea of Thieves', it: 'ESP Sea of Thieves', nl: 'Sea of Thieves ESP', pl: 'ESP Sea of Thieves', ru: 'ESP Sea of Thieves', tr: 'Sea of Thieves ESP', ar: 'ESP Sea of Thieves', ja: 'Sea of Thieves ESP', ko: 'Sea of Thieves ESP', zh: 'Sea of Thieves ESP', hi: 'Sea of Thieves ESP', id: 'ESP Sea of Thieves', th: 'Sea of Thieves ESP', vi: 'ESP Sea of Thieves', uk: 'ESP Sea of Thieves', cs: 'Sea of Thieves ESP', ro: 'ESP Sea of Thieves', sv: 'Sea of Thieves ESP' },
	'sea-of-thieves-aimbot': { en: 'Sea of Thieves Aimbot', es: 'Aimbot Sea of Thieves', fr: 'Aimbot Sea of Thieves', de: 'Sea of Thieves Aimbot', pt: 'Aimbot Sea of Thieves', it: 'Aimbot Sea of Thieves', nl: 'Sea of Thieves Aimbot', pl: 'Aimbot Sea of Thieves', ru: 'Aimbot Sea of Thieves', tr: 'Sea of Thieves Aimbot', ar: 'Aimbot Sea of Thieves', ja: 'Sea of Thieves Aimbot', ko: 'Sea of Thieves Aimbot', zh: 'Sea of Thieves Aimbot', hi: 'Sea of Thieves Aimbot', id: 'Aimbot Sea of Thieves', th: 'Sea of Thieves Aimbot', vi: 'Aimbot Sea of Thieves', uk: 'Aimbot Sea of Thieves', cs: 'Sea of Thieves Aimbot', ro: 'Aimbot Sea of Thieves', sv: 'Sea of Thieves Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Sea of Thieves Wallhack', es: 'Sea of Thieves Wallhack', fr: 'Sea of Thieves Wallhack', de: 'Sea of Thieves Wallhack', pt: 'Sea of Thieves Wallhack', it: 'Sea of Thieves Wallhack', nl: 'Sea of Thieves Wallhack', pl: 'Sea of Thieves Wallhack', ru: 'Sea of Thieves Wallhack', tr: 'Sea of Thieves Wallhack', ar: 'Sea of Thieves Wallhack', ja: 'Sea of Thieves Wallhack', ko: 'Sea of Thieves Wallhack', zh: 'Sea of Thieves Wallhack', hi: 'Sea of Thieves Wallhack', id: 'Sea of Thieves Wallhack', th: 'Sea of Thieves Wallhack', vi: 'Sea of Thieves Wallhack', uk: 'Sea of Thieves Wallhack', cs: 'Sea of Thieves Wallhack', ro: 'Sea of Thieves Wallhack', sv: 'Sea of Thieves Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'EAC Bypass', es: 'Bypass EAC', fr: 'Bypass EAC', de: 'EAC Bypass', pt: 'Bypass EAC', it: 'Bypass EAC', nl: 'EAC Bypass', pl: 'Bypass EAC', ru: 'Bypass EAC', tr: 'EAC bypass', ar: 'Bypass EAC', ja: 'EAC Bypass', ko: 'EAC Bypass', zh: 'EAC Bypass', hi: 'EAC Bypass', id: 'Bypass EAC', th: 'EAC Bypass', vi: 'Bypass EAC', uk: 'Bypass EAC', cs: 'EAC Bypass', ro: 'Bypass EAC', sv: 'EAC Bypass' },
	'cheats-2026': { en: 'Sea of Thieves Cheats 2026', es: 'Trucos Sea of Thieves 2026', fr: 'Triches Sea of Thieves 2026', de: 'Sea of Thieves Cheats 2026', pt: 'Cheats Sea of Thieves 2026', it: 'Cheat Sea of Thieves 2026', nl: 'Sea of Thieves Cheats 2026', pl: 'Cheaty Sea of Thieves 2026', ru: 'Читы Sea of Thieves 2026', tr: 'Sea of Thieves Hileleri 2026', ar: 'غش Sea of Thieves 2026', ja: 'Sea of Thieves Cheats 2026', ko: 'Sea of Thieves Cheats 2026', zh: 'Sea of Thieves作弊 2026', hi: 'Sea of Thieves Cheats 2026', id: 'Cheat Sea of Thieves 2026', th: 'Sea of Thieves Cheats 2026', vi: 'Cheat Sea of Thieves 2026', uk: 'Чіти Sea of Thieves 2026', cs: 'sea of thieves cheaty 2026', ro: 'Cheats Sea of Thieves 2026', sv: 'Sea of Thieves Cheats 2026' },
	hacks: { en: 'Sea of Thieves Cheats', es: 'Trucos Sea of Thieves', fr: 'Triches Sea of Thieves', de: 'Sea of Thieves Cheats', pt: 'Cheats Sea of Thieves', it: 'Cheat Sea of Thieves', nl: 'Sea of Thieves Cheats', pl: 'Cheaty Sea of Thieves', ru: 'Читы Sea of Thieves', tr: 'Sea of Thieves Hileleri', ar: 'غش Sea of Thieves', ja: 'Sea of Thieves Cheats', ko: 'Sea of Thieves Cheats', zh: 'Sea of Thieves作弊', hi: 'Sea of Thieves Cheats', id: 'Cheat Sea of Thieves', th: 'Sea of Thieves Cheats', vi: 'Cheat Sea of Thieves', uk: 'Чіти Sea of Thieves', cs: 'sea of thieves cheaty', ro: 'Cheats Sea of Thieves', sv: 'Sea of Thieves Cheats' },
	'cheat-download': { en: 'Sea of Thieves Cheat Download', es: 'Descarga Sea of Thieves Cheats', fr: 'Téléchargement Sea of Thieves Cheats', de: 'Sea of Thieves Cheat Download', pt: 'Download Sea of Thieves Cheats', it: 'Download Sea of Thieves Cheats', nl: 'Sea of Thieves Cheat Download', pl: 'Pobieranie Sea of Thieves Cheats', ru: 'Скачать Sea of Thieves Cheats', tr: 'Sea of Thieves Hile İndir', ar: 'تحميل Sea of Thieves Cheats', ja: 'Sea of Thieves Cheat Download', ko: 'Sea of Thieves Cheat Download', zh: 'Sea of Thieves作弊下载', hi: 'Sea of Thieves Cheat Download', id: 'Download Cheat Sea of Thieves', th: 'ดาวน์โหลด Sea of Thieves Cheats', vi: 'Tải Cheat Sea of Thieves', uk: 'Завантаження Sea of Thieves Cheats', cs: 'Stáhnout Sea of Thieves Cheats', ro: 'Descărcare Sea of Thieves Cheats', sv: 'Sea of Thieves Cheat Download' },
	'mod-menu': { en: 'Sea of Thieves Mod Menu', es: 'Menú mod Sea of Thieves', fr: 'Menu mod Sea of Thieves', de: 'Sea of Thieves Mod-Menü', pt: 'Menu mod Sea of Thieves', it: 'Mod menu Sea of Thieves', nl: 'Sea of Thieves Mod Menu', pl: 'Mod menu Sea of Thieves', ru: 'Мод-меню Sea of Thieves', tr: 'Sea of Thieves Mod Menü', ar: 'قائمة مود Sea of Thieves', ja: 'Sea of Thieves Mod Menu', ko: 'Sea of Thieves 모드 메뉴', zh: 'Sea of Thieves修改菜单', hi: 'Sea of Thieves Mod Menu', id: 'Menu mod Sea of Thieves', th: 'เมนูมอด Sea of Thieves', vi: 'Mod menu Sea of Thieves', uk: 'Мод-меню Sea of Thieves', cs: 'Sea of Thieves mod menu', ro: 'Meniu mod Sea of Thieves', sv: 'Sea of Thieves Mod-meny' },
	'soft-aim': { en: 'Sea of Thieves Soft Aim', es: 'Soft aim Sea of Thieves', fr: 'Soft aim Sea of Thieves', de: 'Sea of Thieves Soft Aim', pt: 'Soft aim Sea of Thieves', it: 'Soft aim Sea of Thieves', nl: 'Sea of Thieves Soft Aim', pl: 'Soft aim Sea of Thieves', ru: 'Soft aim Sea of Thieves', tr: 'Sea of Thieves Soft Aim', ar: 'Soft aim Sea of Thieves', ja: 'Sea of Thieves Soft Aim', ko: 'Sea of Thieves Soft Aim', zh: 'Sea of Thieves Soft Aim', hi: 'Sea of Thieves Soft Aim', id: 'Soft aim Sea of Thieves', th: 'Sea of Thieves Soft Aim', vi: 'Soft aim Sea of Thieves', uk: 'Soft aim Sea of Thieves', cs: 'Sea of Thieves Soft Aim', ro: 'Soft aim Sea of Thieves', sv: 'Sea of Thieves Soft Aim' },
	'best-cheats': { en: 'Best Sea of Thieves Cheats', es: 'Mejores trucos Sea of Thieves', fr: 'Meilleures triches Sea of Thieves', de: 'Beste Sea of Thieves Cheats', pt: 'Melhores cheats Sea of Thieves', it: 'Migliori cheat Sea of Thieves', nl: 'Beste Sea of Thieves Cheats', pl: 'Najlepsze cheaty Sea of Thieves', ru: 'Лучшие читы Sea of Thieves', tr: 'En İyi Sea of Thieves Hileleri', ar: 'أفضل غش Sea of Thieves', ja: '最強Sea of Thievesチート', ko: '최고의 Sea of Thieves 치트', zh: '最佳Sea of Thieves作弊', hi: 'सर्वश्रेष्ठ Sea of Thieves Cheats', id: 'Cheat Sea of Thieves terbaik', th: 'Cheat Sea of Thieves ที่ดีที่สุด', vi: 'Cheat Sea of Thieves tốt nhất', uk: 'Найкращі чіти Sea of Thieves', cs: 'Nejlepší sea of thieves cheaty', ro: 'Cele mai bune cheats Sea of Thieves', sv: 'Bästa Sea of Thieves Cheats' },
	'aimbot-hack': { en: 'Sea of Thieves Aimbot Hack', es: 'Hack aimbot Sea of Thieves', fr: 'Hack aimbot Sea of Thieves', de: 'Sea of Thieves Aimbot Hack', pt: 'Hack aimbot Sea of Thieves', it: 'Hack aimbot Sea of Thieves', nl: 'Sea of Thieves Aimbot Hack', pl: 'Hack aimbot Sea of Thieves', ru: 'Хак aimbot Sea of Thieves', tr: 'Sea of Thieves Aimbot Hilesi', ar: 'هاك Aimbot Sea of Thieves', ja: 'Sea of Thieves Aimbot Hack', ko: 'Sea of Thieves 에임봇 핵', zh: 'Sea of Thieves自瞄外挂', hi: 'Sea of Thieves Aimbot Hack', id: 'Hack aimbot Sea of Thieves', th: 'Hack Aimbot Sea of Thieves', vi: 'Hack aimbot Sea of Thieves', uk: 'Хак aimbot Sea of Thieves', cs: 'Sea of Thieves Aimbot hack', ro: 'Hack aimbot Sea of Thieves', sv: 'Sea of Thieves Aimbot Hack' },
	'esp-hack': { en: 'Sea of Thieves ESP Hack', es: 'Hack ESP Sea of Thieves', fr: 'Hack ESP Sea of Thieves', de: 'Sea of Thieves ESP Hack', pt: 'Hack ESP Sea of Thieves', it: 'Hack ESP Sea of Thieves', nl: 'Sea of Thieves ESP Hack', pl: 'Hack ESP Sea of Thieves', ru: 'Хак ESP Sea of Thieves', tr: 'Sea of Thieves ESP Hilesi', ar: 'هاك ESP Sea of Thieves', ja: 'Sea of Thieves ESP Hack', ko: 'Sea of Thieves ESP 핵', zh: 'Sea of Thieves ESP外挂', hi: 'Sea of Thieves ESP Hack', id: 'Hack ESP Sea of Thieves', th: 'Hack ESP Sea of Thieves', vi: 'Hack ESP Sea of Thieves', uk: 'Хак ESP Sea of Thieves', cs: 'Sea of Thieves ESP hack', ro: 'Hack ESP Sea of Thieves', sv: 'Sea of Thieves ESP Hack' },
	'unlock-all': { en: 'Sea of Thieves Unlock All', es: 'Unlock all Sea of Thieves', fr: 'Unlock all Sea of Thieves', de: 'Sea of Thieves Unlock All', pt: 'Unlock all Sea of Thieves', it: 'Unlock all Sea of Thieves', nl: 'Sea of Thieves Unlock All', pl: 'Unlock all Sea of Thieves', ru: 'Unlock all Sea of Thieves', tr: 'Sea of Thieves Unlock All', ar: 'Unlock all Sea of Thieves', ja: 'Sea of Thieves Unlock All', ko: 'Sea of Thieves Unlock All', zh: 'Sea of Thieves Unlock All', hi: 'Sea of Thieves Unlock All', id: 'Unlock all Sea of Thieves', th: 'Sea of Thieves Unlock All', vi: 'Unlock all Sea of Thieves', uk: 'Unlock all Sea of Thieves', cs: 'Sea of Thieves Unlock All', ro: 'Unlock all Sea of Thieves', sv: 'Sea of Thieves Unlock All' },
};

export const CTA2_HREF = {
	'sea-of-thieves-esp': '/sea-of-thieves-cheats/',
	'sea-of-thieves-aimbot': '/sea-of-thieves-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/sea-of-thieves-cheats/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/sea-of-thieves-cheats/',
	wallhack: '/sea-of-thieves-esp/',
	radar: '/sea-of-thieves-esp/',
	eac: '/updates/',
	'cheats-2026': '/sea-of-thieves-cheats/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/sea-of-thieves-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/sea-of-thieves-aimbot/',
	'esp-hack': '/sea-of-thieves-esp/',
	'unlock-all': '/features/',
};

export function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	const L = LEGAL_I18N[locale];
	const pageCopy = L?.[kind] ?? {};
	const h2 = pageCopy.h2 ?? ['Information we collect', 'How we use data', 'Your rights'];
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Sea of Thieves Cheats`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} ${L?.descFor ?? 'for Sea of Thieves Cheats — ESP wallhack, Aimbot'}, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} ${L?.introTopic ?? 'for seaofthievescheats.com and Sea of Thieves licenses.'}`),
		imageAlt: 'Sea of Thieves Cheats',
		galleryTitle: 'Sea of Thieves Cheats',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: L?.emailSupport ?? 'Email support',
		ctaSecondary:
			kind === 'privacy'
				? L?.readTerms ?? 'Read terms'
				: L?.readPrivacy ?? 'Read privacy',
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				h2[0],
				p.s1(L?.sec1p1 ?? 'Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy'
					? L?.privacy?.sec1p2 ?? 'Payment details are processed by Zadeyo checkout — not stored on seaofthievescheats.com.'
					: p.s2(),
			),
			section(
				h2[1],
				p.s1(L?.privacy?.sec2p1 ?? 'Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms'
					? L?.terms?.sec2p2 ?? 'Using cheats may violate Rare terms — you assume all ban risk.'
					: p.s3(),
			),
			section(h2[2], p.legal(), `${L?.emailLabel ?? 'Email:'} support@seaofthievescheats.com`),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
