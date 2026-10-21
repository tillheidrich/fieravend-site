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
        ['Was kostet Fieravend?', 'Du testest 30 Tage lang alles, ohne Abo. Danach ist geplant: Plus für einmalig 49,99 € oder ein Jahrespass für 14,99 €. Der Jahrespass gilt für ein Kalenderjahr, ab Oktober kaufst du ihn für das nächste Jahr. Er verlängert sich nicht von selbst. Ohne Kauf kannst du weiter stempeln, die letzten 7 Tage sehen und ein Backup machen. PRICES'],
        ['Ich nutze schon myTime oder Excel. Muss ich von vorn anfangen?', 'Nein. Du nimmst deine Einträge als CSV-Datei mit und trägst deinen aktuellen Überstunden- und Urlaubsstand als Startwert ein. MYTIME'],
        ['Was passiert, wenn ich mein iPhone verliere?', 'Mit iCloud sind deine Daten auf deinen anderen Geräten und kommen auf ein neues iPhone mit. Ohne iCloud mach ab und zu ein Backup.'],
      ]],
      ['Wochenende, Feiertage, Schicht', [
        ['Was passiert, wenn ich an einem Feiertag oder am Wochenende arbeite?', 'Ist der Tag für dich sonst frei, ist dein Soll null und jede Stunde ein Plus. Gehört der Samstag zu deinen festen Arbeitstagen, gilt dort dein normales Soll. WEEKEND'],
        ['Ich arbeite nach Dienstplan, mal montags, mal samstags. Geht das?', 'Ja. Mit dem Modell „Wechselnde Tage (Dienstplan)“ zählt dein Soll pro Woche. Du kannst deine Dienste vorab eintragen; ein Feiertag senkt dein Soll nur, wenn an dem Tag ein Dienst geplant war.'],
        ['Steht mir für einen gearbeiteten Sonntag ein freier Tag zu?', 'In Deutschland ja, ein Ersatzruhetag innerhalb von zwei Wochen, für einen Feiertag innerhalb von acht Wochen (§ 11 ArbZG). Fieravend erinnert dich daran, und du trägst ihn als „Ersatzruhetag“ ein.'],
      ]],
      ['Länder und Geräte', [
        ['Gilt Fieravend auch in Österreich und der Schweiz?', 'Ja. Fieravend rechnet Feiertage, Pausen und Ruhezeiten für Deutschland, Österreich und die Schweiz nach dem jeweiligen Gesetz, fürs Vereinigte Königreich nach den Working Time Regulations 1998. Welches Land gilt, hängt am Arbeitsort deines Jobs, nicht an der Sprache deines iPhones. In den anderen EU-Ländern nutzt Fieravend die Grundregeln der EU-Arbeitszeitrichtlinie (2003/88/EG).'],
        ['Und wenn mein Land nicht dabei ist?', 'Du wählst trotzdem dein Land als Arbeitsort. Fieravend rechnet dann mit deinen eigenen Werten: Wochenstunden, Urlaub, Feiertage (auch aus einer Kalenderdatei) und auf Wunsch eine eigene Pausenregel. Gesetzes-Hinweise gibt es dort keine, weil Fieravend das Gesetz dort nicht kennt.'],
        ['Wann kommt Fieravend in den App Store?', 'Bald. Ein Datum gibt es noch nicht. Schreib uns eine Mail, dann sagen wir dir Bescheid.'],
        ['Gibt es Fieravend für die Apple Watch und das iPad?', 'Ja. An der Apple Watch siehst du den Stand von heute und stempelst ein, machst Pause oder stempelst aus. Dazu gibt es Komplikationen fürs Zifferblatt. Deine Daten bleiben auf dem iPhone, die Uhr schickt nur deinen Tipp. Auf dem iPad hat Fieravend eine eigene Ansicht mit Seitenleiste, quer und hochkant, auch mit Stage Manager.'],
        ['Gibt es Fieravend für Android?', 'Noch nicht. Fieravend gibt es für iPhone, iPad und Apple Watch. Wenn du Bescheid bekommen willst, schreib uns eine Mail mit dem Betreff „Android“.'],
      ]],
    ],
    prices: 'Preise ansehen', mytime: 'So geht der Umzug', weekend: 'Mehr zu Wochenende und Feiertagen',
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
        ['What does Fieravend cost?', 'You try everything for 30 days, without a subscription. After that the plan is Plus for €49.99 once or a Year Pass for €14.99. The Year Pass covers one calendar year, from October you buy it for the next year. It does not renew by itself. Without buying you can still clock in, see the last 7 days and make a backup. PRICES'],
        ['I already use myTime or Excel. Do I have to start over?', 'No. You bring your entries along as a CSV file and enter your current overtime and leave balance as a starting point. MYTIME'],
        ['What happens if I lose my iPhone?', 'With iCloud your data is on your other devices and moves to a new iPhone. Without iCloud, make a backup now and then.'],
      ]],
      ['Weekends, holidays, shifts', [
        ['What if I work on a public holiday or at the weekend?', 'If the day would otherwise be off, your target is zero and every hour is plus. If Saturday is one of your fixed working days, your normal target applies there. WEEKEND'],
        ['I work to a rota, sometimes Mondays, sometimes Saturdays. Does that work?', 'Yes. With the “Changing days (rota)” model your target counts per week. You can enter your shifts in advance; a public holiday only lowers your target if a shift was planned that day.'],
        ['Do I get a day off for a Sunday I worked?', 'In Germany yes, a replacement rest day within two weeks, for a public holiday within eight weeks (§ 11 ArbZG). Fieravend reminds you, and you enter it as “Replacement rest day”.'],
      ]],
      ['Countries and devices', [
        ['Does Fieravend work in Austria and Switzerland?', 'Yes. Fieravend handles public holidays, breaks and rest times for Germany, Austria and Switzerland under each country’s law, and for the UK under the Working Time Regulations 1998. The country comes from where your job is, not from your iPhone’s language. In other EU countries Fieravend uses the basic rules of the EU Working Time Directive (2003/88/EC).'],
        ['What if my country is not included?', 'You still choose your country as the place of work. Fieravend then works with your own values: weekly hours, leave, public holidays (also from a calendar file) and, if you like, your own break rule. There are no law hints there, because Fieravend does not know the law there.'],
        ['When will Fieravend be in the App Store?', 'Soon. There is no date yet. Send us an email and we will let you know.'],
        ['Is there an Apple Watch and iPad version?', 'Yes. On the Apple Watch you see today’s status and clock in, take a break or clock out. There are complications for the watch face too. Your data stays on the iPhone, the watch only sends your tap. On the iPad Fieravend has its own layout with a sidebar, in landscape and portrait, with Stage Manager too.'],
        ['Is there an Android version?', 'Not yet. Fieravend is for iPhone, iPad and Apple Watch. If you want to hear about it, send us an email with the subject “Android”.'],
      ]],
    ],
    prices: 'See pricing', mytime: 'How switching works', weekend: 'More on weekend and holiday work',
  },
};

export default function fragen(lang) {
  const c = C[lang];
  const fix = (a) => a.replace('PRICES', `<a href="${href('preise', lang)}">${c.prices}</a>`).replace('MYTIME', `<a href="${href('mytime', lang)}">${c.mytime}</a>`).replace('WEEKEND', `<a href="${href('wochenende', lang)}">${c.weekend}</a>`);
  const groups = c.groups.map(([g, qs], gi) => `<div class="faq-group"><h2 id="g${gi}">${g}</h2>` +
    qs.map(([q, a]) => `<details class="faq"><summary><h3>${q}</h3></summary><p>${fix(a)}</p></details>`).join('') + '</div>').join('');
  const strip = (s) => s.replace(/ (PRICES|MYTIME|WEEKEND)$/, '');
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
