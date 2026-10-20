/**
 * Guide "Am Wochenende oder an Feiertagen arbeiten" (/ratgeber/wochenende-feiertage/, /en/guide/weekend-and-holiday-work/).
 * Search intent: "Feiertag gearbeitet Überstunden", "Ersatzruhetag", "Sonntagszuschlag steuerfrei", "Dienstplan Überstunden".
 * Answer first, then how the time counts, rest days, surcharges, the app. Legal state checked 20.10.2026; every claim has a
 * source. Not legal or tax advice.
 */
import { waitlist, href, ORG } from '../layout.mjs';
import { SITE, ROUTES, PROVIDER } from '../config.mjs';

const C = {
  de: {
    title: 'Am Wochenende oder an Feiertagen arbeiten: Plusstunden, Ersatzruhetag, Zuschläge',
    desc: 'Samstag, Sonntag oder Feiertag gearbeitet? So zählt die Zeit auf deinem Konto, wann dir ein Ersatzruhetag zusteht und welche Zuschläge steuerfrei sind. Deutschland, Österreich, Schweiz.',
    h1: 'Arbeit am Wochenende und an Feiertagen',
    sumH: 'Kurz gesagt',
    sum: 'Ist der Tag laut Vertrag oder Dienstplan kein Arbeitstag, ist jede Stunde, die du dort arbeitest, ein Plus auf deinem Konto. Für Arbeit an einem Sonntag oder Feiertag steht dir in Deutschland ein Ersatzruhetag zu. Zuschläge gibt es nur, wenn dein Vertrag oder Tarifvertrag sie vorsieht; bis zu bestimmten Sätzen sind sie steuerfrei.',
    stand: 'Rechtsstand: 20.10.2026 · Von Till Heidrich, Heidrich Digital · Keine Rechts- oder Steuerberatung',
    countH: 'Wie die Zeit auf deinem Konto zählt',
    count: [
      ['Kein Arbeitstag laut Vertrag', 'Arbeitest du an einem Samstag, Sonntag oder Feiertag, an dem du sonst frei hättest, ist dein Soll an diesem Tag null. Jede Minute ist Plus.'],
      ['Fester Arbeitstag am Wochenende', 'Gehört der Samstag zu deinen festen Arbeitstagen, gilt dort dein normales Soll. Mehr ist Plus, weniger ist Minus.'],
      ['Feiertag an einem Arbeitstag', 'An einem gesetzlichen Feiertag fällt dein Soll weg, der Lohn läuft trotzdem weiter. Arbeitest du trotzdem, zählt das als Plus.'],
      ['Dienstplan mit wechselnden Tagen', 'Arbeitest du mal montags, mal samstags, zählt dein Soll pro Woche. Ein freier Montag ist dann kein Minus, ein Samstag kein Plus, solange die Woche aufgeht.'],
    ],
    countSrc: [['§ 2 Entgeltfortzahlungsgesetz (Feiertagslohn)', 'https://www.gesetze-im-internet.de/entgfg/__2.html']],
    restH: 'Ersatzruhetag und freie Sonntage',
    rest: [
      ['Deutschland', 'Arbeitest du an einem Sonntag, bekommst du innerhalb von zwei Wochen einen freien Ersatztag. Für einen Feiertag an einem Werktag hat der Arbeitgeber acht Wochen Zeit. Mindestens 15 Sonntage im Jahr bleiben frei.', '§ 11 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__11.html'],
      ['Österreich', 'Dir stehen jede Woche 36 Stunden am Stück frei zu, normalerweise ab Samstagnachmittag. Arbeitest du am Feiertag, bekommst du die Arbeit zusätzlich zum Feiertagsentgelt bezahlt, außer ihr vereinbart Zeitausgleich.', '§§ 3, 9 ARG', 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008541'],
      ['Schweiz', 'Sonntagsarbeit braucht eine Bewilligung und deine Zustimmung. Bei vorübergehender Sonntagsarbeit gibt es mindestens 50 Prozent Lohnzuschlag und Ersatzruhe.', 'Art. 19 und 20 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_19'],
    ],
    payH: 'Zuschläge: was steuerfrei ist',
    payP: 'Einen gesetzlichen Anspruch auf Sonntags- oder Feiertagszuschläge gibt es in Deutschland nicht, nur für Nachtarbeit einen angemessenen Ausgleich. Zahlt dein Arbeitgeber Zuschläge, sind sie bis zu diesen Sätzen des Grundlohns steuerfrei (Grundlohn höchstens 50 € pro Stunde):',
    pay: [['Nachtarbeit (20–6 Uhr)', '25 %, von 0 bis 4 Uhr 40 %, wenn du vor Mitternacht angefangen hast'], ['Sonntag', '50 %'], ['Gesetzlicher Feiertag, 31.12. ab 14 Uhr', '125 %'], ['24.12. ab 14 Uhr, 25. und 26.12., 1. Mai', '150 %']],
    paySrc: [['§ 3b EStG', 'https://www.gesetze-im-internet.de/estg/__3b.html'], ['§ 6 Abs. 5 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__6.html']],
    appH: 'So hilft dir Fieravend',
    app: [
      'Arbeitsmodell „Wechselnde Tage (Dienstplan)“: Soll pro Woche, geplante Dienste, Feiertage zählen nur, wenn ein Dienst geplant war.',
      'Eintragstyp „Ersatzruhetag“. Fehlt einer, sagt Fieravend es dir ruhig und rechnet die Frist mit.',
      'Der Ersatzruhetag zählt nie als Minus und kostet keinen Urlaubstag. Zuschläge mit dem steuerfreien Anteil nach § 3b EStG kommen mit einem späteren Update dazu.',
      'Hinweis, wenn im Jahr zu wenige freie Sonntage übrig bleiben.',
    ],
    appLink: 'Wie Fieravend funktioniert',
    note: 'Tarifverträge und Betriebsvereinbarungen regeln oft mehr, zum Beispiel höhere Zuschläge. Im Zweifel helfen Betriebsrat, Gewerkschaft, Arbeiterkammer (AT) oder eine Fachanwältin für Arbeitsrecht.',
    qaH: 'Kurz gefragt',
    qa: [
      ['Ist Arbeit an einem Feiertag automatisch Überstunden?', 'Auf deinem Konto ja, wenn der Feiertag für dich sonst frei wäre: Dein Soll ist null, jede Stunde ist Plus. Ob sie bezahlt oder abgefeiert werden, regelt dein Vertrag.'],
      ['Muss ich für einen gearbeiteten Sonntag einen freien Tag bekommen?', 'In Deutschland ja, einen Ersatzruhetag innerhalb von zwei Wochen (§ 11 Abs. 3 ArbZG).'],
      ['Sind Sonntagszuschläge steuerfrei?', 'Bis 50 Prozent des Grundlohns, an Feiertagen bis 125 oder 150 Prozent (§ 3b EStG).'],
    ],
    src: 'Quelle',
  },
  en: {
    title: 'Working weekends and public holidays: extra hours, rest days, surcharges',
    desc: 'Worked on a Saturday, Sunday or public holiday? How the time counts on your balance, when you are owed a replacement rest day and which surcharges are tax-free. Germany, Austria, Switzerland.',
    h1: 'Working weekends and public holidays',
    sumH: 'In short',
    sum: 'If the day is not a working day under your contract or rota, every hour you work on it is a plus on your balance. For work on a Sunday or public holiday, German law gives you a replacement rest day. Surcharges only exist if your contract or collective agreement provides them; up to certain rates they are tax-free.',
    stand: 'Legal state: 20 October 2026 · By Till Heidrich, Heidrich Digital · Not legal or tax advice',
    countH: 'How the time counts on your balance',
    count: [
      ['Not a working day under your contract', 'If you work on a Saturday, Sunday or public holiday you would otherwise have off, your target that day is zero. Every minute is a plus.'],
      ['Fixed working day at the weekend', 'If Saturday is one of your fixed working days, your normal target applies. More is plus, less is minus.'],
      ['Public holiday on a working day', 'On a public holiday your target drops out while your pay continues. If you work anyway, it counts as plus.'],
      ['Rota with changing days', 'If you sometimes work Mondays and sometimes Saturdays, your target counts per week. A free Monday is no minus and a Saturday no plus as long as the week adds up.'],
    ],
    countSrc: [['§ 2 Continued Remuneration Act (holiday pay, Germany)', 'https://www.gesetze-im-internet.de/entgfg/__2.html']],
    restH: 'Replacement rest days and free Sundays',
    rest: [
      ['Germany', 'If you work on a Sunday, you get a replacement day off within two weeks. For a public holiday on a weekday the employer has eight weeks. At least 15 Sundays a year stay free.', '§ 11 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__11.html'],
      ['Austria', 'You are owed 36 hours off in a row every week, normally from Saturday afternoon. If you work on a public holiday, the work is paid on top of the holiday pay unless you agree on time off instead.', '§§ 3, 9 ARG', 'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008541'],
      ['Switzerland', 'Sunday work needs a permit and your consent. Temporary Sunday work earns at least a 50 percent surcharge and replacement rest.', 'Art. 19 and 20 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/en#art_19'],
    ],
    payH: 'Surcharges: what is tax-free',
    payP: 'In Germany there is no legal right to Sunday or holiday surcharges, only to fair compensation for night work. If your employer pays surcharges, they are tax-free up to these rates of the base pay (base pay at most €50 an hour):',
    pay: [['Night work (20:00–6:00)', '25 %, from 0:00 to 4:00 40 % if you started before midnight'], ['Sunday', '50 %'], ['Public holiday, 31 Dec from 14:00', '125 %'], ['24 Dec from 14:00, 25 and 26 Dec, 1 May', '150 %']],
    paySrc: [['§ 3b EStG', 'https://www.gesetze-im-internet.de/estg/__3b.html'], ['§ 6 (5) ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__6.html']],
    appH: 'How Fieravend helps',
    app: [
      'Work model “Changing days (rota)”: target per week, planned shifts, public holidays only count if a shift was planned.',
      'Entry type “Replacement rest day”. If one is missing, Fieravend tells you calmly and keeps track of the deadline.',
      'A replacement rest day never counts as minus and costs no leave. Surcharges with the tax-free share under § 3b EStG come in a later update.',
      'A hint when too few free Sundays are left in the year.',
    ],
    appLink: 'How Fieravend works',
    note: 'Collective agreements and works agreements often provide more, such as higher surcharges. If in doubt, a works council, union, the Chamber of Labour (Austria) or an employment lawyer can help.',
    qaH: 'Quick questions',
    qa: [
      ['Is work on a public holiday automatically overtime?', 'On your balance yes, if the holiday would otherwise be a day off: your target is zero, every hour is plus. Whether it is paid or taken as time off depends on your contract.'],
      ['Do I get a day off for a Sunday I worked?', 'In Germany yes, a replacement rest day within two weeks (§ 11 (3) ArbZG).'],
      ['Are Sunday surcharges tax-free?', 'Up to 50 percent of base pay, on public holidays up to 125 or 150 percent (§ 3b EStG).'],
    ],
    src: 'Source',
  },
};

export default function wochenende(lang) {
  const c = C[lang];
  const srcs = (list) => list.map(([t, u]) => `<a class="src" href="${u}">${c.src}: ${t}</a>`).join('');
  const count = c.count.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const rest = c.rest.map(([k, p, s, u]) => `<li><b>${k}</b><span>${p}</span><a class="src" href="${u}">${c.src}: ${s}</a></li>`).join('');
  const pay = c.pay.map(([k, v]) => `<tr><th scope="row">${k}</th><td>${v}</td></tr>`).join('');
  const app = c.app.map((x) => `<li>${x}</li>`).join('');
  const qa = c.qa.map(([q, a]) => `<div class="qa"><h3>${q}</h3><p>${a}</p></div>`).join('');
  const url = SITE + ROUTES.wochenende[lang];
  const jsonld = [
    { '@type': 'Article', headline: c.title, description: c.desc, inLanguage: lang, url, mainEntityOfPage: url,
      datePublished: '2026-10-20', dateModified: '2026-10-20', author: { '@type': 'Person', name: PROVIDER.name, url: PROVIDER.web },
      publisher: { '@id': ORG['@id'] }, citation: [...c.countSrc, ...c.paySrc].map(([, u]) => u).concat(c.rest.map((r) => r[3])) },
    { '@type': 'FAQPage', inLanguage: lang, mainEntity: c.qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ORG,
  ];
  const body = `
<section class="page-head">
  <div class="wrap narrow">
    <h1>${c.h1}</h1>
    <div class="answer"><h2 class="answer-h">${c.sumH}</h2><p>${c.sum}</p></div>
    <p class="small muted">${c.stand}</p>
  </div>
</section>

<section class="band band-tight" aria-labelledby="count">
  <div class="wrap split">
    <h2 id="count">${c.countH}</h2>
    <div><ul class="steps">${count}</ul><p class="srcs">${srcs(c.countSrc)}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="rest">
  <div class="wrap split">
    <h2 id="rest">${c.restH}</h2>
    <ul class="rules">${rest}</ul>
  </div>
</section>

<section class="band" aria-labelledby="pay">
  <div class="wrap split">
    <h2 id="pay">${c.payH}</h2>
    <div><p>${c.payP}</p>
      <div class="table-wrap"><table class="cmp cmp-pay"><caption class="visually-hidden">${c.payH}</caption><tbody>${pay}</tbody></table></div>
      <p class="srcs">${srcs(c.paySrc)}</p><p class="small muted">${c.note}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="app">
  <div class="wrap split">
    <div><h2 id="app">${c.appH}</h2><p><a class="more" href="${href('start', lang)}">${c.appLink}</a></p></div>
    <ul class="steps">${app}</ul>
  </div>
</section>

<section class="band" aria-labelledby="qa">
  <div class="wrap">
    <h2 id="qa">${c.qaH}</h2>
    <div class="qa-grid">${qa}</div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'Ratgeber Wochenende' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body, jsonld };
}
