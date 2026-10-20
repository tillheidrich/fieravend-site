/**
 * Builds the Fieravend website into site/dist. No dependencies, Node 20+.
 *   node site/build.mjs
 *
 * German under /, English under /en/. Pages live in site/src/pages/*.mjs and return { title, desc, body } per
 * language; site/src/layout.mjs wraps them (head, CSP, hreflang, header, footer). Static files come from
 * site/static (copied to /assets, except the root files listed in ROOT_FILES). Paths: site/src/config.mjs (ROUTES).
 *
 * Content and brand: Outline wiki, collection "Fieravend (Arbeitszeit-App)" › Markenkonzept (Website, Design-Tokens,
 * Logo & App-Icon, Sprache & Mikrotexte) and Markt & Geschäftsmodell › Preismodell. Prices are planned, not final.
 * Checks: node site/tools/check-contrast.mjs (also run here), npx html-validate "site/dist/**\/*.html",
 * node site/tools/shots.mjs (screenshots). Deploy: .github/workflows/pages.yml (GitHub Pages).
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { SITE, ROUTES, STAND, MAIL } from './src/config.mjs';
import { shell } from './src/layout.mjs';
import { checkContrast } from './tools/check-contrast.mjs';
import start from './src/pages/start.mjs';
import kleinbetrieb from './src/pages/kleinbetrieb.mjs';
import zweijobs from './src/pages/zweijobs.mjs';
import mytime from './src/pages/mytime.mjs';
import preise from './src/pages/preise.mjs';
import fragen from './src/pages/fragen.mjs';
import rechner from './src/pages/rechner.mjs';
import feierabend from './src/pages/feierabend.mjs';
import nachweis from './src/pages/nachweis.mjs';
import { impressum, datenschutz, notFound } from './src/pages/legal.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(HERE, 'dist');
const STATIC = path.join(HERE, 'static');
const PAGES = { start, kleinbetrieb, zweijobs, mytime, preise, fragen, rechner, feierabend, nachweis, impressum, datenschutz };
/** Files from site/static that belong at the site root instead of /assets. */
const ROOT_FILES = ['favicon.svg', 'favicon-32.png', 'apple-touch-icon.png'];

// ------------------------------------------------------------------ checks first
const bad = checkContrast({ quiet: true });
if (bad.length) {
  console.error('Contrast check failed:\n' + bad.join('\n'));
  process.exit(1);
}

// ------------------------------------------------------------------ clean and copy static files
fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(path.join(DIST, 'assets'), { recursive: true });
const copyDir = (from, to) => {
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    const a = path.join(from, e.name);
    const b = ROOT_FILES.includes(e.name) && from === STATIC ? path.join(DIST, e.name) : path.join(to, e.name);
    if (e.isDirectory()) { fs.mkdirSync(b, { recursive: true }); copyDir(a, b); } else fs.copyFileSync(a, b);
  }
};
copyDir(STATIC, path.join(DIST, 'assets'));
fs.copyFileSync(path.join(HERE, 'CNAME'), path.join(DIST, 'CNAME'));
// GitHub Pages: serve files as they are (no Jekyll)
fs.writeFileSync(path.join(DIST, '.nojekyll'), '');

const cssVersion = crypto.createHash('sha256').update(fs.readFileSync(path.join(STATIC, 'site.css'))).digest('hex').slice(0, 10);

// ------------------------------------------------------------------ pages
const written = [];
const META = [];
const write = (urlPath, html) => {
  const file = urlPath.endsWith('/') ? path.join(DIST, urlPath, 'index.html') : path.join(DIST, urlPath);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  written.push(urlPath);
};

for (const [key, fn] of Object.entries(PAGES)) {
  if (!ROUTES[key]) throw new Error(`no route for page ${key}`);
  for (const lang of ['de', 'en']) {
    const p = fn(lang);
    if (!p.title || !p.desc || !p.body) throw new Error(`page ${key}/${lang} is missing title, desc or body`);
    if (p.desc.length > 200) console.warn(`warn: description of ${key}/${lang} is ${p.desc.length} characters`);
    write(ROUTES[key][lang], shell({ ...p, key, lang, cssVersion }));
    META.push({ key, lang, title: p.title, desc: p.desc });
  }
}
const nf = notFound();
write('/404.html', shell({ ...nf, key: 'start', lang: 'de', noindex: true, cssVersion }));

