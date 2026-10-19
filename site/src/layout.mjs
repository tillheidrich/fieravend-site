/**
 * Page shell: head (meta, CSP, hreflang, fonts preload), header with navigation and language switch, footer.
 * No inline scripts and no inline styles anywhere, so the Content-Security-Policy can stay strict.
 */
import { SITE, ROUTES, MAIL, STAND } from './config.mjs';
import { mark } from './art.mjs';

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const href = (key, lang) => ROUTES[key][lang];

const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'none'",
  "form-action 'none'",
  "base-uri 'none'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const UI = {
  de: {
    skip: 'Zum Inhalt springen', home: 'Fieravend, zur Startseite', nav: 'Hauptnavigation', menu: 'Menü',
    switchTo: 'English', switchLabel: 'This page in English', foot: 'Fußbereich',
    claim: 'Damit dein Feierabend stimmt.',
    sender: 'Fieravend ist ein Werkzeug von <a href="https://heidrich-digital.de">Heidrich Digital</a>.',
    calm: 'Kein Konto, kein Tracking, keine Cookies. Fieravend ersetzt keine Rechts- oder Steuerberatung.',
    links: [['kleinbetrieb', 'Für Kleinbetriebe'], ['zweijobs', 'Zwei Jobs'], ['mytime', 'Umzug von myTime'], ['preise', 'Preise'], ['fragen', 'Fragen'], ['rechner', 'Rechner']],
    legal: [['impressum', 'Impressum'], ['datenschutz', 'Datenschutz']],
    footApp: 'Die App', footHelp: 'Hilfe und Rechtliches', mailLabel: 'Mail',
  },
  en: {
    skip: 'Skip to content', home: 'Fieravend, home', nav: 'Main navigation', menu: 'Menu',
    switchTo: 'Deutsch', switchLabel: 'Diese Seite auf Deutsch', foot: 'Footer',
    claim: 'So your hours add up.',
    sender: 'Fieravend is a tool by <a href="https://heidrich-digital.de">Heidrich Digital</a>.',
    calm: 'No account, no tracking, no cookies. Fieravend is not legal or tax advice.',
    links: [['kleinbetrieb', 'Small businesses'], ['zweijobs', 'Two jobs'], ['mytime', 'Switch from myTime'], ['preise', 'Pricing'], ['fragen', 'FAQ'], ['rechner', 'Calculator']],
    legal: [['impressum', 'Legal notice'], ['datenschutz', 'Privacy']],
    footApp: 'The app', footHelp: 'Help and legal', mailLabel: 'Mail',
  },
};

/** Wordmark: the mark plus "fieravend" in Figtree 600, always lower case (wiki "Logo & App-Icon"). */
export const wordmark = (id, cls = 'brand') =>
  `<span class="${cls}">${mark({ id, simple: true, cls: 'mark mark-s' })}<span class="brand-word">fieravend</span></span>`;

function nav(page) {
  const u = UI[page.lang];
  const items = u.links.map(([k, label]) => {
    const cur = k === page.key ? ' aria-current="page"' : '';
    return `<li><a href="${href(k, page.lang)}"${cur}>${label}</a></li>`;
  }).join('');
  const other = page.lang === 'de' ? 'en' : 'de';
  const sw = `<a class="lang" href="${href(page.key, other)}" hreflang="${other}" lang="${other}" aria-label="${u.switchLabel}">${u.switchTo}</a>`;
  return `<header class="site-head"><div class="wrap head-row">` +
    `<a class="home" href="${href('start', page.lang)}" aria-label="${u.home}">${wordmark(`hm-${page.lang}`)}</a>` +
    `<nav class="nav-wide" aria-label="${u.nav}"><ul>${items}</ul></nav>${sw}` +
    `<details class="nav-narrow"><summary><span>${u.menu}</span><svg class="burger" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg></summary>` +
    `<nav aria-label="${u.menu}"><ul>${items}<li>${sw}</li></ul></nav></details>` +
    `</div></header>`;
}

