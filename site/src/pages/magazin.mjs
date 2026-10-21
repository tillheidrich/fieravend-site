/**
 * Magazin: index (/magazin/, /en/magazine/) and article pages, rendered from the data files in site/src/magazin/
 * (how to add an article: see the comment at the top of site/src/magazin/index.mjs).
 * Every article: answer first, sections, short FAQ (FAQPage), sources with "Stand", a "keine Rechtsberatung" line,
 * related links and the waiting-list CTA. Structured data: Article (author Fieravend / Heidrich Digital), BreadcrumbList
 * (via layout.mjs, Fieravend › Magazin › article), FAQPage.
 */
import { waitlist, href, ORG, CRUMB } from '../layout.mjs';
import { SITE, ROUTES } from '../config.mjs';
import { ARTICLES, SCHEDULED_KEYS, articleKey } from '../magazin/index.mjs';

const T = {
  de: {
    title: 'Magazin: Arbeitszeit, Überstunden und Feierabend',
    desc: 'Artikel über unbezahlte Überstunden, Arbeit am Abend, flexible Wochen, AD(H)S und Arbeitszeit weltweit. Ruhig erklärt, mit Quellen, von Fieravend.',
    h1: 'Magazin',
    lede: 'Über Arbeitszeit, Überstunden und Feierabend. Ruhig erklärt, mit Quellen, ohne Panik. Für dich, nicht für deinen Chef.',
    answerH: 'Kurz gesagt', by: 'Von Fieravend · Heidrich Digital', stand: 'Stand', read: 'Lesezeit',
    faqH: 'Kurz gefragt', srcH: 'Quellen', checked: (d) => `Alle Quellen abgerufen am ${d}.`,
    legal: 'Dieser Artikel erklärt allgemein und ist keine Rechtsberatung. Bei Fragen zu deinem Fall helfen Betriebsrat, Gewerkschaft, Arbeiterkammer (AT) oder eine Fachanwältin für Arbeitsrecht.',
    moreH: 'Weiterlesen', all: 'Alle Artikel', published: 'Veröffentlicht',
    indexNote: 'Die Artikel erklären allgemein und sind keine Rechtsberatung. Jede Zahl hat eine Quelle mit Prüfdatum.',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  },
  en: {
    title: 'Magazine: working hours, overtime and time off',
    desc: 'Articles on unpaid overtime, evening work, flexible weeks, ADHD and working hours around the world. Calmly explained, with sources, by Fieravend.',
    h1: 'Magazine',
    lede: 'About working hours, overtime and the end of the working day. Calmly explained, with sources, no panic. For you, not for your boss.',
    answerH: 'In short', by: 'By Fieravend · Heidrich Digital', stand: 'As of', read: 'Reading time',
    faqH: 'Quick questions', srcH: 'Sources', checked: (d) => `All sources checked on ${d}.`,
    legal: 'This article explains things in general and is not legal advice. For questions about your own case, a works council, union, the Chamber of Labour (Austria) or an employment lawyer can help.',
    moreH: 'Read on', all: 'All articles', published: 'Published',
    indexNote: 'The articles explain things in general and are not legal advice. Every number has a source with the date it was checked.',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
};

/** "24. Oktober 2026" / "24 October 2026" (lists, article head; JSON-LD uses the ISO date). */
const date = (iso, lang) => {
  const [y, m, d] = iso.split('-').map(Number);
  return lang === 'de' ? `${d}. ${T.de.months[m - 1]} ${y}` : `${d} ${T.en.months[m - 1]} ${y}`;
};
const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="4" y1="12" x2="19" y2="12"/><polyline points="13,6 19,12 13,18"/></svg>';

/**
 * Turns href="@key" into the path of that page in the language; unknown keys stop the build.
 * A link to an article that is not published yet (scheduled) becomes plain text, so nothing points to a missing page.
 */
function links(html, lang) {
  return html.replace(/<a href="@([a-z0-9-]+)">(.*?)<\/a>/gs, (all, key, text) => (SCHEDULED_KEYS.has(key) ? text : all))
    .replace(/href="@([a-z0-9-]+)"/g, (_, key) => {
    if (!ROUTES[key]) throw new Error(`magazin: unknown link key @${key}`);
    return `href="${ROUTES[key][lang]}"`;
  });
}

/** Name of any page for "Weiterlesen": an article's title, otherwise the breadcrumb name. */
function pageName(key, lang) {
  const a = ARTICLES.find((x) => articleKey(x) === key);
  return a ? a[lang].title : CRUMB[lang][key];
}

const card = (a, lang, h = 'h2') => {
  const c = a[lang];
  return `<li class="mag-card"><a class="mag-link" href="${ROUTES[articleKey(a)][lang]}">` +
    `<span class="mag-kicker">${c.kicker}</span><${h} class="mag-title">${c.title}</${h}><span class="mag-desc">${c.desc}</span>` +
    `<span class="mag-meta">${date(a.published, lang)} · ${c.read}</span></a></li>`;
};

/** Teaser list for other pages (start page): the first n articles. */
export function magazinTeaser(lang, n = 3) {
  return `<ul class="mag-list">${ARTICLES.slice(0, n).map((a) => card(a, lang, 'h3')).join('')}</ul>`;
}

export function magazinIndex(lang) {
  const t = T[lang];
  const url = SITE + ROUTES.magazin[lang];
  const body = `
<section class="page-head">
  <div class="wrap narrow">
    <h1>${t.h1}</h1>
    <p class="lede">${t.lede}</p>
  </div>
</section>
<section class="band band-tight" aria-label="${t.all}">
  <div class="wrap"><ul class="mag-list">${ARTICLES.map((a) => card(a, lang)).join('')}</ul></div>
</section>
<section class="band">
  <div class="wrap narrow"><p class="small muted">${t.indexNote}</p>${waitlist(lang, { source: 'Magazin' })}</div>
</section>`;
  const jsonld = [
    { '@type': 'Blog', '@id': `${url}#blog`, name: `Fieravend ${t.h1}`, description: t.desc, url, inLanguage: lang, publisher: { '@id': ORG['@id'] },
      blogPost: ARTICLES.map((a) => ({ '@type': 'BlogPosting', headline: a[lang].title, url: SITE + ROUTES[articleKey(a)][lang], datePublished: a.published, dateModified: a.modified })) },
    ORG,
  ];
  return { title: t.title, desc: t.desc, body, jsonld };
}

/** Page function for one article (build.mjs registers one per article). */
export function articlePage(a) {
  return (lang) => {
    const t = T[lang];
    const c = a[lang];
    const key = articleKey(a);
    const url = SITE + ROUTES[key][lang];
    const sections = c.sections.map((s, i) => {
      const id = `${a.id}-${i + 1}`;
      const ps = (s.p || []).map((p) => `<p>${p}</p>`).join('');
      const list = s.list ? `<ul class="steps mag-steps">${s.list.map(([b, x]) => `<li><b>${b}</b><span>${x}</span></li>`).join('')}</ul>` : '';
      return `<h2 id="${id}">${s.h}</h2>${ps}${list}`;
    }).join('\n');
    const qa = c.qa && c.qa.length
      ? `<h2 id="${a.id}-faq">${t.faqH}</h2><dl class="mag-qa">${c.qa.map(([q, x]) => `<div><dt>${q}</dt><dd>${x}</dd></div>`).join('')}</dl>`
      : '';
    const srcs = `<ol class="mag-src">${c.sources.map(([l, u]) => `<li><a href="${u}">${l}</a></li>`).join('')}</ol>`;
    const rel = c.related.filter((k) => !SCHEDULED_KEYS.has(k)).map((k) => `<li><a class="more" href="${href(k, lang)}">${pageName(k, lang)}${arrow}</a></li>`).join('');
    const body = `
<article class="mag-article" aria-labelledby="mag-h1">
<section class="page-head">
  <div class="wrap narrow">
    <p class="mag-kicker"><a href="${href('magazin', lang)}">${t.h1}</a> · ${c.kicker}</p>
    <h1 id="mag-h1" class="mag-h1">${c.title}</h1>
    <div class="answer"><h2 class="answer-h">${t.answerH}</h2><p>${links(c.answer, lang)}</p></div>
    <p class="small muted">${t.by} · ${t.published} <time datetime="${a.published}">${date(a.published, lang)}</time> · ${t.stand} ${date(a.modified, lang)} · ${t.read} ${c.read}</p>
  </div>
</section>
<section class="band band-tight">
  <div class="wrap narrow mag-body">
${links(sections, lang)}
${c.note ? `<p class="planned mag-note">${c.note}</p>` : ''}
${links(qa, lang)}
    <h2 id="${a.id}-src">${t.srcH}</h2>
    ${srcs}
    <p class="small muted">${t.checked(date(a.checked, lang))} ${t.legal}</p>
  </div>
</section>
</article>
<section class="band law" aria-labelledby="${a.id}-more">
  <div class="wrap split">
    <h2 id="${a.id}-more">${t.moreH}</h2>
    <ul class="mag-rel">${rel}<li><a class="more" href="${href('magazin', lang)}">${t.all}${arrow}</a></li></ul>
  </div>
</section>
<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: `Magazin ${a.id}` })}</div>
</section>`;
    const jsonld = [
      { '@type': 'Article', '@id': `${url}#article`, headline: c.title.length > 110 ? `${c.title.slice(0, 107)}…` : c.title, description: c.desc, inLanguage: lang,
        url, mainEntityOfPage: url, datePublished: a.published, dateModified: a.modified,
        image: `${SITE}/assets/og-${lang}.png`,
        author: { '@type': 'Organization', name: 'Fieravend (Heidrich Digital)', url: SITE + ROUTES.start[lang] },
        publisher: { '@id': ORG['@id'] }, isPartOf: { '@id': `${SITE}${ROUTES.magazin[lang]}#blog` },
        citation: c.sources.map(([, u]) => u) },
      ORG,
    ];
    if (c.qa && c.qa.length) {
      jsonld.push({ '@type': 'FAQPage', inLanguage: lang, mainEntity: c.qa.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: x.replace(/<[^>]+>/g, '') } })) });
    }
    return {
      title: c.title, desc: c.desc, body, jsonld, ogType: 'article', published: a.published, modified: a.modified,
      crumbs: [[CRUMB[lang].magazin, 'magazin']], crumb: c.title, lastmod: a.modified,
    };
  };
}

