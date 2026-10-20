/**
 * Pricing. Till's decision of 18.10.2026 (replaces the free tier and the subscriptions of the "Preismodell" draft):
 * 30 days full trial without payment data · afterwards "Basis" (clock in/out, last 7 days, one job, JSON backup always)
 * · Plus 49,99 € once (launch price 34,99 € until 31.1.2027) · Jahrespass 14,99 € once for one calendar year, no
 * auto-renewal · no monthly subscription, no separate tax year. Still planned until the app is in the App Store.
 * Comparison without brand names: 24 × 1,99 € = 47,76 €.
 */
import { waitlist, stand } from '../layout.mjs';

const yes = (l) => `<span class="yes"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><polyline points="5,12.5 10,17 19,7"/></svg><span class="visually-hidden">${l === 'de' ? 'enthalten' : 'included'}</span></span>`;
const no = (l) => `<span class="no"><span aria-hidden="true">−</span><span class="visually-hidden">${l === 'de' ? 'nicht enthalten' : 'not included'}</span></span>`;

const C = {
  de: {
    title: 'Preise: Zeiterfassungs-App ohne Abo',
    desc: 'Kein Abo. 30 Tage alles testen, dann einmal kaufen: Fieravend Plus für 49,99 € (zum Start 34,99 €) oder der Jahrespass für 14,99 €. Preise geplant.',
    label: 'Preise, geplant',
    h1: 'Kein Abo. Einmal kaufen, fertig.',
    lede: 'Du testest 30 Tage lang alles, ohne Abo und ohne Zahlungsdaten. Danach kaufst du Plus einmal und hast es für immer. Wer nicht gleich so viel ausgeben will, nimmt den Jahrespass.',
    planned: 'So ist es geplant. Fieravend ist noch nicht im App Store, bis zum Start können sich Preise und Umfang ändern.',
    plus: ['Fieravend Plus', '49,99 €', 'einmalig, für immer, mit den jährlichen Gesetzes- und Steuer-Updates', 'Zum Start 34,99 € bis 31.1.2027'],
    pass: ['Jahrespass', '14,99 €', 'einmalig für ein Kalenderjahr. Verlängert sich nicht von selbst.'],
    trial: ['30 Tage testen', '0 €', 'alles, ohne Abo und ohne Zahlungsdaten'],
    tableCap: 'Was nach den 30 Tagen enthalten ist',
    cols: ['Basis, ohne Kauf', 'Jahrespass', 'Plus'],
    rows: [
      ['Ein- und Ausstempeln', 1, 1, 1],
      ['Einträge ansehen', 'letzte 7 Tage', 'alle', 'alle'],
      ['Jobs', '1', 'beliebig viele', 'beliebig viele'],
      ['Backup aller Daten (JSON)', 'immer', 1, 1],
      ['Überstunden-Verlauf', 0, 1, 1],
      ['Urlaub und Resturlaub', 0, 1, 1],
      ['Stundenzettel als PDF, Export als CSV', 0, 1, 1],
      ['Nachweis mit Änderungsprotokoll', 0, 1, 1],
      ['Hinweise über mehrere Jobs', 0, 1, 1],
      ['Steuer-Auswertung für die Anlage N', 0, 1, 1],
      ['Apple Watch und Ortserinnerung (kommen später)', 0, 1, 1],
      ['Gesetzes- und Steuer-Updates', 0, 'für das Jahr', 'für immer'],
      ['Gilt', '−', 'ein Kalenderjahr', 'für immer'],
    ],
    basisH: 'Nach dem Test ohne Kauf',
    basisP: 'Wenn du nach 30 Tagen nichts kaufst, kannst du weiter ein- und ausstempeln und siehst die letzten 7 Tage. Gelöscht wird nichts. Ein Backup aller deiner Daten als JSON-Datei geht immer, auch ohne Kauf. Deine Daten gehören dir.',
    cmpH: 'Warum kein Abo',
    cmpP: 'Ein Abo für 1,99 € im Monat kostet in zwei Jahren 47,76 € (24 × 1,99 €) und läuft danach weiter. Plus kostet einmal 49,99 €, zum Start 34,99 €, und gilt danach für immer.',
    cmpNum: '24 × 1,99 € = 47,76 €',
    fair: 'Fair verkauft',
    fairList: [
      'Die Kaufseite kommt nur, wenn du etwas antippst, das Plus braucht. Nie beim Start und nie als Pop-up.',
      'Kein Countdown, kein durchgestrichener Fantasiepreis. Der Einführungspreis hat ein festes Enddatum, den 31.1.2027.',
      'Nichts verlängert sich von selbst. Endet der Test oder dein Jahrespass, bleiben alle Daten da, und das Backup geht weiter.',
    ],
    vat: 'Preise in Euro für den App Store in Deutschland, inklusive Umsatzsteuer. Kauf und Abrechnung laufen über Apple.',
  },
  en: {
    title: 'Pricing: a time tracking app without subscription',
    desc: 'No subscription. Try everything for 30 days, then buy once: Fieravend Plus for €49.99 (€34.99 at launch) or the Year Pass for €14.99. Prices planned.',
    label: 'Pricing, planned',
    h1: 'No subscription. Buy once, done.',
    lede: 'You try everything for 30 days, without a subscription and without payment details. After that you buy Plus once and keep it for good. If you do not want to spend that much right away, take the Year Pass.',
    planned: 'This is the plan. Fieravend is not in the App Store yet, and prices and features may change before launch.',
    plus: ['Fieravend Plus', '€49.99', 'once, for good, with the yearly law and tax updates', '€34.99 at launch until 31 Jan 2027'],
    pass: ['Year Pass', '€14.99', 'once for one calendar year. It does not renew by itself.'],
    trial: ['30-day trial', '€0', 'everything, without a subscription or payment details'],
    tableCap: 'What you get after the 30 days',
    cols: ['Basic, no purchase', 'Year Pass', 'Plus'],
    rows: [
      ['Clock in and out', 1, 1, 1],
      ['See your entries', 'last 7 days', 'all', 'all'],
      ['Jobs', '1', 'as many as you like', 'as many as you like'],
      ['Backup of all data (JSON)', 'always', 1, 1],
      ['Overtime history', 0, 1, 1],
      ['Leave and days left', 0, 1, 1],
      ['Time sheet as PDF, export as CSV', 0, 1, 1],
      ['Record with change log', 0, 1, 1],
      ['Hints across several jobs', 0, 1, 1],
      ['Tax summary (German Anlage N)', 0, 1, 1],
      ['Apple Watch and location reminder (coming later)', 0, 1, 1],
      ['Law and tax updates', 0, 'for the year', 'for good'],
      ['Valid', '−', 'one calendar year', 'for good'],
    ],
    basisH: 'After the trial without buying',
    basisP: 'If you buy nothing after 30 days, you can still clock in and out and see the last 7 days. Nothing is deleted. A backup of all your data as a JSON file always works, without buying anything. Your data belongs to you.',
    cmpH: 'Why no subscription',
    cmpP: 'A subscription at €1.99 a month costs €47.76 over two years (24 × €1.99) and keeps running after that. Plus costs €49.99 once, €34.99 at launch, and then stays yours for good.',
    cmpNum: '24 × €1.99 = €47.76',
    fair: 'Sold fairly',
    fairList: [
      'The purchase screen only appears when you tap something that needs Plus. Never at launch and never as a pop-up.',
      'No countdown, no crossed-out made-up price. The launch price has a fixed end date, 31 January 2027.',
      'Nothing renews by itself. When the trial or your Year Pass ends, all your data stays and backup keeps working.',
    ],
    vat: 'Prices in euros for the App Store in Germany, including VAT. Purchase and billing go through Apple.',
  },
};

