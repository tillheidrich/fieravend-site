/**
 * Switch from myTime. Wiki: the myTime backup format is not decoded yet, so only CSV is promised.
 * "myTime" is used only descriptively: no logo, no price comparison.
 */
import { waitlist, href } from '../layout.mjs';

const C = {
  de: {
    title: 'Von myTime zu Fieravend wechseln: Umzug mit CSV',
    desc: 'Du nutzt myTime und willst wechseln? Nimm deine Einträge als CSV mit und trag deinen aktuellen Überstunden- und Urlaubsstand als Startwert ein.',
    label: 'Umzug von myTime',
    h1: 'Bring deine myTime-Daten mit.',
    lede: 'Du musst nicht von vorn anfangen. Deine Einträge kommen als CSV-Datei mit, und deinen Stand an Überstunden und Resturlaub übernimmst du als Startwert.',
    stepsH: 'So geht der Umzug',
    steps: [
      ['In myTime exportieren', 'Mach in myTime einen Export als CSV-Datei und teile sie mit Fieravend.'],
      ['Datei öffnen', 'Fieravend zeigt dir, wie viele Einträge es gefunden hat und aus welchem Zeitraum.'],
      ['Jobs und Typen zuordnen', 'Du sagst, welche Jobs zusammengehören und wie Typen wie „Home Office“ bei Fieravend heißen.'],
      ['Stand prüfen', 'Stimmen Überstunden und Resturlaub? Wenn deine alte App etwas anderes gezeigt hat, passt du die Zahlen an.'],
    ],
    fallbackH: 'Wenn nicht alles passt',
    fallbackP: 'Dann trägst du einfach deinen aktuellen Überstunden- und Urlaubsstand als Startwert ein. Ab heute rechnet Fieravend weiter, und deine alten Zahlen bleiben in deiner alten App oder in der CSV-Datei.',
    aboH: 'Und dein Abo?',
    aboP: 'Kündige es in den Einstellungen deines Apple-Accounts, wenn du sicher bist, dass alles da ist. Fieravend hat kein Abo. Du testest 30 Tage lang alles und kaufst danach einmal, wenn es dir passt. Stempeln und Backup kosten bei Fieravend nie extra, auch ohne Kauf.',
    later: 'Den Import aus dem myTime-Backup bauen wir gerade. Bis er fertig ist, versprechen wir nur die CSV-Datei.',
    other: 'Du kommst aus Excel oder einer anderen App? Eine CSV-Datei mit Datum, Beginn, Ende und Pause reicht.',
    brand: 'myTime ist eine Marke ihres Inhabers. Fieravend hat mit myTime nichts zu tun.',
    price: 'Preise ansehen',
  },
  en: {
    title: 'Switching from myTime to Fieravend: move with CSV',
    desc: 'Using myTime and want to switch? Bring your entries along as CSV and enter your current overtime and leave as a starting point.',
    label: 'Switch from myTime',
    h1: 'Bring your myTime data along.',
    lede: 'You do not have to start over. Your entries come along as a CSV file, and you carry over your overtime and leave balance as a starting point.',
    stepsH: 'How to switch',
    steps: [
      ['Export from myTime', 'Export your data from myTime as a CSV file and share it with Fieravend.'],
      ['Open the file', 'Fieravend shows how many entries it found and for which period.'],
      ['Match jobs and types', 'You say which jobs belong together and what types like “Home Office” are called in Fieravend.'],
      ['Check your balance', 'Are overtime and leave right? If your old app showed something different, adjust the numbers.'],
    ],
    fallbackH: 'If something does not fit',
    fallbackP: 'Then simply enter your current overtime and leave balance as a starting point. From today Fieravend counts on, and your old numbers stay in your old app or in the CSV file.',
    aboH: 'What about your subscription?',
    aboP: 'Cancel it in your Apple account settings once you are sure everything is there. Fieravend has no subscription. You try everything for 30 days and buy once afterwards if it suits you. Clocking in and backup never cost extra in Fieravend, even without buying.',
    later: 'We are working on importing the myTime backup. Until that is done, we only promise the CSV file.',
    other: 'Coming from Excel or another app? A CSV file with date, start, end and break is enough.',
    brand: 'myTime is a trademark of its owner. Fieravend is not related to myTime.',
    price: 'See pricing',
  },
};

export default function mytime(lang) {
  const c = C[lang];
  const steps = c.steps.map(([h, p]) => `<li><b>${h}</b><span>${p}</span></li>`).join('');
  const body = `
<section class="page-head">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
    </div>
    <div class="head-art"><div class="move" aria-hidden="true"><span class="move-file num">mytime-export.csv</span><svg class="move-arrow" viewBox="0 0 48 24" focusable="false"><line x1="2" y1="12" x2="44" y2="12"/><polyline points="36,4 44,12 36,20"/></svg><span class="move-to">${'214 ' + (lang === 'de' ? 'Einträge' : 'entries')}<b class="plus num">+12:40</b></span></div></div>
  </div>
</section>

<section class="band">
  <div class="wrap split">
    <h2>${c.stepsH}</h2>
    <div><ol class="steps steps-num">${steps}</ol><p class="small muted">${c.later}</p></div>
  </div>
</section>

<section class="band zig">
  <div class="wrap two-col">
    <div><h2>${c.fallbackH}</h2><p>${c.fallbackP}</p><p>${c.other}</p></div>
    <div><h2>${c.aboH}</h2><p>${c.aboP}</p><p><a class="more" href="${href('preise', lang)}">${c.price}</a></p></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'mytime' })}<p class="small muted">${c.brand}</p></div>
</section>`;
  return { title: c.title, desc: c.desc, body };
}
