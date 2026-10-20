/**
 * Main page for the core audience (decision 18.10.2026): employees whose employer has no time tracking.
 * Legal state with court file numbers; [offen] whether the German law with details has been passed, check regularly.
 */
import { proofSheet, hintFragment } from '../screens.mjs';
import { waitlist, stand, href } from '../layout.mjs';

const C = {
  de: {
    title: 'Arbeitszeit selbst erfassen, wenn der Betrieb es nicht tut',
    desc: 'Keine Stechuhr, keine Software, nur ein Zettel oder gar nichts? Mit Fieravend führst du deinen eigenen Stundenzettel auf dem iPhone und hast am Monatsende einen sauberen Nachweis.',
    label: 'Wenn dein Betrieb kein System hat',
    h1: 'Dein Chef schreibt nichts auf? Dann schreib du.',
    lede: 'In vielen kleinen Betrieben gibt es keine Stechuhr und keine Software. Die Stunden stehen dann bestenfalls auf einem Zettel, oder nirgends. Fieravend ist dein eigener Stundenzettel. Du stempelst mit einem Tipp, die App rechnet dein Plus und Minus, Urlaub und Feiertage. Wenn es Fragen gibt, zeigst du einen sauberen Monatsnachweis.',
    stepsH: 'So fängst du an',
    steps: [
      ['Job anlegen', 'Ein Name reicht, zum Beispiel „Werkstatt Nord“. Er steht später auf deinem Stundenzettel.'],
      ['Soll eintragen', 'Wie viele Stunden du laut Vertrag arbeitest. Pro Woche, pro Tag oder je Wochentag verschieden.'],
      ['Bundesland wählen', 'Dann trägt Fieravend deine Feiertage ein. In Österreich und der Schweiz geht das genauso.'],
      ['Startwert setzen', 'Hast du schon Überstunden oder Resturlaub? Trag deinen Stand ein, dann stimmt die Rechnung ab heute.'],
    ],
    proofH: 'Ein Nachweis, den man lesen kann',
    proofP: 'Am Monatsende machst du aus deinen Einträgen einen Stundenzettel als PDF. Darauf steht jeder Tag mit Beginn, Ende, Pause und Arbeitszeit. Was du später nachgetragen hast, ist gekennzeichnet. Ein Änderungsprotokoll ist dabei. Das macht deinen Nachweis glaubwürdiger, weil man sieht, wann etwas eingetragen wurde.',
    proofNote: 'Ob dein Arbeitgeber oder ein Gericht deine Aufzeichnung anerkennt, hängt vom Einzelfall ab. Fieravend ist keine Rechtsberatung.',
    qa: [
      ['Darf ich das, wenn mein Chef es nicht verlangt?', 'Ja. Du schreibst deine eigene Arbeitszeit auf, für dich. Niemand muss zustimmen.'],
      ['Sieht mein Chef, was ich eintrage?', 'Nein. Nur du siehst deine Einträge. Teilen tust du nur, was du selbst als PDF oder CSV verschickst.'],
      ['Und wenn ich mal vergesse zu stempeln?', 'Trag die Zeit später nach. Fieravend erinnert dich abends, wenn du noch eingestempelt bist, und markiert nachgetragene Zeiten.'],
    ],
    lawH: 'Was das Recht dazu sagt',
    law: [
      ['EU', 'Der Europäische Gerichtshof hat 2019 entschieden, dass Arbeitgeber ein System zur Erfassung der täglichen Arbeitszeit einrichten müssen.', 'EuGH, Urteil vom 14.05.2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18'],
      ['Deutschland', 'Das Bundesarbeitsgericht hat daraus abgeleitet, dass Arbeitgeber in Deutschland die Arbeitszeit schon heute erfassen müssen. Die Einzelheiten soll ein Gesetz regeln.', 'BAG, Beschluss vom 13.09.2022, 1 ABR 22/21', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['Österreich', 'Arbeitgeber müssen Aufzeichnungen über die geleisteten Arbeitsstunden führen.', '§ 26 Arbeitszeitgesetz (AZG)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
      ['Schweiz', 'Arbeitgeber müssen die Arbeits- und Ruhezeiten verzeichnen, mit Ausnahmen für bestimmte Gruppen.', 'Art. 46 ArG, Art. 73 ArGV 1', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/de#art_46'],
    ],
    lawNote: 'Dass dein Betrieb es nicht tut, ändert nichts daran, dass du deine Zeit selbst festhalten darfst. Ein zeitnah geführter Nachweis hilft dir fast immer mehr als keiner.',
    src: 'Quelle',
    calc: 'Kurz nachrechnen, wie viele Überstunden diese Woche zusammenkommen',
  },
  en: {
    title: 'Record your own working hours when your employer does not',
    desc: 'No time clock, no software, just a note or nothing at all? With Fieravend you keep your own time sheet on the iPhone and have a clean record at the end of the month.',
    label: 'When your workplace has no system',
    h1: 'Your boss does not write it down? Then you do.',
    lede: 'Many small businesses have no time clock and no software. Hours end up on a piece of paper at best, or nowhere. Fieravend is your own time sheet. You clock in with one tap, and the app works out your plus and minus, leave and public holidays. If questions come up, you show a clean monthly record.',
    stepsH: 'How to start',
    steps: [
      ['Add your job', 'A name is enough, for example “Werkstatt Nord”. It appears on your time sheet later.'],
      ['Enter your contract hours', 'How many hours your contract says. Per week, per day or different for each weekday.'],
      ['Pick your state', 'Then Fieravend adds your public holidays. Austria and Switzerland work the same way.'],
      ['Set a starting point', 'Already have overtime or leave left? Enter where you stand, and the numbers are right from today.'],
    ],
    proofH: 'A record people can read',
    proofP: 'At the end of the month you turn your entries into a time sheet as a PDF. It lists every day with start, end, break and hours. Anything you added later is marked. A change log is included. That makes your record more credible, because it shows when something was entered.',
    proofNote: 'Whether your employer or a court accepts your record depends on the case. Fieravend is not legal advice.',
    qa: [
      ['Am I allowed to do this if my boss does not ask for it?', 'Yes. You write down your own working time, for yourself. Nobody has to agree.'],
      ['Does my boss see what I enter?', 'No. Only you see your entries. You share only what you send yourself as PDF or CSV.'],
      ['What if I forget to clock in?', 'Add the time later. Fieravend reminds you in the evening if you are still clocked in, and marks times you added later.'],
    ],
    lawH: 'What the law says',
    law: [
      ['EU', 'In 2019 the Court of Justice of the EU ruled that employers must set up a system that records daily working time.', 'CJEU, judgment of 14 May 2019, C-55/18', 'https://curia.europa.eu/juris/liste.jsf?num=C-55/18&language=en'],
      ['Germany', 'The Federal Labour Court concluded that employers in Germany must already record working time. A law is to settle the details.', 'BAG, decision of 13 Sept 2022, 1 ABR 22/21', 'https://www.bundesarbeitsgericht.de/entscheidung/1-abr-22-21/'],
      ['Austria', 'Employers must keep records of the hours worked.', '§ 26 Arbeitszeitgesetz (AZG)', 'https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008238&Paragraf=26'],
      ['Switzerland', 'Employers must record working and rest times, with exceptions for some groups.', 'Art. 46 ArG, Art. 73 ArGV 1', 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/en#art_46'],
    ],
    lawNote: 'Your employer not doing it does not stop you from recording your own time. A record kept at the time almost always helps you more than none.',
    src: 'Source',
    calc: 'Work out how much overtime you have this week',
  },
};

export default function kleinbetrieb(lang) {
  const c = C[lang];
  const steps = c.steps.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const qa = c.qa.map(([q, a]) => `<div class="qa"><h3>${q}</h3><p>${a}</p></div>`).join('');
  const law = c.law.map(([k, p, src, url]) => `<li><b>${k}</b><span>${p}</span><a class="src" href="${url}">${c.src}: ${src}</a></li>`).join('');
  const body = `
<section class="page-head">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
    <div class="head-art">${hintFragment(lang)}</div>
  </div>
</section>

<section class="band" aria-labelledby="start">
  <div class="wrap split">
    <h2 id="start">${c.stepsH}</h2>
    <ol class="steps steps-num">${steps}</ol>
  </div>
</section>

<section class="band zig" aria-labelledby="proof">
  <div class="wrap zig-grid">
    <div class="zig-text">
      <h2 id="proof">${c.proofH}</h2>
      <p>${c.proofP}</p>
      <p class="small muted">${c.proofNote}</p>
    </div>
    <div class="zig-art">${proofSheet(lang, { crop: true })}</div>
  </div>
</section>

<section class="band" aria-label="${lang === 'de' ? 'Fragen' : 'Questions'}">
  <div class="wrap qa-grid">${qa}</div>
</section>

<section class="band law" aria-labelledby="law">
  <div class="wrap split">
    <div><h2 id="law">${c.lawH}</h2><p class="small muted">${stand(lang)}</p></div>
    <div><ul class="rules rules-wide">${law}</ul><p>${c.lawNote}</p>
    <p><a class="more" href="${href('rechner', lang)}">${c.calc}</a></p></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'kleinbetrieb' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body };
}