export default function preise(lang) {
  const c = C[lang];
  const cell = (v) => (v === 1 ? yes(lang) : v === 0 ? no(lang) : `<span>${v}</span>`);
  const rows = c.rows.map(([k, a, b, d]) => `<tr><th scope="row">${k}</th><td>${cell(a)}</td><td>${cell(b)}</td><td>${cell(d)}</td></tr>`).join('');
  const fair = c.fairList.map((x) => `<li>${x}</li>`).join('');
  const body = `
<section class="page-head">
  <div class="wrap head-grid">
    <div>
      
      <h1>${c.h1}</h1>
      <p class="lede">${c.lede}</p>
      <p class="planned">${c.planned} ${stand(lang)}.</p>
    </div>
    <div class="head-art price-stack">
      <div class="plan plan-plus"><h2 class="plan-h">${c.plus[0]}</h2><p class="plan-price num">${c.plus[1]}</p><p class="plan-sub">${c.plus[2]}</p><p class="plan-alt num">${c.plus[3]}</p></div>
      <div class="plan plan-free"><h2 class="plan-h">${c.pass[0]}</h2><p class="plan-price num">${c.pass[1]}</p><p class="plan-sub">${c.pass[2]}</p></div>
      <div class="plan plan-free"><h2 class="plan-h">${c.trial[0]}</h2><p class="plan-price num">${c.trial[1]}</p><p class="plan-sub">${c.trial[2]}</p></div>
    </div>
  </div>
</section>

<section class="band" aria-labelledby="cmp">
  <div class="wrap">
    <h2 id="cmp" class="visually-hidden">${c.tableCap}</h2>
    <div class="table-wrap"><table class="cmp cmp-3"><caption>${c.tableCap}</caption>
      <thead><tr><td></td>${c.cols.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead>
      <tbody>${rows}</tbody></table></div>
  </div>
</section>

<section class="band" aria-labelledby="basis">
  <div class="wrap split">
    <h2 id="basis">${c.basisH}</h2>
    <p>${c.basisP}</p>
  </div>
</section>

<section class="band" aria-labelledby="noabo">
  <div class="wrap split">
    <h2 id="noabo">${c.cmpH}</h2>
    <div><p class="big-num num">${c.cmpNum}</p><p>${c.cmpP}</p></div>
  </div>
</section>

<section class="band law" aria-labelledby="fair">
  <div class="wrap split">
    <h2 id="fair">${c.fair}</h2>
    <div><ul class="steps">${fair}</ul><p class="small muted">${c.vat}</p></div>
  </div>
</section>

<section class="band">
  <div class="wrap narrow">${waitlist(lang, { source: 'preise' })}</div>
</section>`;
  return { title: c.title, desc: c.desc, body };
}