// ------------------------------------------------------------------ sitemap, robots, llms.txt
const urls = Object.keys(PAGES).flatMap((key) => ['de', 'en'].map((lang) => {
  const alt = ['de', 'en'].map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${ROUTES[key][l]}"/>`).join('');
  return `<url><loc>${SITE}${ROUTES[key][lang]}</loc><lastmod>${STAND.iso}</lastmod>${alt}</url>`;
}));
fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
// AI search and answer engines are welcome: the site has nothing to hide and every claim carries a source.
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
const pageList = (lang) => META.filter((m) => m.lang === lang && !['impressum', 'datenschutz'].includes(m.key))
  .map((m) => `- [${m.title}](${SITE}${ROUTES[m.key][lang]}): ${m.desc}`);
fs.writeFileSync(path.join(DIST, 'llms.txt'), [
  '# Fieravend',
  '',
  '> Fieravend ist eine iPhone-App zur persönlichen Arbeitszeiterfassung für Angestellte, deren Betrieb keine eigene Zeiterfassung hat. Sie führt einen eigenen Stundenzettel mit Stempeluhr, rechnet Überstunden, Urlaub und Feiertage und gibt ruhige Hinweise nach dem Arbeitszeitrecht von Deutschland, Österreich und der Schweiz (andere EU-Länder: Richtlinie 2003/88/EG). Kein Konto, kein Server, kein Tracking, kein Abo. Noch nicht im App Store (Stand ' + STAND.de + '). Ein Werkzeug von Heidrich Digital (Till Heidrich, Tostedt).',
  '',
  '## Fakten',
  '- Plattform: iPhone und iPad, iOS 18 oder neuer. Sprachen: Deutsch, Englisch. Android: noch nicht, zuerst kommt das iPhone.',
  '- Preise (geplant): 30 Tage alles testen ohne Zahlungsdaten; danach Basis ohne Kauf (Stempeln, letzte 7 Tage, ein Job, JSON-Backup); Plus 49,99 € einmalig (zum Start 34,99 € bis 31.1.2027); Jahrespass 14,99 € für ein Kalenderjahr, verlängert sich nicht. Kein Abo.',
  '- Daten: nur auf dem Gerät und in der eigenen iCloud der Person. Keine Analyse-SDKs. Optional App-Sperre mit Face ID.',
  '- Recht: Feiertage aller 16 deutschen Bundesländer, 9 österreichischen Bundesländer und 26 Kantone; Pausen, Ruhezeit und Höchstarbeitszeit nach ArbZG, JArbSchG, AZG, ArG; Urlaub nach BUrlG und den Regeln in AT und CH.',
  '- Mehrere Jobs: jeder Job mit eigenem Konto; für Pausen und Ruhezeit zählt Fieravend alle Jobs zusammen (§ 2 Abs. 1 ArbZG).',
  '- Nachweis: Stundenzettel als PDF und CSV, nachgetragene Zeiten markiert, Änderungsprotokoll, SHA-256-Prüfsumme.',
  '- Umzug: Import aus myTime und anderen Apps per CSV, Startsaldo für Überstunden und Resturlaub.',
  '- Rechtslage Überstunden (Deutschland): Wer Überstunden einklagt, muss sie darlegen und beweisen (BAG, 04.05.2022, 5 AZR 359/21), trotz der Erfassungspflicht nach EuGH C-55/18 und BAG 1 ABR 22/21.',
  '- Fieravend gibt Hinweise und ist keine Rechts- oder Steuerberatung.',
  '',
  '## Seiten (Deutsch)',
  ...pageList('de'),
  '',
  '## Pages (English)',
  ...pageList('en'),
  '',
  '## Kontakt',
  `- ${MAIL}`,
  '',
].join('\n'));

// ------------------------------------------------------------------ internal link check
const all = new Set(written.map((u) => (u.endsWith('/') ? u : u)));
let broken = 0;
for (const u of written) {
  const file = u.endsWith('/') ? path.join(DIST, u, 'index.html') : path.join(DIST, u);
  const html = fs.readFileSync(file, 'utf8');
  for (const [, ref] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (all.has(ref)) continue;
    if (fs.existsSync(path.join(DIST, ref))) continue;
    console.error(`broken link in ${u}: ${ref}`);
    broken++;
  }
}
if (broken) process.exit(1);
console.log(`built ${written.length} pages into ${path.relative(process.cwd(), DIST) || DIST}`);
