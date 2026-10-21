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
 * 4. Import the file here and put it into ALL_ARTICLES. Routes, nav, sitemap, llms.txt and hreflang follow automatically.
 * Scheduled publishing: an article whose `published` date lies after the build date is left out completely (no page,
 *    no list entry, no sitemap/llms.txt entry). Links to it vanish too: related keys are dropped, inline
 *    <a href="@mag-…">text</a> becomes plain text. Never backdate: `published` is the day the article goes live.
 *    The build date is today (UTC) or FV_BUILD_DATE=YYYY-MM-DD for tests, e.g. FV_BUILD_DATE=2027-01-31 node site/build.mjs.
 *    The public site rebuilds every morning (cron in .github/workflows/pages.yml), so an article appears on its date.
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
import zeiterfassung from './zeiterfassung-pflicht.mjs';
import pausen from './pausen-richtig.mjs';
import werkstudium from './werkstudium-20-stunden.mjs';
import teilzeit from './ueberstunden-teilzeit.mjs';
import oesterreich from './oesterreich-ueberstunden.mjs';
import schweiz from './schweiz-ueberzeit.mjs';
import urlaub from './resturlaub-verfall.mjs';
import mindestlohn from './mindestlohn-minijob-2027.mjs';

/** Every article, published or scheduled. Order only matters for equal dates (earlier in the list = shown first). */
export const ALL_ARTICLES = [unbezahlt, laptop, angeordnet, frueher, adhs, welt,
  zeiterfassung, pausen, werkstudium, teilzeit, oesterreich, schweiz, urlaub, mindestlohn];

/** Build date as YYYY-MM-DD: FV_BUILD_DATE if set (tests), otherwise today in UTC. */
function buildDate() {
  const env = (typeof process !== 'undefined' && process.env && process.env.FV_BUILD_DATE) || '';
  if (env) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(env) || Number.isNaN(Date.parse(`${env}T00:00:00Z`))) {
      throw new Error(`FV_BUILD_DATE must be YYYY-MM-DD, got "${env}"`);
    }
    return env;
  }
  return new Date().toISOString().slice(0, 10);
}
export const BUILD_DATE = buildDate();

const ids = new Set();
for (const a of ALL_ARTICLES) {
  if (ids.has(a.id)) throw new Error(`magazin: duplicate id ${a.id}`);
  ids.add(a.id);
  for (const f of ['published', 'modified', 'checked']) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(a[f] || '')) throw new Error(`magazin ${a.id}: ${f} must be YYYY-MM-DD`);
  }
  if (a.modified < a.published) throw new Error(`magazin ${a.id}: modified is before published`);
}

/** Published articles (published <= build date), newest first; equal dates keep the order of ALL_ARTICLES. */
export const ARTICLES = ALL_ARTICLES
  .filter((a) => a.published <= BUILD_DATE)
  .map((a, i) => [a, i])
  .sort(([x, i], [y, j]) => (x.published === y.published ? i - j : x.published < y.published ? 1 : -1))
  .map(([a]) => a);

/** Articles waiting for their date. */
export const SCHEDULED = ALL_ARTICLES.filter((a) => a.published > BUILD_DATE);

/** Route key of an article in ROUTES. */
export const articleKey = (a) => `mag-${a.id}`;

/** Route keys of scheduled articles: links to them are dropped instead of breaking the build. */
export const SCHEDULED_KEYS = new Set(SCHEDULED.map(articleKey));

/** ROUTES entries for the magazine index and every published article. */
export const MAG_ROUTES = {
  magazin: { de: '/magazin/', en: '/en/magazine/' },
  ...Object.fromEntries(ARTICLES.map((a) => [articleKey(a), { de: `/magazin/${a.slug.de}/`, en: `/en/magazine/${a.slug.en}/` }])),
};
