/**
 * Overtime calculator (/rechner/ueberstunden/, /en/calculator/overtime/). One question, one result with the
 * working, date and source, then one sentence about the app. Runs in the browser (assets/rechner.js), stores nothing.
 * Wiki "Website fieravend.de", Rechner: Ist − Soll per week; example 5 × 8:30 at 40 h = +2:30.
 * Break rules per country: DE § 4 ArbZG, AT § 11 AZG, CH Art. 15 ArG, EU Art. 4 RL 2003/88/EG.
 */
import { waitlist, stand, href, ORG } from '../layout.mjs';
import { SITE, ROUTES } from '../config.mjs';

const DAYS = { de: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'], en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] };
const SHORT = { de: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], en: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] };

const C = {
  de: {
    title: 'Überstundenrechner: Überstunden pro Woche berechnen',
    desc: 'Überstunden für eine Woche berechnen: Beginn, Ende und Pause je Tag eintragen, Soll pro Woche angeben, fertig. Mit Rechenweg und Pausen-Hinweis. Läuft im Browser und speichert nichts.',
    label: 'Rechner',
    h1: 'Überstunden berechnen',
    lede: 'Trag für jeden Tag ein, wann du angefangen und aufgehört hast und wie lang die Pause war. Der Rechner zieht dein Soll ab und zeigt dir dein Plus oder Minus für die Woche.',
    privacy: 'Läuft nur in deinem Browser. Nichts wird gespeichert oder verschickt.',
    soll: 'Soll pro Woche', sollHelp: 'In Stunden, wie im Arbeitsvertrag. Zum Beispiel 40 oder 38,5.', hours: 'Stunden',
    country: 'Land für den Pausen-Hinweis', countries: [['de', 'Deutschland'], ['at', 'Österreich'], ['ch', 'Schweiz'], ['eu', 'anderes EU-Land']],
    cols: ['Tag', 'Beginn', 'Ende', 'Pause in Minuten'],
    weekCap: 'Deine Woche. Leere Tage zählen nicht.',
    calc: 'Rechnen', reset: 'Leeren',
    result: 'Ergebnis',
    noscript: 'Der Rechner braucht JavaScript. Rechnen kannst du auch von Hand: Für jeden Tag Ende minus Beginn minus Pause, alle Tage zusammenzählen, dann das Soll der Woche abziehen.',
    howH: 'So rechnet der Rechner',
    how: [
      'Für jeden Tag: Ende minus Beginn minus Pause. Liegt das Ende vor dem Beginn, rechnet der Rechner über Mitternacht.',
      'Alle Tage zusammen ergeben dein Ist der Woche.',
      'Ist minus Soll ergibt dein Plus oder Minus.',
    ],
    exH: 'Beispiel',
    ex: 'Fünf Tage von 8:00 bis 17:00 Uhr mit 30 Minuten Pause sind je 8:30 Stunden, zusammen 42:30. Bei 40 Stunden Soll bleiben +2:30 Plus.',
    exNum: '5 × 8:30 − 40:00 = +2:30',
    holiday: 'Feiertag, Urlaub oder krank in dieser Woche? Dann zieh diese Tage vom Soll ab, zum Beispiel bei 40 Stunden und einem Feiertag 32 Stunden.',
    srcH: 'Pausen-Regeln und Quellen',
    src: [
      ['Deutschland', 'Mehr als 6 Stunden: 30 Minuten, mehr als 9 Stunden: 45 Minuten.', '§ 4 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Österreich', 'Mehr als 6 Stunden: 30 Minuten.', '§ 11 AZG', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Schweiz', 'Mehr als 5½ Stunden: 15 Minuten, mehr als 7 Stunden: 30 Minuten, mehr als 9 Stunden: 60 Minuten.', 'Art. 15 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_15'],
      ['EU', 'Ab mehr als 6 Stunden steht dir eine Pause zu, die Länge regelt dein Land.', 'Art. 4 RL 2003/88/EG', 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32003L0088'],
    ],
    srcLabel: 'Quelle',
    advice: 'Der Rechner gibt Hinweise und ersetzt keine Rechtsberatung. Tarifverträge und Betriebsvereinbarungen können andere Regeln haben.',
    app: 'Jede Woche neu rechnen musst du mit Fieravend nicht. Die App zählt dein Plus und Minus über Wochen und Monate mit.',
    appLink: 'Wie Fieravend das macht',
  },
  en: {
    title: 'Overtime calculator: work out a week of overtime',
    desc: 'Calculate overtime for one week: enter start, end and break for each day, add your contract hours per week, done. With the working and a break hint. Runs in your browser and stores nothing.',
    label: 'Calculator',
    h1: 'Calculate your overtime',
    lede: 'Enter for each day when you started, when you finished and how long your break was. The calculator takes off your contract hours and shows your plus or minus for the week.',
    privacy: 'Runs only in your browser. Nothing is stored or sent.',
    soll: 'Contract hours per week', sollHelp: 'In hours, as in your contract. For example 40 or 38.5.', hours: 'hours',
    country: 'Country for the break hint', countries: [['de', 'Germany'], ['at', 'Austria'], ['ch', 'Switzerland'], ['eu', 'another EU country']],
    cols: ['Day', 'Start', 'End', 'Break in minutes'],
    weekCap: 'Your week. Empty days do not count.',
    calc: 'Calculate', reset: 'Clear',
    result: 'Result',
    noscript: 'The calculator needs JavaScript. You can also do it by hand: for each day end minus start minus break, add up all days, then take off your contract hours for the week.',
    howH: 'How the calculator works',
    how: [
      'For each day: end minus start minus break. If the end is before the start, the calculator counts across midnight.',
      'All days together are your hours worked this week.',
      'Hours worked minus contract hours is your plus or minus.',
    ],
    exH: 'Example',
    ex: 'Five days from 8:00 to 17:00 with a 30 minute break are 8:30 hours each, 42:30 in total. With 40 contract hours that leaves +2:30 plus.',
    exNum: '5 × 8:30 − 40:00 = +2:30',
    holiday: 'Public holiday, leave or sick this week? Then take those days off your contract hours, for example 32 hours instead of 40 with one public holiday.',
    srcH: 'Break rules and sources',
    src: [
      ['Germany', 'More than 6 hours: 30 minutes, more than 9 hours: 45 minutes.', '§ 4 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
      ['Austria', 'More than 6 hours: 30 minutes.', '§ 11 AZG', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=11'],
      ['Switzerland', 'More than 5½ hours: 15 minutes, more than 7 hours: 30 minutes, more than 9 hours: 60 minutes.', 'Art. 15 ArG', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/en#art_15'],
      ['EU', 'From more than 6 hours you are owed a break; your country sets how long.', 'Art. 4 Directive 2003/88/EC', 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32003L0088'],
    ],
    srcLabel: 'Source',
    advice: 'The calculator gives hints and is not legal advice. Collective agreements and works agreements can have other rules.',
    app: 'With Fieravend you do not have to redo this every week. The app keeps your plus and minus across weeks and months.',
    appLink: 'How Fieravend does it',
  },
};

export default function rechner(lang) {
  const c = C[lang];
  const opts = c.countries.map(([v, l]) => `<option value="${v}"${v === 'de' ? ' selected' : ''}>${l}</option>`).join('');
  const rows = DAYS[lang].map((d, i) => {
    const work = i < 5;
    const v = (x) => (work ? ` value="${x}"` : '');
    return `<tr data-day="${i}"><th scope="row"><span class="d-long">${d}</span><span class="d-short" aria-hidden="true">${SHORT[lang][i]}</span></th>` +
      `<td><label class="visually-hidden" for="b${i}">${c.cols[1]} ${d}</label><input id="b${i}" name="b${i}" type="time"${v('08:00')}></td>` +
      `<td><label class="visually-hidden" for="e${i}">${c.cols[2]} ${d}</label><input id="e${i}" name="e${i}" type="time"${v('17:00')}></td>` +
      `<td><label class="visually-hidden" for="p${i}">${c.cols[3]} ${d}</label><input id="p${i}" name="p${i}" type="number" min="0" max="600" step="5" inputmode="numeric"${v('30')}></td></tr>`;
  }).join('');
  const how = c.how.map((x) => `<li>${x}</li>`).join('');
  const src = c.src.map(([k, p, s, u]) => `<li><b>${k}</b><span>${p}</span><a class="src" href="${u}">${c.srcLabel}: ${s}</a></li>`).join('');
  const body = `
<section class="page-head page-head-tight">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
    <p class="head-art privacy-note">${c.privacy}</p>
  </div>
</section>

<section class="band band-tight" aria-label="${c.h1}">
  <div class="wrap calc-grid">
    <form class="calc" id="calc" novalidate data-lang="${lang}">
      <div class="calc-top">
        <div class="field">
          <label for="soll">${c.soll}</label>
          <span class="with-unit"><input id="soll" name="soll" type="text" inputmode="decimal" value="40" aria-describedby="soll-help soll-err" autocomplete="off"><span>${c.hours}</span></span>
          <span class="help" id="soll-help">${c.sollHelp}</span>
          <span class="err" id="soll-err" hidden></span>
        </div>
        <div class="field">
          <label for="land">${c.country}</label>
          <select id="land" name="land">${opts}</select>
        </div>
      </div>
      <div class="table-wrap"><table class="week"><caption>${c.weekCap}</caption>
        <thead><tr>${c.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
        <tbody>${rows}</tbody></table></div>
      <p class="err" id="week-err" hidden></p>
      <p class="calc-actions"><button class="btn btn-primary" type="submit">${c.calc}</button> <button class="btn btn-quiet" type="button" data-clear hidden>${c.reset}</button></p>
    </form>
    <div class="calc-out" id="out" aria-live="polite">
      <h2 class="calc-h2">${c.result}</h2>
      <noscript><p>${c.noscript}</p></noscript>
      <div id="out-body"></div>
    </div>
  </div>
</section>

<section class="band" aria-labelledby="how">
  <div class="wrap split">
    <h2 id="how">${c.howH}</h2>
    <div><ol class="steps steps-num">${how}</ol>
      <h3>${c.exH}</h3><p class="big-num num">${c.exNum}</p><p>${c.ex}</p><p class="small muted">${c.holiday}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="src">
  <div class="wrap split">
    <div><h2 id="src">${c.srcH}</h2><p class="small muted">${stand(lang)}</p></div>
    <div><ul class="rules rules-wide">${src}</ul><p class="small muted">${c.advice}</p></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow"><p class="lede">${c.app} <a href="${href('start', lang)}">${c.appLink}</a></p>${waitlist(lang, { source: 'rechner' })}</div>
</section>`;
  const jsonld = [{ '@type': 'WebApplication', name: c.h1, url: SITE + ROUTES.rechner[lang], applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web', inLanguage: lang, isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, publisher: { '@id': ORG['@id'] }, description: c.desc }, ORG];
  return { title: c.title, desc: c.desc, body, scripts: ['/assets/rechner.js'], jsonld };
}
