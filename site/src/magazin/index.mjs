/**
 * Magazin (DE /magazin/, EN /en/magazine/): the list of articles, newest first.
 *
 * How to add an article
 * 1. Copy one of the files in this folder (e.g. abends-am-laptop.mjs) and give it a new `id` and two slugs.
 *    The slugs become the URLs: /magazin/<slug.de>/ and /en/magazine/<slug.en>/.
 * 2. Fill `de` and `en` with the same structure: title (≤ 70 characters if possible), desc (≤ 200), kicker, answer
 *    (one to three sentences that answer the question on their own, for search and AI answers), sections (h + p[] and
 *    optional list [[bold, text]]), qa (optional, becomes FAQPage JSON-LD), sources ([label, url]) and related keys.
 * 3. Links inside the text: write href="@key" with a key from ROUTES (site/src/config.mjs), e.g. "@nachweis",
 *    "@rechner" or another article as "@mag-<id>". The renderer (site/src/pages/magazin.mjs) turns them into the right
 *    path for the language; the build fails on broken links.
 * 4. Import the file here and put it into ARTICLES. Routes, nav, sitemap, llms.txt and hreflang follow automatically.
 * 5. Rules: German first (du, plain, warm, "Sache" never "Ding"), English second; fictional people only (Mira, Mika, Sam,
 *    Ben, Familie Berg); every number with a source you opened yourself; no legal advice wording (no "Verstoß", no
 *    "du hast Anspruch"); dates as ISO in `published` / `modified`; `checked` is the date the sources were opened.
 *    Add a line under "Unreleased" in CHANGELOG.md.
 *
 * Data files import nothing from config.mjs (config imports this file for the routes).
 */
import unbezahlt from './unbezahlte-ueberstunden.mjs';
import laptop from './abends-am-laptop.mjs';
import frueher from './frueher-gehen.mjs';
import adhs from './adhs-zeiterfassung.mjs';
import angeordnet from './wer-hat-angeordnet.mjs';
import welt from './arbeiten-weltweit.mjs';

export const ARTICLES = [unbezahlt, laptop, angeordnet, frueher, adhs, welt];

/** Route key of an article in ROUTES. */
export const articleKey = (a) => `mag-${a.id}`;

/** ROUTES entries for the magazine index and every article. */
export const MAG_ROUTES = {
  magazin: { de: '/magazin/', en: '/en/magazine/' },
  ...Object.fromEntries(ARTICLES.map((a) => [articleKey(a), { de: `/magazin/${a.slug.de}/`, en: `/en/magazine/${a.slug.en}/` }])),
};