function footer(page) {
  const u = UI[page.lang];
  const list = (arr) => arr.map(([k, l]) => `<li><a href="${href(k, page.lang)}">${l}</a></li>`).join('');
  return `<footer class="site-foot" aria-label="${u.foot}"><div class="wrap foot-grid">` +
    `<div class="foot-brand">${wordmark(`ft-${page.lang}`, 'brand brand-foot')}<p class="foot-claim">${u.claim}</p><p>${u.sender}</p><p class="muted">${u.calm}</p></div>` +
    `<div><h2 class="foot-h">${u.footApp}</h2><ul class="foot-list">${list(u.links)}</ul></div>` +
    `<div><h2 class="foot-h">${u.footHelp}</h2><ul class="foot-list">${list(u.legal)}<li><a href="mailto:${MAIL}">${u.mailLabel}: ${MAIL}</a></li></ul></div>` +
    `</div></footer>`;
}

/**
 * page: { key, lang, title, desc, body, scripts?: string[], jsonld?: object, noindex?: boolean }
 */
export function shell(page) {
  const u = UI[page.lang];
  const canonical = SITE + href(page.key, page.lang);
  const alt = ['de', 'en'].map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE}${href(page.key, l)}">`).join('') +
    `<link rel="alternate" hreflang="x-default" href="${SITE}${href(page.key, 'de')}">`;
  const og = page.lang === 'de' ? '/assets/og-de.png' : '/assets/og-en.png';
  const scripts = (page.scripts || []).map((s) => `<script src="${s}" defer></script>`).join('');
  const ld = page.jsonld ? `<script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>` : '';
  return `<!doctype html>
<html lang="${page.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.desc)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">${alt}`}
<meta name="color-scheme" content="light dark">
<meta name="theme-color" content="#FAF6EF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#121826" media="(prefers-color-scheme: dark)">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Fieravend">
<meta property="og:locale" content="${page.lang === 'de' ? 'de_DE' : 'en_GB'}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE}${og}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/figtree-latin-wght.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css?v=${page.cssVersion}">
${scripts}${ld}
</head>
<body class="page-${page.key}">
<a class="skip" href="#inhalt">${u.skip}</a>
${nav(page)}
<main id="inhalt" tabindex="-1">
${page.body.replace(/(\d) €/g, '$1&nbsp;€')}
</main>
${footer(page)}
</body>
</html>
`;
}

/** The waiting-list block: mailto only, no form, no backend. */
export function waitlist(lang, { tone = 'plain' } = {}) {
  const t = lang === 'de'
    ? { label: 'Bald im App Store', p: 'Fieravend kommt zuerst fürs iPhone. Schreib uns eine Mail, dann sagen wir dir Bescheid, sobald du es laden kannst. Deine Adresse nutzen wir nur dafür und löschen sie danach.', btn: 'Bescheid sagen lassen', sub: 'Fieravend%3A%20Bitte%20Bescheid%20sagen', body: 'Hallo%2C%20bitte%20sagt%20mir%20Bescheid%2C%20wenn%20Fieravend%20im%20App%20Store%20ist.', mailHint: `Öffnet dein Mailprogramm. Adresse: ${MAIL}` }
    : { label: 'Coming to the App Store', p: 'Fieravend comes to the iPhone first. Send us an email and we will tell you when you can download it. We use your address only for that and delete it afterwards.', btn: 'Tell me when it is out', sub: 'Fieravend%3A%20Please%20let%20me%20know', body: 'Hello%2C%20please%20let%20me%20know%20when%20Fieravend%20is%20in%20the%20App%20Store.', mailHint: `Opens your mail app. Address: ${MAIL}` };
  return `<div class="waitlist waitlist-${tone}"><p class="label">${t.label}</p><p>${t.p}</p>` +
    `<p><a class="btn btn-primary" href="mailto:${MAIL}?subject=${t.sub}&amp;body=${t.body}">${t.btn}</a></p>` +
    `<p class="small muted">${t.mailHint}</p></div>`;
}

/** "Stand" line under legal values and prices. */
export const stand = (lang) => (lang === 'de' ? `Stand: ${STAND.de}` : `As of ${STAND.en}`);
