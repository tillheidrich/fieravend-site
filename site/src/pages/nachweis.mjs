/**
 * Guide "Überstunden nachweisen" (/ratgeber/ueberstunden-nachweisen/, /en/guide/prove-overtime/). Search and AI-answer
 * intent: "Überstunden nachweisen", "Überstunden beweisen ohne Zeiterfassung", "Beweislast Überstunden".
 * Answer first, then who has to prove what (BAG 5 AZR 359/21), what a good record contains, deadlines, and the app.
 * Legal state checked 20.10.2026; every claim has a source. Not legal advice.
 */
import { waitlist, href, ORG } from '../layout.mjs';
import { SITE, ROUTES, PROVIDER } from '../config.mjs';

const C = {
  de: {
    title: 'Überstunden nachweisen ohne Zeiterfassung im Betrieb',
    desc: 'Wer Überstunden bezahlt haben will, muss sie nachweisen. So führst du einen Nachweis, der trägt: was hinein gehört, wer was beweisen muss, welche Fristen gelten.',
    h1: 'Überstunden nachweisen',
    sumH: 'Kurz gesagt',
    sum: 'Willst du Überstunden bezahlt oder ausgeglichen haben, musst du im Streit zeigen, an welchen Tagen du wie lange gearbeitet hast und dass dein Arbeitgeber die Mehrarbeit angeordnet, gebilligt oder geduldet hat. Daran hat auch die Pflicht zur Zeiterfassung nichts geändert. Am besten hilft ein Stundenzettel, den du jeden Tag selbst führst: mit Beginn, Ende, Pause und einer kurzen Notiz, wer die Mehrarbeit wollte.',
    stand: 'Rechtsstand: 20.10.2026 · Von Till Heidrich, Heidrich Digital · Keine Rechtsberatung',
    whoH: 'Wer muss was beweisen?',
    whoP: [
      'In Deutschland bleibt es dabei: Wer Überstunden einklagt, trägt die Darlegungs- und Beweislast. Du musst zeigen, dass du über die normale Arbeitszeit hinaus gearbeitet hast, und dass dein Arbeitgeber das veranlasst hat oder es ihm zuzurechnen ist. So hat es das Bundesarbeitsgericht 2022 entschieden.',
      'Das Urteil des Europäischen Gerichtshofs von 2019 verpflichtet Arbeitgeber zwar, die Arbeitszeit zu erfassen. Für die Bezahlung von Überstunden hat das Bundesarbeitsgericht daraus aber keine Umkehr der Beweislast abgeleitet. Hat dein Betrieb kein System, ist dein eigener Nachweis deshalb umso wichtiger.',
    ],
    whoSrc: [['BAG, Urteil vom 04.05.2022, 5 AZR 359/21', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'], ['EuGH, Urteil vom 14.05.2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18'], ['BAG, Beschluss vom 13.09.2022, 1 ABR 22/21', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/']],
    whatH: 'Was in deinen Nachweis gehört',
    what: [
      ['Jeder Tag einzeln', 'Datum, Beginn, Ende und Pausen. Nicht nur eine Summe pro Woche.'],
      ['Zeitnah aufgeschrieben', 'Am selben Tag, nicht Wochen später aus dem Gedächtnis. Was du nachträgst, sollte als nachgetragen erkennbar sein.'],
      ['Wer die Mehrarbeit wollte', 'Eine kurze Notiz: „Chefin bat um Inventur“, „Kollege krank, Spätdienst übernommen“. Das zeigt, dass der Arbeitgeber davon wusste.'],
      ['Ort und Aufgabe', 'Bei mehreren Jobs oder Einsatzorten: wo und woran du gearbeitet hast.'],
      ['Nachvollziehbare Änderungen', 'Wenn du etwas korrigierst, sollte man sehen, was vorher dastand und wann du es geändert hast.'],
      ['Belege dazu', 'Mails, Nachrichten, Dienstpläne oder Schlüsselprotokolle, die deine Zeiten stützen.'],
    ],
    dueH: 'Fristen, die du kennen solltest',
    due: [
      ['Ausschlussfristen', 'Viele Arbeits- und Tarifverträge verlangen, dass du Ansprüche innerhalb einer kurzen Frist schriftlich geltend machst, oft drei Monate. Schau in deinen Vertrag.', '', ''],
      ['Verjährung in Deutschland', 'Ansprüche auf Lohn verjähren in drei Jahren, gerechnet ab dem Ende des Jahres, in dem sie entstanden sind.', '§§ 195, 199 BGB', 'https://www.gesetze-im-internet.de/bgb/__195.html'],
      ['Österreich', 'Entgeltansprüche verjähren in drei Jahren. Kollektivverträge haben oft kürzere Verfallsfristen.', '§ 1486 ABGB', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622&Paragraf=1486'],
      ['Schweiz', 'Lohnforderungen aus dem Arbeitsverhältnis, dazu zählt die Vergütung von Überstunden, verjähren in fünf Jahren. Überstunden regelt Art. 321c OR.', 'Art. 128 Ziff. 3 OR', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_128'],
    ],
    appH: 'So hilft dir Fieravend dabei',
    app: [
      'Einstempeln mit einem Tipp, auch vom Sperrbildschirm. Jeder Tag mit Beginn, Ende und Pause.',
      'Nachgetragene Zeiten sind markiert, Änderungen stehen in einem Protokoll.',
      'Notizen zu jedem Block, mit Vorlagen für Sätze, die du oft brauchst.',
      'Am Monatsende ein Stundenzettel als PDF mit Prüfsumme, den du ausdrucken oder verschicken kannst.',
    ],
    appLink: 'Wie Fieravend funktioniert',
    calc: 'Überstunden einer Woche nachrechnen',
    note: 'Dieser Text erklärt die Rechtslage allgemein und ersetzt keine Beratung. Im Streitfall helfen Gewerkschaft, Arbeitnehmerkammer (AT) oder eine Fachanwältin für Arbeitsrecht.',
    src: 'Quelle',
  },
  en: {
    title: 'How to prove overtime when your employer does not track time',
    desc: 'If you want overtime paid, you have to prove it. How to keep a record that holds up: what goes in it, who has to prove what, and which deadlines apply.',
    h1: 'Proving overtime',
    sumH: 'In short',
    sum: 'If you want overtime paid or balanced, in a dispute you have to show on which days you worked how long, and that your employer ordered, approved or tolerated the extra work. The duty to record working time has not changed that. What helps most is a time sheet you keep yourself every day: start, end, break and a short note on who wanted the extra work.',
    stand: 'Legal state: 20 October 2026 · By Till Heidrich, Heidrich Digital · Not legal advice',
    whoH: 'Who has to prove what?',
    whoP: [
      'In Germany it stays the same: whoever sues for overtime carries the burden of proof. You have to show that you worked beyond your normal hours and that your employer caused it or is responsible for it. That is what the Federal Labour Court decided in 2022.',
      'The 2019 judgment of the Court of Justice of the EU obliges employers to record working time. For paying overtime, however, the Federal Labour Court did not reverse the burden of proof. If your workplace has no system, your own record matters all the more.',
    ],
    whoSrc: [['BAG, judgment of 4 May 2022, 5 AZR 359/21', 'https://www.bundesarbeitsgericht.de/entscheidung/5-azr-359-21/'], ['CJEU, judgment of 14 May 2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18&language=en'], ['BAG, decision of 13 Sept 2022, 1 ABR 22/21', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/']],
    whatH: 'What belongs in your record',
    what: [
      ['Every day on its own', 'Date, start, end and breaks. Not just a weekly total.'],
      ['Written down at the time', 'The same day, not weeks later from memory. Anything added later should be recognisable as such.'],
      ['Who wanted the extra work', 'A short note: “Manager asked for stocktaking”, “colleague ill, covered late shift”. It shows your employer knew.'],
      ['Place and task', 'With several jobs or sites: where and on what you worked.'],
      ['Traceable changes', 'If you correct something, it should show what was there before and when you changed it.'],
      ['Supporting evidence', 'Emails, messages, rotas or key logs that back up your times.'],
    ],
    dueH: 'Deadlines you should know',
    due: [
      ['Exclusion periods', 'Many employment contracts and collective agreements require you to claim in writing within a short period, often three months. Check your contract.', '', ''],
      ['Limitation in Germany', 'Wage claims become time-barred after three years, counted from the end of the year in which they arose.', '§§ 195, 199 BGB', 'https://www.gesetze-im-internet.de/bgb/__195.html'],
      ['Austria', 'Pay claims become time-barred after three years. Collective agreements often have shorter periods.', '§ 1486 ABGB', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001622&Paragraf=1486'],
      ['Switzerland', 'Wage claims from employment, including overtime pay, become time-barred after five years. Overtime is governed by Art. 321c CO.', 'Art. 128 no. 3 CO', 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/en#art_128'],
    ],
    appH: 'How Fieravend helps',
    app: [
      'Clock in with one tap, even from the lock screen. Every day with start, end and break.',
      'Times added later are marked, changes are kept in a log.',
      'A note on every block, with templates for sentences you need often.',
      'At the end of the month a PDF time sheet with a checksum to print or send.',
    ],
    appLink: 'How Fieravend works',
    calc: 'Work out a week’s overtime',
    note: 'This text explains the law in general and is not advice. In a dispute, a union, the Chamber of Labour (Austria) or an employment lawyer can help.',
    src: 'Source',
  },
};

export default function nachweis(lang) {
  const c = C[lang];
  const who = c.whoP.map((p) => `<p>${p}</p>`).join('');
  const whoSrc = c.whoSrc.map(([t, u]) => `<a class="src" href="${u}">${c.src}: ${t}</a>`).join('');
  const what = c.what.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const due = c.due.map(([h, p, s, u]) => `<li><b>${h}</b><span>${p}</span>${u ? `<a class="src" href="${u}">${c.src}: ${s}</a>` : ''}</li>`).join('');
  const app = c.app.map((x) => `<li>${x}</li>`).join('');
  const url = SITE + ROUTES.nachweis[lang];
  const jsonld = [
    { '@type': 'Article', headline: c.title, description: c.desc, inLanguage: lang, url, mainEntityOfPage: url,
      datePublished: '2026-10-20', dateModified: '2026-10-20', author: { '@type': 'Person', name: PROVIDER.name, url: PROVIDER.web },
      publisher: { '@id': ORG['@id'] }, about: lang === 'de' ? ['Überstunden', 'Arbeitszeiterfassung', 'Beweislast'] : ['overtime', 'working time records', 'burden of proof'],
      citation: c.whoSrc.map(([, u]) => u) },
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

<section class="band band-tight" aria-labelledby="who">
  <div class="wrap split">
    <h2 id="who">${c.whoH}</h2>
    <div class="prose">${who}<p class="srcs">${whoSrc}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="what">
  <div class="wrap split">
    <h2 id="what">${c.whatH}</h2>
    <ol class="steps steps-num">${what}</ol>
  </div>
</section>

<section class="band" aria-labelledby="due">
  <div class="wrap split">
    <h2 id="due">${c.dueH}</h2>
    <div><ul class="steps">${due}</ul><p class="small muted">${c.note}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="app">
  <div class="wrap split">
    <div><h2 id="app">${c.appH}</h2><p><a class="more" href="${href('start', lang)}">${c.appLink}</a></p><p><a class="more" href="${href('rechner', lang)}">${c.calc}</a></p></div>
    <div><ul class="steps">${app}</ul></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'Ratgeber Überstunden' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body, jsonld };
}
