/**
 * FAQ. Questions from the wiki page "Website fieravend.de", prices updated to the recommendation of 18.10.2026
 * (pricing changed by Till on 18.10.2026: 30-day trial, Plus 49,99 € once, Jahrespass 14,99 €, no subscription). Android: notification by mail only (mailto), no list software.
 */
import { MAIL } from '../config.mjs';
import { href } from '../layout.mjs';

const C = {
  de: {
    title: 'Fragen zur Arbeitszeiterfassung mit Fieravend',
    desc: 'Ist das erlaubt, sieht mein Chef meine Einträge, brauche ich ein Konto, was kostet Fieravend? Antworten auf die häufigsten Fragen.',
    label: 'Häufige Fragen',
    h1: 'Was Leute vorher wissen wollen.',
    lede: (m) => `Deine Frage fehlt? Schreib an <a href="mailto:${m}">${m}</a>.`,
    groups: [
      ['Erlaubt und privat', [
        ['Ist das erlaubt, wenn mein Chef das gar nicht verlangt?', 'Ja. Du schreibst deine eigene Arbeitszeit auf, für dich. Niemand muss zustimmen. Ob dein Arbeitgeber deine Aufzeichnung anerkennt, hängt vom Einzelfall ab. Ein zeitnah geführter Nachweis hilft dir aber fast immer mehr als keiner.'],
        ['Sieht mein Arbeitgeber, was ich eintrage?', 'Nein. Nur du siehst deine Einträge. Teilen tust du nur, was du selbst als PDF oder CSV verschickst.'],
        ['Brauche ich ein Konto?', 'Nein. Du lädst die App und fängst an. Wenn du iCloud nutzt, sind deine Daten auch auf dem iPad.'],
        ['Taugt mein Stundenzettel als Beweis?', 'Fieravend hält fest, wann du gestempelt hast und was du später geändert hast. Das macht deinen Nachweis glaubwürdiger. Ob er vor Gericht reicht, entscheidet im Streitfall das Gericht. Fieravend ist keine Rechtsberatung.'],
      ]],
      ['Kosten und Umzug', [
        ['Was kostet Fieravend?', 'Du testest 30 Tage lang alles, ohne Abo. Danach ist geplant: Plus für einmalig 49,99 €, zum Start 34,99 € bis 31.1.2027, oder ein Jahrespass für 14,99 €, der sich nicht verlängert. Ohne Kauf kannst du weiter stempeln, die letzten 7 Tage sehen und ein Backup machen. PRICES'],
        ['Ich nutze schon myTime oder Excel. Muss ich von vorn anfangen?', 'Nein. Du nimmst deine Einträge als CSV-Datei mit und trägst deinen aktuellen Überstunden- und Urlaubsstand als Startwert ein. MYTIME'],
        ['Was passiert, wenn ich mein iPhone verliere?', 'Mit iCloud sind deine Daten auf deinen anderen Geräten und kommen auf ein neues iPhone mit. Ohne iCloud mach ab und zu ein Backup. Fieravend erinnert dich daran.'],
      ]],
      ['Länder und Geräte', [
        ['Gilt Fieravend auch in Österreich und der Schweiz?', 'Ja. Fieravend rechnet Feiertage, Pausen und Ruhezeiten für Deutschland, Österreich und die Schweiz nach dem jeweiligen Gesetz. Welches Land gilt, hängt am Arbeitsort deines Jobs, nicht an der Sprache deines iPhones. In den anderen EU-Ländern nutzt Fieravend die Grundregeln der EU-Arbeitszeitrichtlinie (2003/88/EG).'],
        ['Wann kommt Fieravend in den App Store?', 'Bald. Ein Datum gibt es noch nicht. Schreib uns eine Mail, dann sagen wir dir Bescheid.'],
        ['Gibt es Fieravend für Android?', 'Noch nicht. Erst kommt das iPhone, dann sehen wir weiter. Wenn du Bescheid bekommen willst, schreib uns eine Mail mit dem Betreff „Android“.'],
      ]],
    ],
    prices: 'Preise ansehen', mytime: 'So geht der Umzug',
  },
  en: {
    title: 'FAQ · Fieravend',
    desc: 'Is it allowed, does my boss see my entries, do I need an account, what does Fieravend cost? Answers to the most common questions.',
    label: 'FAQ',
    h1: 'What people want to know first.',
    lede: (m) => `Your question is not here? Write to <a href="mailto:${m}">${m}</a>.`,
    groups: [
      ['Allowed and private', [
        ['Is this allowed if my boss does not ask for it?', 'Yes. You write down your own working time, for yourself. Nobody has to agree. Whether your employer accepts your record depends on the case. But a record kept at the time almost always helps you more than none.'],
        ['Does my employer see what I enter?', 'No. Only you see your entries. You share only what you send yourself as PDF or CSV.'],
        ['Do I need an account?', 'No. You download the app and start. If you use iCloud, your data is on your iPad too.'],
        ['Does my time sheet count as evidence?', 'Fieravend records when you clocked in and what you changed later. That makes your record more credible. Whether it is enough in court is up to the court. Fieravend is not legal advice.'],
      ]],
      ['Cost and switching', [
        ['What does Fieravend cost?', 'You try everything for 30 days, without a subscription. After that the plan is Plus for €49.99 once, €34.99 at launch until 31 Jan 2027, or a Year Pass for €14.99 that does not renew. Without buying you can still clock in, see the last 7 days and make a backup. PRICES'],
        ['I already use myTime or Excel. Do I have to start over?', 'No. You bring your entries along as a CSV file and enter your current overtime and leave balance as a starting point. MYTIME'],
        ['What happens if I lose my iPhone?', 'With iCloud your data is on your other devices and moves to a new iPhone. Without iCloud, make a backup now and then. Fieravend reminds you.'],
      ]],
      ['Countries and devices', [
        ['Does Fieravend work in Austria and Switzerland?', 'Yes. Fieravend handles public holidays, breaks and rest times for Germany, Austria and Switzerland under each country’s law. The country comes from where your job is, not from your iPhone’s language. In other EU countries Fieravend uses the basic rules of the EU Working Time Directive (2003/88/EC).'],
        ['When will Fieravend be in the App Store?', 'Soon. There is no date yet. Send us an email and we will let you know.'],
        ['Is there an Android version?', 'Not yet. The iPhone comes first, then we will see. If you want to hear about it, send us an email with the subject “Android”.'],
      ]],
    ],
    prices: 'See pricing', mytime: 'How switching works',
  },
};

export default function fragen(lang) {
  const c = C[lang];
  const fix = (a) => a.replace('PRICES', `<a href="${href('preise', lang)}">${c.prices}</a>`).replace('MYTIME', `<a href="${href('mytime', lang)}">${c.mytime}</a>`);
  const groups = c.groups.map(([g, qs], gi) => `<div class="faq-group"><h2 id="g${gi}">${g}</h2>` +
    qs.map(([q, a]) => `<details class="faq"><summary><h3>${q}</h3></summary><p>${fix(a)}</p></details>`).join('') + '</div>').join('');
  const strip = (s) => s.replace(/ (PRICES|MYTIME)$/, '');
  const jsonld = {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: lang,
    mainEntity: c.groups.flatMap(([, qs]) => qs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: strip(a) } }))),
  };
  const body = `
<section class="page-head">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede(MAIL)}</p>
    </div>
  </div>
</section>
<section class="band">
  <div class="wrap faq-wrap">${groups}</div>
</section>`;
  return { title: c.title, desc: c.desc, body, jsonld };
}
