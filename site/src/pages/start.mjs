/**
 * Start page. Copy from the wiki page "Website fieravend.de" (18.10.2026), tightened for voice level 3:
 * no dash cascades, no colon slogans. Prices: Till's decision of 18.10.2026 (30-day trial, Plus 49,99 € once, Jahrespass 14,99 €, no subscription), marked as planned.
 */
import { phone, heroDial, sheet, hintCard } from '../art.mjs';
import { href, waitlist } from '../layout.mjs';

const law = {
  de: [
    ['Pause', 'Nach 6 Stunden stehen dir 30 Minuten Pause zu, nach 9 Stunden 45.', '§ 4 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
    ['Ruhezeit', 'Zwischen zwei Arbeitstagen sollen 11 Stunden liegen.', '§ 5 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__5.html'],
    ['Höchstens 10 Stunden', 'Mehr als 10 Stunden am Werktag erlaubt das Gesetz nicht.', '§ 3 ArbZG', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
  ],
  en: [
    ['Breaks', 'After 6 hours you are owed a 30 minute break, after 9 hours 45 minutes.', '§ 4 ArbZG (Germany)', 'https://www.gesetze-im-internet.de/arbzg/__4.html'],
    ['Rest', 'There should be 11 hours between two working days.', '§ 5 ArbZG (Germany)', 'https://www.gesetze-im-internet.de/arbzg/__5.html'],
    ['10 hours at most', 'The law does not allow more than 10 hours on a working day.', '§ 3 ArbZG (Germany)', 'https://www.gesetze-im-internet.de/arbzg/__3.html'],
  ],
};

const C = {
  de: {
    title: 'Fieravend · Dein eigener Stundenzettel fürs iPhone',
    desc: 'Dein Betrieb hat kein System für die Arbeitszeit? Fieravend ist dein eigener Stundenzettel auf dem iPhone. Überstunden, Urlaub, Feiertage und Pausen. Kein Konto, kein Tracking, kein Abo.',
    eyebrow: 'Für Angestellte ohne Zeiterfassung im Betrieb',
    h1: 'Dein Betrieb hat kein System für die Arbeitszeit? <span class="nowrap">Dann hast du jetzt eins.</span>',
    lede: 'Fieravend ist dein eigener Stundenzettel auf dem iPhone. Du stempelst morgens ein und abends aus. Jeden Abend siehst du, ob deine Stunden stimmen, und wenn du einen Nachweis brauchst, hast du ihn.',
    facts: ['30 Tage gratis testen', 'Kein Abo', 'Kein Konto'],
    countries: 'Für Deutschland, Österreich und die Schweiz. In anderen EU-Ländern mit den Grundregeln der EU.',
    s1label: 'Warum selbst aufschreiben',
    s1h: 'Wer nicht aufschreibt, verschenkt Stunden.',
    s1p: 'Zehn Minuten früher da, zwanzig länger geblieben, die Pause wieder kurz. Ohne Zettel fällt das niemandem auf, auch dir nicht. Fieravend sammelt es für dich. Jeden Abend steht da, wie viel Plus oder Minus du hast. Wenn es um Überstunden geht, hast du deine Zahlen schwarz auf weiß.',
    s1link: 'Wenn dein Betrieb kein System hat',
    s2label: 'So geht es',
    s2h: 'Ein Tipp morgens, einer zum Feierabend.',
    s2list: [
      'Einstempeln geht auf dem iPhone, am Sperrbildschirm oder auf der Apple Watch.',
      'Vergessen? Trag die Zeit später nach. Fieravend merkt sich, was gestempelt und was nachgetragen ist.',
      'Pausen trägst du selbst ein. Fehlt eine, sagt Fieravend es dir.',
      'Am Monatsende machst du daraus einen Stundenzettel als PDF oder CSV.',
    ],
    s3label: 'Urlaub, Feiertage, Gesetz',
    s3h: 'Fieravend rechnet mit, was bei dir gilt.',
    s3p: 'Die Feiertage für dein Bundesland oder deinen Kanton stehen schon drin. Urlaub zählt mit Resttagen und Übertrag. Und wenn heute eine Pause fehlt oder die Ruhezeit zu kurz ist, sagt Fieravend es dir. Ruhig und ohne Paragrafen.',
    s3note: 'Fieravend gibt Hinweise und ersetzt keine Rechtsberatung. Die Regeln für Österreich und die Schweiz rechnet die App nach dem dortigen Gesetz.',
    s4label: 'Deins',
    s4h: 'Deine Zeit gehört dir.',
    s4p: 'Kein Konto, kein Tracking, keine Werbung. Deine Einträge liegen auf deinem iPhone und in deiner eigenen iCloud. Fieravend hat keinen Server. Ein Backup deiner Daten geht immer, auch ohne Kauf.',
    s4link: 'Wie wir mit Daten umgehen',
    prLabel: 'Preise, geplant',
    prH: 'Kein Abo. Einmal kaufen, fertig.',
    prFree: ['30 Tage testen', '0 €', 'Alles ausprobieren, ohne Abo und ohne Zahlungsdaten. Danach bleiben Stempeln, die letzten 7 Tage und das Backup.'],
    prPlus: ['Plus', '49,99 € einmalig', 'Alles, für immer, mit den jährlichen Gesetzes- und Steuer-Updates. Zum Start 34,99 € bis 31.1.2027. Oder der Jahrespass für 14,99 €, der sich nicht verlängert.'],
    prNote: 'So ist es geplant. Die App ist noch nicht im App Store, bis zum Start kann sich der Preis ändern.',
    prLink: 'Alle Preise im Vergleich',
    forLabel: 'Was für dich passt',
    forH: 'Von hier aus weiter.',
    for: [
      ['kleinbetrieb', 'Dein Betrieb schreibt nichts auf', 'Dann führst du deinen eigenen Nachweis.'],
      ['zweijobs', 'Du hast zwei Jobs', 'Fieravend zählt zusammen, was das Gesetz zusammenzählt.'],
      ['mytime', 'Du kommst von myTime', 'Bring deine Einträge als CSV mit.'],
      ['rechner', 'Du willst nur kurz rechnen', 'Der Überstunden-Rechner läuft im Browser und speichert nichts.'],
    ],
    lawSrc: 'Quelle',
  },
  en: {
    title: 'Fieravend · Your own time sheet for the iPhone',
    desc: 'Your employer has no system for working hours? Fieravend is your own time sheet on the iPhone. Overtime, leave, public holidays and breaks. No account, no tracking, no subscription.',
    eyebrow: 'For employees whose workplace does not track time',
    h1: 'Your workplace has no system for working hours? <span class="nowrap">Now you have one.</span>',
    lede: 'Fieravend is your own time sheet on the iPhone. You clock in in the morning and clock out in the evening. Every evening you see whether your hours add up, and when you need a record, you have it.',
    facts: ['Try it free for 30 days', 'No subscription', 'No account'],
    countries: 'For Germany, Austria and Switzerland. In other EU countries with the basic EU rules.',
    s1label: 'Why write it down yourself',
    s1h: 'If you do not write it down, you give hours away.',
    s1p: 'Ten minutes early, twenty minutes late, a short break again. Without a record nobody notices, not even you. Fieravend collects it for you. Every evening it shows how much plus or minus you have. When overtime comes up, you have your numbers in black and white.',
    s1link: 'When your workplace has no system',
    s2label: 'How it works',
    s2h: 'One tap in the morning, one when you finish.',
    s2list: [
      'Clock in on the iPhone, from the lock screen or on the Apple Watch.',
      'Forgot? Add the time later. Fieravend keeps track of what was clocked and what was added later.',
      'You enter breaks yourself. If one is missing, Fieravend tells you.',
      'At the end of the month you turn it into a time sheet as PDF or CSV.',
    ],
    s3label: 'Leave, public holidays, the law',
    s3h: 'Fieravend counts what applies to you.',
    s3p: 'Public holidays for your state or canton are already in. Leave counts with days left and carry-over. And if a break is missing today or your rest time is too short, Fieravend tells you. Calmly, without legal jargon.',
    s3note: 'Fieravend gives hints and is not legal advice. For Austria and Switzerland the app uses the law of that country.',
    s4label: 'Yours',
    s4h: 'Your time belongs to you.',
    s4p: 'No account, no tracking, no ads. Your entries live on your iPhone and in your own iCloud. Fieravend has no server. Backing up your data always works, even without buying anything.',
    s4link: 'How we handle data',
    prLabel: 'Pricing, planned',
    prH: 'No subscription. Buy once, done.',
    prFree: ['30-day trial', '€0', 'Try everything, without a subscription or payment details. Afterwards clocking in, the last 7 days and backup stay.'],
    prPlus: ['Plus', '€49.99 once', 'Everything, for good, with the yearly law and tax updates. €34.99 at launch until 31 Jan 2027. Or the Year Pass for €14.99, which does not renew.'],
    prNote: 'This is the plan. The app is not in the App Store yet, and prices may change before launch.',
    prLink: 'Compare all prices',
    forLabel: 'What fits you',
    forH: 'Where to go next.',
    for: [
      ['kleinbetrieb', 'Your workplace does not record hours', 'Then you keep your own record.'],
      ['zweijobs', 'You have two jobs', 'Fieravend adds up what the law adds up.'],
      ['mytime', 'You are coming from myTime', 'Bring your entries along as CSV.'],
      ['rechner', 'You just want to do a quick sum', 'The overtime calculator runs in your browser and stores nothing.'],
    ],
    lawSrc: 'Source',
  },
};

const arrow = '<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><line x1="4" y1="12" x2="19" y2="12"/><polyline points="13,6 19,12 13,18"/></svg>';

export default function start(lang) {
  const c = C[lang];
  const facts = c.facts.map((f) => `<li>${f}</li>`).join('');
  const s2 = c.s2list.map((x) => `<li>${x}</li>`).join('');
  const rules = law[lang].map(([h, p, src, url]) => `<li><b>${h}</b><span>${p}</span><a class="src" href="${url}">${c.lawSrc}: ${src}</a></li>`).join('');
  const fors = c.for.map(([k, h, p]) => `<li><a class="row-link" href="${href(k, lang)}"><span><b>${h}</b><span>${p}</span></span>${arrow}</a></li>`).join('');
  const body = `
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-text">
      <p class="eyebrow">${c.eyebrow}</p>
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
      ${waitlist(lang, { tone: 'hero' })}
      <ul class="facts">${facts}</ul>
    </div>
    <div class="hero-art">${heroDial()}${phone(lang)}</div>
  </div>
  <div class="wrap"><p class="countries">${c.countries}</p></div>
</section>

<section class="band zig" aria-labelledby="s1">
  <div class="wrap zig-grid">
    <div class="zig-text">
      <p class="label">${c.s1label}</p>
      <h2 id="s1">${c.s1h}</h2>
      <p>${c.s1p}</p>
      <p><a class="more" href="${href('kleinbetrieb', lang)}">${c.s1link}${arrow}</a></p>
    </div>
    <div class="zig-art">${sheet(lang)}</div>
  </div>
</section>

<section class="band zig zig-rev" aria-labelledby="s2">
  <div class="wrap zig-grid">
    <div class="zig-text">
      <p class="label">${c.s2label}</p>
      <h2 id="s2">${c.s2h}</h2>
      <ol class="steps">${s2}</ol>
    </div>
    <div class="zig-art stamp-art" aria-hidden="true">
      <span class="stamp-card"><span class="stamp-time num">7:58</span><span class="stamp-btn">${lang === 'de' ? 'Einstempeln' : 'Clock in'}</span></span>
      <span class="stamp-card stamp-late"><span class="stamp-time num">16:31</span><span class="stamp-btn stamp-out">${lang === 'de' ? 'Ausstempeln' : 'Clock out'}</span><span class="stamp-toast num">${lang === 'de' ? 'Feierabend. Heute 8:03, +0:03.' : 'Done for today. 8:03, +0:03.'}</span></span>
    </div>
  </div>
</section>

<section class="band law" aria-labelledby="s3">
  <div class="wrap law-grid">
    <div class="law-text">
      <p class="label">${c.s3label}</p>
      <h2 id="s3">${c.s3h}</h2>
      <p>${c.s3p}</p>
      ${hintCard(lang)}
      <p class="small muted">${c.s3note}</p>
    </div>
    <ul class="rules">${rules}</ul>
  </div>
</section>

<section class="band night" aria-labelledby="s4">
  <div class="wrap night-grid">
    <h2 id="s4"><span class="label">${c.s4label}</span>${c.s4h}</h2>
    <div><p>${c.s4p}</p><p><a class="more" href="${href('datenschutz', lang)}">${c.s4link}${arrow}</a></p></div>
  </div>
</section>

<section class="band" aria-labelledby="pr">
  <div class="wrap price-grid">
    <div>
      <p class="label">${c.prLabel}</p>
      <h2 id="pr">${c.prH}</h2>
      <p class="small muted">${c.prNote}</p>
      <p><a class="more" href="${href('preise', lang)}">${c.prLink}${arrow}</a></p>
    </div>
    <div class="plans">
      <div class="plan plan-free"><h3>${c.prFree[0]}</h3><p class="plan-price num">${c.prFree[1]}</p><p>${c.prFree[2]}</p></div>
      <div class="plan plan-plus"><h3>${c.prPlus[0]}</h3><p class="plan-price num">${c.prPlus[1]}</p><p>${c.prPlus[2]}</p></div>
    </div>
  </div>
</section>

<section class="band" aria-labelledby="for">
  <div class="wrap for-grid">
    <div><p class="label">${c.forLabel}</p><h2 id="for">${c.forH}</h2></div>
    <ul class="row-list">${fors}</ul>
  </div>
</section>`;
  return { title: c.title, desc: c.desc, body };
}
