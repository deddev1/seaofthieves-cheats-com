#!/usr/bin/env node
/**
 * Generates public/locales/{locale}/translation.json for all 22 locales.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LOCALES } from './i18n-data/constants.mjs';
import { allUiStrings } from './i18n-data/ui-strings.mjs';
import { buildLocaleOverlay } from './i18n-data/locale-overlays.mjs';
import { FAQ_I18N } from './i18n-data/faq-i18n.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const EN_FILE = path.join(ROOT, 'public', 'locales', 'en', 'translation.json');
const ES_FILE = path.join(ROOT, 'public', 'locales', 'es', 'translation.json');

function deepMerge(base, overlay) {
	const out = structuredClone(base);
	for (const [key, value] of Object.entries(overlay)) {
		if (value && typeof value === 'object' && !Array.isArray(value)) {
			out[key] = deepMerge(out[key] ?? {}, value);
		} else if (value !== undefined) {
			out[key] = value;
		}
	}
	return out;
}

function flattenExternalResources(ext) {
	if (!ext) return {};
	const { title, lede, pillsTitle, pillsLabel, steam, patch, official, wiki, community, ...rest } = ext;
	return {
		title,
		lede,
		pillsTitle,
		pillsLabel,
		steam,
		patch,
		official,
		wiki,
		community,
		...rest,
	};
}

function buildFaqOverlay(locale, enFaq) {
	const map = FAQ_I18N[locale];
	if (!map) return {};
	return { items: map };
}

/** English FAQ seed for translation.json */
const EN_FAQ_ITEMS = {
	'what-are-sea-of-thieves-cheats': {
		q: 'What is Sea of Thieves Cheats?',
		a: 'Sea of Thieves Cheats is an undetected sea of thieves cheats package for Sea of Thieves on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with EAC maintenance and setup support.',
	},
	'are-sea-of-thieves-cheats-undetected-in-2026': {
		q: 'Are sea of thieves cheats undetected in 2026?',
		a: 'Sea of Thieves Cheats is maintained for Sea of Thieves with rebuilds after EAC and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
	},
	'solo-farmer-and-raider-sessions': {
		q: 'Does this work in voyages, PvP sessions and ranked matches?',
		a: 'Yes. ESP, radar, and aimbot are built for Sea of Thieves match flow — reading enemy pirates, tracking loot and soul jades, and staying aware near POIs and island zones in Quick Match and Ranked.',
	},
	'esp-wallhack-radar-or-aimbot': {
		q: 'What is included — ESP, wallhack, radar, or Aimbot?',
		a: 'Sea of Thieves Cheats bundles ESP wallhack, ship and player markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
	},
	'how-are-licenses-delivered': {
		q: 'How are licenses delivered?',
		a: 'After payment is confirmed, Sea of Thieves Cheats license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
	},
	'where-to-check-updates': {
		q: 'Where do I check updates after a Sea of Thieves or EAC patch?',
		a: 'Maintenance notes are posted on the Status page when a Sea of Thieves or EAC update affects the package. That is the fastest place to confirm whether a new Sea of Thieves Cheats build is live.',
	},
	'how-to-contact-support': {
		q: 'How do I contact support?',
		a: 'Use the Support page or email support@seaofthievescheats.com. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
	},
	'what-is-a-sea-of-thieves-wallhack': {
		q: 'What is a Sea of Thieves wallhack?',
		a: 'A Sea of Thieves wallhack is an ESP overlay that shows enemy pirates through terrain. Sea of Thieves Cheats includes distance readouts, grapple and ult cues, and toggleable categories.',
	},
	'does-sea-of-thieves-cheats-include-radar-hack': {
		q: 'Does Sea of Thieves Cheats include a radar hack?',
		a: 'Yes. Sea of Thieves Cheats includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and island zones.',
	},
	'eac-anti-cheat-and-sea-of-thieves-cheats': {
		q: 'How does EAC affect sea of thieves cheats?',
		a: 'EAC monitors Sea of Thieves on Windows PC. Sea of Thieves Cheats posts maintenance notes after patches that may need a rebuild. Check Status before you queue.',
	},
	'buy-undetected-sea-of-thieves-cheats-windows-pc': {
		q: 'Can I buy undetected Sea of Thieves cheats for Windows PC?',
		a: 'Yes — Sea of Thieves Cheats sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
	},
	'how-much-do-sea-of-thieves-cheats-cost': {
		q: 'How much do sea of thieves cheats cost in 2026?',
		a: 'Sea of Thieves Cheats is $35 per month or $150 lifetime USD on Windows PC. Both plans include ESP wallhack, 2D radar, soft aim, and EAC maintenance rebuilds. See Pricing for the latest plan details before checkout.',
	},
	'what-is-sea-of-thieves-esp-hack': {
		q: 'What is a Sea of Thieves ESP hack?',
		a: 'A Sea of Thieves ESP hack is a visibility overlay that shows enemy pirates, weapons, and loot through walls. Sea of Thieves Cheats ESP includes player boxes, distance tags, grapple and ult cues, and toggleable categories for Quick Match and Ranked.',
	},
	'what-is-sea-of-thieves-aimbot-hack': {
		q: 'What is a Sea of Thieves aimbot hack?',
		a: 'A Sea of Thieves aimbot hack provides aim assist with configurable FOV, smoothing, and bone priority. Sea of Thieves Cheats uses soft aim profiles designed to feel natural in team fights and duels — tune settings in the mod menu before Ranked queues.',
	},
	'how-to-install-sea-of-thieves-cheats': {
		q: 'How do I install sea of thieves cheats on Windows PC?',
		a: 'After checkout, follow the Setup guide: download the loader, disable conflicting overlays, launch Sea of Thieves Cheats, and enable ESP, radar, or aimbot toggles in the mod menu. Most buyers finish first launch in under 15 minutes. Email support@seaofthievescheats.com if activation fails.',
	},
	'best-sea-of-thieves-cheats-in-2026': {
		q: 'What are the best sea of thieves cheats in 2026?',
		a: 'Top sea of thieves cheats in 2026 combine undetected ESP, soft aim, 2D radar, and fast EAC maintenance after patches. Sea of Thieves Cheats bundles all three in one license with status notes, setup support, and monthly or lifetime pricing — compare Features and Reviews before you buy.',
	},
	'monthly-vs-lifetime-sea-of-thieves-cheats': {
		q: 'Should I buy monthly or lifetime sea of thieves cheats?',
		a: 'Choose monthly ($35) if you want a lower entry cost or only play a few seasons. Choose lifetime ($150) if you plan long-term Sea of Thieves play and want one payment for ESP, radar, aimbot, and future maintenance rebuilds. Both plans ship the same feature set.',
	},
	'sea-of-thieves-cheats-windows-11': {
		q: 'Do sea of thieves cheats work on Windows 11?',
		a: 'Yes. Sea of Thieves Cheats supports Windows 10 and Windows 11 on PC. Use a clean install path from the Setup guide, keep EAC status green on the Updates page, and avoid running outdated builds after major patches.',
	},
	'what-is-sea-of-thieves-soft-aim': {
		q: 'What is Sea of Thieves soft aim?',
		a: 'Sea of Thieves soft aim gently guides aim toward targets inside a set FOV instead of snapping instantly. Sea of Thieves Cheats lets you adjust smoothing, bone priority, and per-weapon-type profiles so assist feels controlled in Quick Match and Ranked.',
	},
	'free-sea-of-thieves-cheat-download': {
		q: 'Is there a free Sea of Thieves hack download?',
		a: 'Sea of Thieves Cheats is a paid license — there is no official free download. Avoid random “free sea of thieves cheat” sites; they often ship malware or detected loaders. Compare monthly and lifetime plans on Pricing for legitimate ESP, radar, and aimbot access with support.',
	},
	'sot-eac-bypass': {
		q: 'How does EAC bypass work for sea of thieves cheats?',
		a: 'There is no permanent EAC bypass. Sea of Thieves Cheats is maintained with rebuilds after Sea of Thieves and EAC patches — check the Updates page before you queue. Responsible settings and loading the latest build matter more than any “bypass” claim.',
	},
	'sea-of-thieves-cheats-for-ranked': {
		q: 'Do sea of thieves cheats work in ranked competitive?',
		a: 'Yes. ESP, radar, and soft aim are built for Ranked and Quick Match Sea of Thieves on Windows PC. Use conservative overlay settings, read maintenance notes after patches, and confirm undetected status on the Updates page before competitive queues.',
	},
	'what-is-sea-of-thieves-mod-menu': {
		q: 'What is a Sea of Thieves mod menu?',
		a: 'A Sea of Thieves mod menu is an in-game overlay to toggle ESP wallhack, radar, aimbot, and visual settings without alt-tabbing. Sea of Thieves Cheats ships a lightweight mod menu for Windows PC — see Features for the full toggle list.',
	},
	'external-vs-internal-sea-of-thieves-cheats': {
		q: 'What is the difference between external and internal sea of thieves cheats?',
		a: 'External hacks read game memory from outside the client; internal hooks run inside the process. Sea of Thieves Cheats is built as an external-style package for easier setup on Windows PC, bundling ESP, radar, and soft aim with EAC maintenance after patches.',
	},
	'how-long-sea-of-thieves-cheat-setup-takes': {
		q: 'How long does sea of thieves cheats setup take?',
		a: 'Most buyers finish Sea of Thieves Cheats setup in 10–20 minutes on Windows PC: install the loader, activate the license, and enable ESP or aimbot in the mod menu. If Windows Defender or another AV blocks the loader, follow Setup troubleshooting or email support@seaofthievescheats.com with your order ID.',
	},
	'does-sea-of-thieves-cheats-include-triggerbot': {
		q: 'Does Sea of Thieves Cheats include triggerbot?',
		a: 'Sea of Thieves Cheats focuses on ESP wallhack, 2D radar, and soft aim profiles. Triggerbot is not advertised as a standalone module — review the Features page for the current toggle list before checkout.',
	},
};

