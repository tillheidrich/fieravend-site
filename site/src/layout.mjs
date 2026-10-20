/**
 * Page shell: head (meta, CSP, hreflang, fonts preload), header with navigation and language switch, footer.
 * No inline scripts and no inline styles anywhere, so the Content-Security-Policy can stay strict.
 */
import { SITE, ROUTES, MAIL, STAND, PROVIDER, APP_STORE_ID, APP_STORE_URL } from './config.mjs';
import { mark } from './art.mjs';
import { CREDITS } from './credits.mjs';

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
    links: [['kleinbetrieb', 'Für Kleinbetriebe'], ['zweijobs', 'Zwei Jobs'], ['preise', 'Preise'], ['fragen', 'Fragen'], ['rechner', 'Rechner']],
    more: [['feierabend', 'Feierabend-Rechner'], ['nachweis', 'Überstunden nachweisen'], ['mytime', 'Umzug von myTime']],
    legal: [['impressum', 'Impressum'], ['datenschutz', 'Datenschutz']],
    footApp: 'Die App', footHelp: 'Hilfe und Rechtliches', mailLabel: 'Schreib uns',
    place: 'Gebaut in Tostedt bei Hamburg. Rechnet für Deutschland, Österreich, die Schweiz und die EU.',
    invite: 'Bescheid sagen, wenn es da ist', credits: 'Fotos',
  },
  en: {
    skip: 'Skip to content', home: 'Fieravend, home', nav: 'Main navigation', menu: 'Menu',
    switchTo: 'Deutsch', switchLabel: 'Diese Seite auf Deutsch', foot: 'Footer',
    claim: 'So your hours add up.',
    sender: 'Fieravend is a tool by <a href="https://heidrich-digital.de">Heidrich Digital</a>.',
    calm: 'No account, no tracking, no cookies. Fieravend is not legal or tax advice.',
    links: [['kleinbetrieb', 'Small businesses'], ['zweijobs', 'Two jobs'], ['preise', 'Pricing'], ['fragen', 'FAQ'], ['rechner', 'Calculator']],
    more: [['feierabend', 'Finish-time calculator'], ['nachweis', 'Proving overtime'], ['mytime', 'Switch from myTime']],
    legal: [['impressum', 'Legal notice'], ['datenschutz', 'Privacy']],
    footApp: 'The app', footHelp: 'Help and legal', mailLabel: 'Write to us',
    place: 'Made in Tostedt near Hamburg. Works for Germany, Austria, Switzerland and the EU.',
    invite: 'Tell me when it is out', credits: 'Photos',
  },
};

/** Short page names for breadcrumbs (BreadcrumbList) */
const CRUMB = {
  de: { start: 'Fieravend', kleinbetrieb: 'Für Kleinbetriebe', zweijobs: 'Zwei Jobs', mytime: 'Umzug von myTime', preise: 'Preise', fragen: 'Fragen', rechner: 'Überstundenrechner', feierabend: 'Feierabend-Rechner', nachweis: 'Überstunden nachweisen', datenschutz: 'Datenschutz', impressum: 'Impressum' },
  en: { start: 'Fieravend', kleinbetrieb: 'Small businesses', zweijobs: 'Two jobs', mytime: 'Switch from myTime', preise: 'Pricing', fragen: 'FAQ', rechner: 'Overtime calculator', feierabend: 'Finish-time calculator', nachweis: 'Proving overtime', datenschutz: 'Privacy', impressum: 'Legal notice' },
};

