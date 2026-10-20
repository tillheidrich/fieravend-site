/**
 * Feierabend calculator (/rechner/feierabend/, /en/calculator/finish-time/). Search intent "Feierabend Rechner",
 * "wann habe ich Feierabend", "Arbeitszeitrechner": the answer first (start + hours + legal break), the live clock with
 * country, the break rules with sources, short questions. Same break rules as rechner.js. Stores nothing.
 */
import { waitlist, stand, href, ORG } from '../layout.mjs';
import { SITE, ROUTES, STAND } from '../config.mjs';
import { feierabendClock } from '../feierabend.mjs';

const C = {
  de: {
    title: 'Feierabend-Rechner: Wann habe ich heute Feierabend?',
    desc: 'Feierabend berechnen: Arbeitsbeginn und Soll eingeben, der Rechner zählt die gesetzliche Pause dazu (Deutschland, Österreich, Schweiz, EU). Läuft im Browser, speichert nichts.',
    h1: 'Feierabend-Rechner',
    lede: 'Feierabend = Arbeitsbeginn + Soll + Pause. Wer um 7:58 anfängt und 7:48 Stunden arbeiten muss, hat mit 30 Minuten Pause um 16:16 Feierabend.',
    privacy: 'Läuft nur in deinem Browser. Nichts wird gespeichert oder verschickt.',
    howH: 'So rechnest du deinen Feierabend',
    how: [
      ['Beginn nehmen', 'Die Uhrzeit, zu der du angefangen hast, zum Beispiel 7:58.'],
      ['Soll dazuzählen', 'Deine Arbeitszeit für heute laut Vertrag. Bei 39 Stunden in 5 Tagen sind das 7:48 pro Tag.'],
      ['Pause dazuzählen', 'Die Pause zählt nicht als Arbeitszeit, also kommt sie oben drauf. Wie lang sie sein muss, regelt das Gesetz deines Landes.'],
    ],
    rulesH: 'Wie lang die Pause sein muss',
    rules: [
      ['Deutschland', 'Mehr als 6 Stunden Arbeit: 30 Minuten. Mehr als 9 Stunden: 45 Minuten. Aufteilen geht in Abschnitte von mindestens 15 Minuten.', '§ 4 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Österreich', 'Mehr als 6 Stunden Arbeit: 30 Minuten.', '§ 11 AZG', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Schweiz', 'Mehr als 5½ Stunden: 15 Minuten. Mehr als 7 Stunden: 30 Minuten. Mehr als 9 Stunden: 60 Minuten.', 'Art. 15 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_15'],
      ['Andere EU-Länder', 'Ab mehr als 6 Stunden steht dir eine Pause zu. Wie lang, regelt dein Land. Der Rechner nimmt dann 30 Minuten an.', 'Art. 4 RL 2003/88/EG', 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003L0088'],
    ],
    qaH: 'Kurz gefragt',
    qa: [
      ['Zählt die Pause zur Arbeitszeit?', 'Nein. Ruhepausen sind keine Arbeitszeit. Darum verschiebt die Pause deinen Feierabend nach hinten.'],
      ['Wann muss ich spätestens Pause machen?', 'In Deutschland darfst du nicht länger als 6 Stunden am Stück ohne Pause arbeiten (§ 4 ArbZG).'],
      ['Wie lange darf ich höchstens arbeiten?', 'In Deutschland 8 Stunden am Werktag, bis zu 10 Stunden, wenn es im Schnitt von 6 Monaten bei 8 bleibt (§ 3 ArbZG).'],
      ['Und wenn ich länger bleibe?', 'Dann machst du Plusstunden. Wie viele es in der Woche sind, rechnet der Überstundenrechner aus.'],
    ],
    calcLink: 'Zum Überstundenrechner',
    app: 'Fieravend macht das jeden Tag von selbst: einstempeln, und die App zeigt dir, wie viel noch fehlt und wann Feierabend ist.',
    appLink: 'So funktioniert die App',
    src: 'Quelle',
    advice: 'Der Rechner gibt Hinweise und ersetzt keine Rechtsberatung. Tarifverträge und Betriebsvereinbarungen können andere Regeln haben.',
  },
  en: {
    title: 'Finish-time calculator: when can I leave work today?',
    desc: 'Work out when you finish: enter your start time and hours, the calculator adds the legal break (Germany, Austria, Switzerland, EU). Runs in your browser, stores nothing.',
    h1: 'Finish-time calculator',
    lede: 'Finish time = start + contract hours + break. If you start at 7:58 and work 7:48 hours, a 30 minute break means you finish at 16:16.',
    privacy: 'Runs only in your browser. Nothing is stored or sent.',
    howH: 'How to work out your finish time',
    how: [
      ['Take your start', 'The time you started, for example 7:58.'],
      ['Add your hours', 'Today’s hours from your contract. 39 hours over 5 days is 7:48 a day.'],
      ['Add the break', 'Breaks are not working time, so they come on top. How long it has to be depends on your country’s law.'],
    ],
    rulesH: 'How long the break has to be',
    rules: [
      ['Germany', 'More than 6 hours of work: 30 minutes. More than 9 hours: 45 minutes. It can be split into parts of at least 15 minutes.', '§ 4 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Austria', 'More than 6 hours of work: 30 minutes.', '§ 11 AZG', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Switzerland', 'More than 5½ hours: 15 minutes. More than 7 hours: 30 minutes. More than 9 hours: 60 minutes.', 'Art. 15 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/en#art_15'],
      ['Other EU countries', 'After more than 6 hours you are owed a break; your country sets how long. The calculator then assumes 30 minutes.', 'Art. 4 Directive 2003/88/EC', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088'],
    ],
    qaH: 'Quick questions',
    qa: [
      ['Does the break count as working time?', 'No. Rest breaks are not working time, which is why the break moves your finish time later.'],
      ['When do I have to take a break at the latest?', 'In Germany you may not work more than 6 hours in a row without a break (§ 4 ArbZG).'],
      ['How long may I work at most?', 'In Germany 8 hours on a working day, up to 10 if it averages 8 over 6 months (§ 3 ArbZG).'],
      ['What if I stay longer?', 'Then you build up extra hours. The overtime calculator adds them up for the week.'],
    ],
    calcLink: 'Go to the overtime calculator',
    app: 'Fieravend does this every day by itself: clock in, and the app shows how much is left and when you can leave.',
    appLink: 'How the app works',
    src: 'Source',
    advice: 'The calculator gives hints and is not legal advice. Collective agreements and works agreements may have other rules.',
  },
};

export default function feierabend(lang) {
  const c = C[lang];
  const how = c.how.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const rules = c.rules.map(([k, p, s, u]) => `<li><b>${k}</b><span>${p}</span><a class="src" href="${u}">${c.src}: ${s}</a></li>`).join('');
  const qa = c.qa.map(([q, a]) => `<div class="qa"><h3>${q}</h3><p>${a}</p></div>`).join('');
  const url = SITE + ROUTES.feierabend[lang];
  const jsonld = [
    { '@type': 'WebApplication', name: c.h1, url, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', inLanguage: lang, isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, publisher: { '@id': ORG['@id'] }, description: c.desc },
    { '@type': 'FAQPage', inLanguage: lang, mainEntity: c.qa.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ORG,
  ];
  const body = `
<section class="page-head page-head-tight">
  <div class="wrap head-grid">
    <div>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
      <p class="privacy-note">${c.privacy}</p>
    </div>
    <div class="head-art">${feierabendClock(lang, { country: true })}</div>
  </div>
</section>

<section class="band" aria-labelledby="how">
  <div class="wrap split">
    <h2 id="how">${c.howH}</h2>
    <ol class="steps steps-num">${how}</ol>
  </div>
</section>

<section class="band law" aria-labelledby="rules">
  <div class="wrap split">
    <div><h2 id="rules">${c.rulesH}</h2><p class="small muted">${stand(lang)}</p></div>
    <div><ul class="rules">${rules}</ul><p class="small muted">${c.advice}</p></div>
  </div>
</section>

<section class="band" aria-labelledby="qa">
  <div class="wrap">
    <h2 id="qa">${c.qaH}</h2>
    <div class="qa-grid">${qa}</div>
    <p><a class="more" href="${href('rechner', lang)}">${c.calcLink}</a></p>
  </div>
</section>

<section class="band">
  <div class="wrap narrow"><p class="lede">${c.app} <a href="${href('start', lang)}">${c.appLink}</a></p>${waitlist(lang, { source: 'Feierabend-Rechner' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body, scripts: ['/assets/start.js'], jsonld, modified: STAND.iso };
}