FAQ_I18N.en = EN_FAQ_ITEMS;

async function main() {
	const en = JSON.parse(await readFile(EN_FILE, 'utf8'));
	en.faq = { items: EN_FAQ_ITEMS };
	en.media = {
		demoVideoTitle: 'Sea of Thieves Cheats ESP, aimbot and radar demo',
		playVideo: 'Play video',
	};
	const enUi = allUiStrings.en;
	en.pirate = {
		...enUi.hero,
		title: enUi.hero.title,
		priceFrom: en.hero?.priceFrom ?? 'from',
		imageAlt: en.hero?.imageAlt ?? '{{brand}} — Sea of Thieves ESP and aimbot overlay',
		chipEsp: en.hero?.chipEsp ?? 'ESP / wallhack',
		chipAim: en.hero?.chipAim ?? 'Soft aim',
		chipRadar: en.hero?.chipRadar ?? '2D radar',
		chipUpdates: en.hero?.chipUpdates ?? 'Patch updates',
	};
	en.nav = { ...en.nav, ...enUi.nav, preview: enUi.nav.hacks, store: enUi.nav.pricing, status: enUi.nav.updates };
	en.externalResources = {
		title: 'Official game guides & resources',
		lede: 'We link to trusted third-party sources so you can verify patch notes, player stats, and map info outside our site.',
		pillsTitle: 'Official guides',
		pillsLabel: 'Official Sea of Thieves guides',
		steam: { label: 'Sea of Thieves on PC', note: 'Official store page, system requirements, and player reviews.' },
		patch: { label: 'Sea of Thieves patch notes & news', note: 'Read official update posts before you change your loadout.' },
		official: { label: 'Official Sea of Thieves website', note: 'Game overview from Rare.' },
		wiki: { label: 'Sea of Thieves Wiki (Fandom)', note: 'Player stats, maps, and pirate abilities.' },
		community: { label: 'Sea of Thieves community hub', note: 'Announcements and community discussions.' },
	};
	en.internalLinks = {
		relatedLede: 'Explore more Sea of Thieves Cheats guides — the same topics covered on other cheat sites, mapped to our canonical pages.',
		topicsTitle: 'Product guides',
		topicsLabel: 'Product topic guides',
		topicsLede: 'Jump to the main Sea of Thieves Cheats pages for ESP, aimbot, radar, setup, and status.',
		overview: 'Sea of Thieves Cheats overview',
		esp: 'ESP & wallhack',
		aimbot: 'Aimbot & soft aim',
		radar: 'Radar hack',
		features: 'Full feature list',
		pricing: 'Store & pricing',
		setup: 'Setup guide',
		status: 'Live status',
		faq: 'FAQ',
		support: 'Support',
		blog: 'Blog',
		reviews: 'Buyer reviews',
		hacks: 'Sea of Thieves Cheats pillar',
		undetected: 'Undetected status',
	};
	en.images = { ...en.images, ...enUi.images };
	en.gallery = {
		eyebrow: 'Sea of Thieves Cheats',
		title: 'Sea of Thieves Cheats gallery',
		subtitle: 'Sea of Thieves Cheats visuals — ESP, wallhack, aimbot, and radar for Sea of Thieves on PC.',
		lead: 'Sea of Thieves Cheats helps you spot enemy pirates, loot, and high-traffic POIs with ESP, aimbot, and radar in one license.',
		highlightEspTitle: 'Sea of Thieves Cheats ESP',
		highlightEspCopy: 'See enemy pirates through walls with Sea of Thieves Cheats ESP and wallhack overlays.',
		highlightRadarTitle: 'Sea of Thieves Cheats radar',
		highlightRadarCopy: 'Track nearby threats with Sea of Thieves Cheats radar before you push or rotate.',
		highlightAimbotTitle: 'Sea of Thieves Cheats aimbot',
		highlightAimbotCopy: 'Use soft aim and aimbot controls tuned for Sea of Thieves matches on Windows PC.',
		updatesLabel: 'Sea of Thieves Cheats updates',
		updatesShort: 'Updates',
	};
	en.home = {
		...en.home,
		aboutTitle: 'undetected cheats for Sea of Thieves',
		aboutP1:
			'Sea of Thieves Cheats is an undetected sea of thieves cheats package for Sea of Thieves on Windows PC. One license includes ESP wallhack, soft aim, and 2D radar, with EAC rebuilds after game patches. Check Status before you queue.',
		volumeLabel: 'Volume',
		seekLabel: 'Video progress',
		muteVideo: 'Mute video',
		unmuteVideo: 'Unmute video',
	};
	en.homeSeo = {
		...en.homeSeo,
		linkFinalsCheats: 'Sea of Thieves Cheats',
	};
	en.reviews = {
		...(en.reviews ?? {}),
		eyebrow: 'Sea of Thieves Cheats',
		homeTitle: 'Sea of Thieves Cheats reviews',
		subtitle: 'Recent feedback from Sea of Thieves Cheats buyers',
		buyerReviews: '{{count}} Sea of Thieves Cheats buyer reviews',
		averageAria: '{{rating}} average from {{count}} Sea of Thieves Cheats buyer reviews',
		readAll: 'Read all Sea of Thieves Cheats reviews →',
	};
	en.blog = {
		...(en.blog ?? {}),
		blogTitle: 'Sea of Thieves Cheats Blog | Guides & Patch Tips',
		blogDescription:
			'Sea of Thieves guides — sailing and PvP tips, ESP, aimbot notes, sailing routes, and EAC update coverage. English blog at seaofthievescheats.com/blog/.',
		blogH1: 'Sea of Thieves Cheats Intel',
		blogIntro:
			'Actionable Sea of Thieves guides for ranked and Quick Match sessions — meta breakdowns, sailing routes, ship tiers, and pro warmup routines. Pair these tips with our Sea of Thieves Cheats pages for ESP, soft aim, and radar when you need in-match tools.',
	};

	let es;
	try {
		es = JSON.parse(await readFile(ES_FILE, 'utf8'));
		es.faq = { items: FAQ_I18N.es };
		es.home = {
			...(es.home ?? {}),
			aboutTitle: 'cheats indetectables para Sea of Thieves',
		};
	} catch {
		es = en;
	}

	for (const locale of LOCALES) {
		const dir = path.join(ROOT, 'public', 'locales', locale);
		await mkdir(dir, { recursive: true });

		let translation = en;
		if (locale === 'es') {
			translation = deepMerge(en, es);
		} else if (locale !== 'en') {
			const ui = allUiStrings[locale];
			const overlay = buildLocaleOverlay(locale, ui);
			const faqOverlay = buildFaqOverlay(locale);
			translation = deepMerge(en, {
				...overlay,
				externalResources: flattenExternalResources(overlay.externalResources),
				faq: faqOverlay,
			});
		}

		const ui = allUiStrings[locale];
		if (ui?.nav?.hacks) {
			translation.nav = {
				...translation.nav,
				hacks: ui.nav.hacks,
				preview: ui.nav.hacks,
			};
		}

		const out = path.join(dir, 'translation.json');
		await writeFile(out, `${JSON.stringify(translation, null, 2)}\n`, 'utf8');
		console.log('✓', out);
	}

	// Refresh canonical EN with faq/media keys
	await writeFile(EN_FILE, `${JSON.stringify(en, null, 2)}\n`, 'utf8');
	console.log(`Generated ${LOCALES.length} locale translation files.`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