/** The publisher, shared by every page's structured data. */
export const ORG = {
  '@type': 'Organization', '@id': `${SITE}/#org`, name: 'Heidrich Digital', url: PROVIDER.web,
  founder: { '@type': 'Person', name: PROVIDER.name }, email: MAIL,
  address: { '@type': 'PostalAddress', streetAddress: PROVIDER.street, postalCode: '21255', addressLocality: 'Tostedt', addressCountry: 'DE' },
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
  const go = cta(page.lang, 'Fuß');
  const credits = CREDITS.map((c) => `<a href="${c.page}">${c.title}</a> (${c.creator}, <a href="${c.licenseUrl}">${c.license}</a>)`).join(' · ');
  return `<footer class="site-foot" aria-label="${u.foot}"><div class="foot-board">` +
    `<div class="ft ft-say"><p class="foot-claim">${u.claim}</p><p class="ft-small">${u.sender} ${u.calm}</p></div>` +
    `<nav class="ft ft-nav" aria-label="${u.footApp}"><h2 class="foot-h">${u.footApp}</h2><ul class="foot-list">${list(u.links)}${list(u.more)}</ul></nav>` +
    `<div class="ft ft-place"><h2 class="foot-h">${u.footHelp}</h2><ul class="foot-list">${list(u.legal)}</ul><p class="ft-small">${u.place}</p></div>` +
    `<div class="ft ft-mail"><h2 class="foot-h">${u.mailLabel}</h2><a class="ft-addr" href="mailto:${MAIL}">${MAIL}</a></div>` +
    `<div class="ft ft-word">${wordmark(`ft-${page.lang}`, 'brand brand-foot')}</div>` +
    `<a class="ft ft-go" href="${go.href}"><span>${APP_STORE_URL ? go.label : u.invite}</span><svg viewBox="0 0 48 48" aria-hidden="true" focusable="false"><line x1="8" y1="40" x2="38" y2="10"/><polyline points="16,10 38,10 38,32"/></svg></a>` +
    `<p class="ft ft-credits ft-small">${u.credits}: ${credits}</p>` +
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
  const graph = [].concat(page.jsonld || []);
  if (page.key !== 'start' && !page.noindex) {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Fieravend', item: SITE + href('start', page.lang) },
      { '@type': 'ListItem', position: 2, name: CRUMB[page.lang][page.key], item: canonical },
    ] });
  }
  const ld = graph.length
    ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph.map((g) => { const { '@context': _, ...rest } = g; return rest; }) }).replace(/</g, '\\u003c')}</script>`
    : '';
  const banner = APP_STORE_ID ? `<meta name="apple-itunes-app" content="app-id=${APP_STORE_ID}">` : '';
  return `<!doctype html>
<html lang="${page.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<title>${esc(/Fieravend/.test(page.title) ? page.title : `${page.title} · Fieravend`)}</title>
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
${banner}
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

/**
 * The one action of every page. Before launch: a mailto (no form, no backend) whose subject names the page it came from,
 * so replies show which page brings people without any tracking. After launch (APP_STORE_ID set): the App Store link.
 */
export function cta(lang, source, label) {
  if (APP_STORE_URL) return { href: APP_STORE_URL, label: lang === 'de' ? 'Im App Store laden' : 'Download on the App Store', note: lang === 'de' ? 'Für iPhone und iPad, ab iOS 18. 30 Tage alles testen.' : 'For iPhone and iPad, iOS 18 or later. Try everything for 30 days.' };
  const sub = (lang === 'de' ? 'Fieravend: Bitte Bescheid sagen' : 'Fieravend: Please let me know') + (source ? ` (${source})` : '');
  const body = lang === 'de' ? 'Hallo,\n\nbitte sagt mir Bescheid, wenn Fieravend im App Store ist.\n' : 'Hello,\n\nplease let me know when Fieravend is in the App Store.\n';
  return {
    href: `mailto:${MAIL}?subject=${encodeURIComponent(sub)}&amp;body=${encodeURIComponent(body)}`,
    label: label || (lang === 'de' ? 'Bescheid sagen lassen' : 'Tell me when it is out'),
    note: lang === 'de' ? `Öffnet dein Mailprogramm. Adresse: ${MAIL}` : `Opens your mail app. Address: ${MAIL}`,
  };
}

/** The waiting-list block (or, after launch, the download block). */
export function waitlist(lang, { tone = 'plain', source = '' } = {}) {
  const live = Boolean(APP_STORE_URL);
  const t = lang === 'de'
    ? { label: live ? 'Jetzt im App Store' : 'Bald im App Store', p: live ? 'Lade Fieravend und teste 30 Tage lang alles, ohne Abo und ohne Zahlungsdaten.' : 'Fieravend kommt zuerst fürs iPhone. Schreib uns eine Mail, dann sagen wir dir Bescheid, sobald du es laden kannst. Deine Adresse nutzen wir nur dafür und löschen sie danach.' }
    : { label: live ? 'Now on the App Store' : 'Coming to the App Store', p: live ? 'Download Fieravend and try everything for 30 days, without a subscription or payment details.' : 'Fieravend comes to the iPhone first. Send us an email and we will tell you when you can download it. We use your address only for that and delete it afterwards.' };
  const c = cta(lang, source);
  return `<div class="waitlist waitlist-${tone}"><h2 class="waitlist-h">${t.label}</h2><p>${t.p}</p>` +
    `<p><a class="btn btn-primary" href="${c.href}">${c.label}</a></p>` +
    `<p class="small muted">${c.note}</p></div>`;
}

/** "Stand" line under legal values and prices. */
export const stand = (lang) => (lang === 'de' ? `Stand: ${STAND.de}` : `As of ${STAND.en}`);
