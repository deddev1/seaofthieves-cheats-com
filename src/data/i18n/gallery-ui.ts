import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves Cheats gallery',
		subtitle: 'Simple sea of thieves cheats visuals — ESP, wallhack, aimbot, and radar for Sea of Thieves on PC.',
		lead: 'Sea of Thieves Cheats helps you spot players, agents, abilities, and bomb sites with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'sea of thieves cheats esp', copy: 'See players through walls with sea of thieves cheats esp and wallhack overlays.' },
			{ title: 'sea of thieves cheats radar', copy: 'Track nearby threats with sea of thieves cheats radar before you push or rotate.' },
			{ title: 'sea of thieves cheats aimbot', copy: 'Use soft aim and aimbot controls tuned for Sea of Thieves matches on Windows PC.' },
		],
		updatesLabel: 'sea of thieves cheats updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galería Sea of Thieves',
		subtitle: 'Visuales de Sea of Thieves con loadouts, peleas de equipo y combate match — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Sea of Thieves Cheats está pensado para el loop competitivo de Sea of Thieves: leer el mapa, rastrear escuadrones enemigos, lootear y ganar rondas.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de equipo en mapas y sailing routes para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Sea of Thieves', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galerie Sea of Thieves',
		subtitle: 'Visuels Sea of Thieves — loadouts, combats d\'équipe et match — avec ESP, radar et Aimbot.',
		lead: 'Sea of Thieves Cheats suit la boucle competitivo de Sea of Thieves : lire la carte, suivre les équipes, loot et gagner les rounds.',
		highlights: [
			{ title: 'ESP players & équipes', copy: 'Repérez les players ennemis sur cartes et sailing routes pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Sea of Thieves', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves Galerie',
		subtitle: 'Sea of Thieves-Bilder zu Loadouts, Squad-Kämpfen und match — mit ESP, Radar und Aimbot.',
		lead: 'Sea of Thieves Cheats passt zur Raid-Schleife von Sea of Thieves: Karte lesen, Gegner tracken, looten und matches überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Karten und sailing routes für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Sea of Thieves Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Sea of Thieves Cheats Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galeria Sea of Thieves',
		subtitle: 'Visuais de Sea of Thieves com loadouts, combates de esquadrão e match — com ESP, radar e Aimbot.',
		lead: 'Sea of Thieves Cheats segue o loop BR do Sea of Thieves: ler o mapa, rastrear equipes, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e equipes', copy: 'Detecte players inimigos em mappe e sailing routes para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Sea of Thieves', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galleria Sea of Thieves',
		subtitle: 'Immagini Sea of Thieves — loadout, scontri di squadra e match — con ESP, radar e Aimbot.',
		lead: 'Sea of Thieves Cheats è pensato per il loop BR di Sea of Thieves: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su mappe e sailing routes per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Sea of Thieves', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves galerij',
		subtitle: 'Sea of Thieves-beelden van loadouts, squadgevechten en match — met ESP, radar en Aimbot.',
		lead: 'Sea of Thieves Cheats volgt de match-loop va Sea of Thieves: kaart lezen, vijandelijke squads volgen, jagen en island zones overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op mappe en sailing routes voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Sea of Thieves Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Sea of Thieves Cheats updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galeria Sea of Thieves',
		subtitle: 'Grafiki Sea of Thieves — loadouty, walki drużynowe i match — z ESP, radar i Aimbot.',
		lead: 'Sea of Thieves Cheats pasuje do pętli BR Sea of Thieves: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na mapy i sailing routes dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Sea of Thieves', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Галерея Sea of Thieves',
		subtitle: 'Визуалы Sea of Thieves — лоадауты, бои отрядов и match — с ESP, радаром и Aimbot.',
		lead: 'Sea of Thieves Cheats создан для рейд-циклу Sea of Thieves: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на карты и sailing routes для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Sea of Thieves', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves galerisi',
		subtitle: 'Loadout, takım savaşları ve match görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Sea of Thieves Cheats, Sea of Thieves BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'haritalar ve sailing routes\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Sea of Thieves Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Sea of Thieves Cheats güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'معرض Sea of Thieves',
		subtitle: 'صور Sea of Thieves — loadouts ومعارك الفرق وsession — مع ESP ورادار وAimbot.',
		lead: 'Sea of Thieves Cheats مبني لحلقة BR في Sea of Thieves: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على خرائط وsailing routes لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Sea of Thieves', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのSea of Thievesビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Sea of Thieves CheatsはSea of ThievesのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'マップとsailing routesで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Sea of Thievesエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Sea of Thieves Cheats更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Sea of Thieves 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Sea of Thieves Cheats는 Sea of Thieves survival loop용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: '맵과 sailing routes에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Sea of Thieves 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Sea of Thieves Cheats 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves 图库',
		subtitle: 'Sea of Thieves 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Sea of Thieves Cheats 为 Sea of Thieves match loop设计：读图、追踪敌方小队、搜刮并在 base survival。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 地图和 sailing routes 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Sea of Thieves 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Sea of Thieves Cheats 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves गैलरी',
		subtitle: 'Loadout, team fights और match visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Sea of Thieves Cheats Sea of Thieves match loop के लिए: map पढ़ें, enemy squads track करें, loot करें और base survival करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'मैप और sailing routes पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Sea of Thieves Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Sea of Thieves Cheats updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galeri Sea of Thieves',
		subtitle: 'Visual Sea of Thieves — loadout, pertempuran squad, dan match — dengan ESP, radar, dan Aimbot.',
		lead: 'Sea of Thieves Cheats untuk loop BR Sea of Thieves: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di peta dan sailing routes untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Sea of Thieves', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'แกลเลอรี Sea of Thieves',
		subtitle: 'ภาพ Sea of Thieves — loadout การต่อสู้ทีม และ match — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Sea of Thieves Cheats สำหรับลูป BR ของ Sea of Thieves: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน แผนที่และ sailing routes เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Sea of Thieves', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Thư viện Sea of Thieves',
		subtitle: 'Hình ảnh Sea of Thieves — loadout, chiến đấu squad và match — với ESP, radar và Aimbot.',
		lead: 'Sea of Thieves Cheats cho vòng BR Sea of Thieves: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên bản đồ và sailing routes để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Sea of Thieves', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Галерея Sea of Thieves',
		subtitle: 'Візуали Sea of Thieves — loadout, бої загонів і match — з ESP, радаром і Aimbot.',
		lead: 'Sea of Thieves Cheats для рейд-циклу Sea of Thieves: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Map і sailing routes для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Sea of Thieves', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galerie Sea of Thieves',
		subtitle: 'Sea of Thieves vizuály — loadouty, squad souboje a match — s ESP, radarem a Aimbot.',
		lead: 'Sea of Thieves Cheats pro BR smyčku Sea of Thieves: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na mapy a sailing routes pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Sea of Thieves', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Galerie Sea of Thieves',
		subtitle: 'Vizualuri Sea of Thieves — loadout, lupte de squad și match — cu ESP, radar și Aimbot.',
		lead: 'Sea of Thieves Cheats pentru bucla BR Sea of Thieves: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Map și sailing routes pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Sea of Thieves', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Sea of Thieves Cheats',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves galleri',
		subtitle: 'Sea of Thieves-bilder — loadouts, squadstrider och match — med ESP, radar och Aimbot.',
		lead: 'Sea of Thieves Cheats för Sea of Thieves:s match-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på kartor och sailing routes för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Sea of Thieves Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Sea of Thieves Cheats uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
