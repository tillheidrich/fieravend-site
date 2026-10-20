/**
 * App screens for the website. Each one is a cropped, true-size piece of the Fieravend interface built in HTML
 * (root marked data-ui, so the app's own radii and control borders apply inside it).
 *
 * Real screenshots win: if `App/tools/screenshots.sh` has written `site/static/shots/<name>-<lang>-light.png`
 * (and optionally `-dark.png`), `shot()` shows that picture instead of the HTML version.
 *
 * Numbers are one consistent example: Mira Berg, Praxis am Markt, NRW, 39 h a week (7:48 a day), opening balance +18:40.
 * Everything adds up: eight weeks of differences (+2:35) on top of the opening balance give +21:15.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mark } from './art.mjs';

const SHOTS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'static', 'shots');

/** Real screenshot if one exists, otherwise the HTML fragment. alt describes what the screen shows. */
export function shot(name, lang, alt, html) {
  const light = `${name}-${lang}-light.png`;
  if (!fs.existsSync(path.join(SHOTS, light))) return html;
  const dark = `${name}-${lang}-dark.png`;
  const src = fs.existsSync(path.join(SHOTS, dark)) ? `<source srcset="/assets/shots/${dark}" media="(prefers-color-scheme: dark)">` : '';
  return `<picture class="shot">${src}<img src="/assets/shots/${light}" alt="${alt}" width="1206" height="2622" loading="lazy" decoding="async"></picture>`;
}

const T = {
  de: {
    tabs: ['Heute', 'Monat', 'Übersicht', 'Mehr'],
    date: 'Mittwoch, 21. Oktober',
    today: 'Heute', worked: '6:12', toTarget: 'noch 1:36 bis Soll', since: 'Eingestempelt seit 7:58',
    pause: 'Pause', moveStart: 'Beginn ändern', out: 'Ausstempeln', inn: 'Einstempeln',
    overtime: 'Überstunden', week: 'Diese Woche', holiday: 'Nächster Feiertag', holidayVal: '1.11. · Allerheiligen',
    todayAlt: 'Fieravend, Seite Heute: 6:12 gearbeitet, noch 1:36 bis Soll, eingestempelt seit 7:58, Knopf Ausstempeln. Überstunden plus 21:15.',
    month: 'Oktober 2026', monthSum: 'bis heute', monthAlt: 'Fieravend, Seite Monat: Oktober 2026, jeder Tag mit Zeiten und Differenz. Der 3. Oktober ist ein Feiertag, der 6. Urlaub, der 8. nachgetragen.',
    rows: [
      ['Do 1.', '7:52–16:20', '+0:10', ''], ['Fr 2.', '8:00–16:15', '−0:03', ''], ['Sa 3.', 'Tag der Deutschen Einheit', '', 'holiday'],
      ['Mo 5.', '7:55–16:40', '+0:12', ''], ['Di 6.', 'Urlaub', '0:00', 'leave'], ['Mi 7.', '8:05–17:10', '+0:32', ''],
      ['Do 8.', '7:58–15:30', '−0:46', 'late'],
    ],
    late: 'nachgetragen',
    over: 'Übersicht', balance: 'Überstunden', balanceSub: 'Startwert +18:40 am 1. September',
    weeks: 'Die letzten 8 Wochen', leave: 'Urlaub 2026', leaveRows: [['Anspruch', '30 Tage'], ['Übertrag aus 2025', '4 Tage'], ['Genommen', '19 Tage'], ['Geplant', '4 Tage'], ['Noch frei', '11 Tage']],
    overAlt: 'Fieravend, Seite Übersicht: Überstunden plus 21:15, Balken für die letzten acht Wochen, Urlaub 2026 mit 11 freien Tagen.',
    pdfTitle: 'Stundenzettel Oktober 2026', pdfWho: 'Mira Berg · Praxis am Markt', cols: ['Tag', 'Beginn', 'Ende', 'Pause', 'Ist', 'Diff.'],
    pdfRows: [['Do 1.', '7:52', '16:20', '0:30', '7:58', '+0:10'], ['Fr 2.', '8:00', '16:15', '0:30', '7:45', '−0:03'], ['Mo 5.', '7:55', '16:40', '0:45', '8:00', '+0:12'], ['Di 6.', 'Urlaub', '', '', '7:48', '0:00'], ['Mi 7.', '8:05', '17:10', '0:45', '8:20', '+0:32'], ['Do 8.', '7:58*', '15:30*', '0:30', '7:02', '−0:46']],
    pdfSum: 'Summe 1.–8. Oktober', pdfDiff: '+0:05', pdfFoot: '* nachgetragen am 9.10. um 7:41 · Prüfsumme 3F9A 1C2B 4D5E 6F70',
    pdfAlt: 'Stundenzettel als PDF: Oktober 2026 für Mira Berg, Praxis am Markt, jeder Tag mit Beginn, Ende, Pause, Ist und Differenz. Ein Tag ist nachgetragen und mit Stern markiert, unten die Prüfsumme.',
    hintTitle: 'Hinweis', hint: 'Heute fehlt noch eine Pause.', hintMore: 'Nach 6 Stunden stehen dir 30 Minuten zu.', noAdvice: 'Fieravend gibt Hinweise, keine Rechtsberatung.',
    hintAlt: 'Fieravend, ruhiger Hinweis: Heute fehlt noch eine Pause. Nach 6 Stunden stehen dir 30 Minuten zu.',
  },
  en: {
    tabs: ['Today', 'Month', 'Overview', 'More'],
    date: 'Wednesday, 21 October',
    today: 'Today', worked: '6:12', toTarget: '1:36 to go', since: 'Clocked in since 7:58',
    pause: 'Break', moveStart: 'Change start', out: 'Clock out', inn: 'Clock in',
    overtime: 'Overtime', week: 'This week', holiday: 'Next public holiday', holidayVal: '1 Nov · All Saints’ Day',
    todayAlt: 'Fieravend, Today screen: 6:12 worked, 1:36 to go, clocked in since 7:58, Clock out button. Overtime plus 21:15.',
    month: 'October 2026', monthSum: 'so far', monthAlt: 'Fieravend, Month screen: October 2026, every day with times and difference. 3 October is a public holiday, the 6th is leave, the 8th was added later.',
    rows: [
      ['Thu 1', '7:52–16:20', '+0:10', ''], ['Fri 2', '8:00–16:15', '−0:03', ''], ['Sat 3', 'German Unity Day', '', 'holiday'],
      ['Mon 5', '7:55–16:40', '+0:12', ''], ['Tue 6', 'Leave', '0:00', 'leave'], ['Wed 7', '8:05–17:10', '+0:32', ''],
      ['Thu 8', '7:58–15:30', '−0:46', 'late'],
    ],
    late: 'added later',
    over: 'Overview', balance: 'Overtime', balanceSub: 'Starting point +18:40 on 1 September',
    weeks: 'The last 8 weeks', leave: 'Leave 2026', leaveRows: [['Entitlement', '30 days'], ['Carried over from 2025', '4 days'], ['Taken', '19 days'], ['Planned', '4 days'], ['Still free', '11 days']],
    overAlt: 'Fieravend, Overview screen: overtime plus 21:15, bars for the last eight weeks, leave 2026 with 11 free days.',
    pdfTitle: 'Time sheet October 2026', pdfWho: 'Mira Berg · Praxis am Markt', cols: ['Day', 'Start', 'End', 'Break', 'Hours', 'Diff.'],
    pdfRows: [['Thu 1', '7:52', '16:20', '0:30', '7:58', '+0:10'], ['Fri 2', '8:00', '16:15', '0:30', '7:45', '−0:03'], ['Mon 5', '7:55', '16:40', '0:45', '8:00', '+0:12'], ['Tue 6', 'Leave', '', '', '7:48', '0:00'], ['Wed 7', '8:05', '17:10', '0:45', '8:20', '+0:32'], ['Thu 8', '7:58*', '15:30*', '0:30', '7:02', '−0:46']],
    pdfSum: 'Total 1–8 October', pdfDiff: '+0:05', pdfFoot: '* added later on 9 Oct at 7:41 · Checksum 3F9A 1C2B 4D5E 6F70',
    pdfAlt: 'Time sheet as a PDF: October 2026 for Mira Berg, Praxis am Markt, every day with start, end, break, hours and difference. One day was added later and has a star, the checksum is at the bottom.',
    hintTitle: 'Note', hint: 'A break is still missing today.', hintMore: 'After 6 hours you are owed 30 minutes.', noAdvice: 'Fieravend gives hints, not legal advice.',
    hintAlt: 'Fieravend, calm hint: a break is still missing today. After 6 hours you are owed 30 minutes.',
  },
};

const sign = (s) => (s.startsWith('+') ? 'plus' : s.startsWith('−') ? 'minus' : '');
const icons = {
  today: '<circle cx="12" cy="14" r="4"/><line x1="3" y1="18" x2="21" y2="18"/><line x1="12" y1="4" x2="12" y2="7"/>',
  month: '<rect x="4" y="5" width="16" height="15" rx="2"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="9" y1="3" x2="9" y2="7"/><line x1="15" y1="3" x2="15" y2="7"/>',
  overview: '<line x1="6" y1="19" x2="6" y2="11"/><line x1="12" y1="19" x2="12" y2="5"/><line x1="18" y1="19" x2="18" y2="14"/>',
  more: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="12" r=".6"/><circle cx="12" cy="12" r=".6"/><circle cx="16" cy="12" r=".6"/>',
};

function tabbar(lang, active) {
  const t = T[lang];
  return `<span class="ui-tabs">${['today', 'month', 'overview', 'more'].map((k, i) =>
    `<span class="ui-tab${k === active ? ' is-on' : ''}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[k]}</svg>${t.tabs[i]}</span>`).join('')}</span>`;
}

/** "Heute" with the running clock. */
export function todayScreen(lang) {
  const t = T[lang];
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${t.todayAlt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-large">${t.today}</span><span class="ui-date">${t.date}</span>` +
    `<span class="ui-card ui-clock"><span class="ui-ring ui-ring-79"><svg viewBox="0 0 120 120"><circle class="ui-ring-track" cx="60" cy="60" r="52"/><circle class="ui-ring-fill" cx="60" cy="60" r="52"/></svg>` +
    `<span class="ui-ring-in"><b class="ui-hero num">${t.worked}</b><span class="num">${t.toTarget}</span></span></span>` +
    `<span class="ui-note">${t.since}</span><span class="ui-stamp">${t.out}</span>` +
    `<span class="ui-pair"><span class="ui-ctl">${t.pause}</span><span class="ui-ctl">${t.moveStart}</span></span></span>` +
    `<span class="ui-card ui-values"><span class="ui-row"><span>${t.overtime}</span><b class="plus num ui-big">+21:15</b></span>` +
    `<span class="ui-row"><span>${t.week}</span><b class="plus num">+0:42</b></span>` +
    `<span class="ui-row"><span>${t.holiday}</span><span>${t.holidayVal}</span></span></span>` +
    `${tabbar(lang, 'today')}</div></div>`;
  return shot('heute', lang, t.todayAlt, html);
}

/** "Monat" list for October. */
export function monthScreen(lang) {
  const t = T[lang];
  const rows = t.rows.map(([d, time, diff, kind]) => {
    const extra = kind === 'late' ? `<span class="ui-tag">${t.late}</span>` : '';
    const cls = kind === 'holiday' ? ' ui-day-off' : kind === 'leave' ? ' ui-day-leave' : '';
    return `<span class="ui-day${cls}"><b>${d}</b><span class="num">${time}${extra}</span><span class="num ${sign(diff)}">${diff}</span></span>`;
  }).join('');
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${t.monthAlt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-large">${t.month}</span><span class="ui-date">${t.monthSum} <b class="plus num">+0:05</b></span>` +
    `<span class="ui-card ui-list">${rows}</span>${tabbar(lang, 'month')}</div></div>`;
  return shot('monat', lang, t.monthAlt, html);
}

/** "Übersicht": balance, eight weekly bars, leave. Bar heights are set by classes (no inline styles, CSP). */
export function overviewScreen(lang) {
  const t = T[lang];
  const weeks = [['+0:40', 40], ['−0:15', -15], ['+1:10', 70], ['+0:20', 20], ['−0:30', -30], ['+0:45', 45], ['+0:03', 3], ['+0:22', 22]];
  const bars = weeks.map(([label, m]) => `<span class="ui-bar ${m < 0 ? 'is-minus' : ''} h${Math.max(1, Math.round(Math.abs(m) / 10))}"><span class="ui-bar-v num">${label}</span></span>`).join('');
  const leave = t.leaveRows.map(([k, v], i) => `<span class="ui-row${i === t.leaveRows.length - 1 ? ' ui-row-sum' : ''}"><span>${k}</span><b class="num">${v}</b></span>`).join('');
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${t.overAlt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-large">${t.over}</span>` +
    `<span class="ui-card"><span class="ui-sub">${t.balance}</span><b class="ui-hero plus num">+21:15</b><span class="ui-note">${t.balanceSub}</span>` +
    `<span class="ui-sub ui-sub-gap">${t.weeks}</span><span class="ui-bars">${bars}</span></span>` +
    `<span class="ui-card ui-values"><span class="ui-sub">${t.leave}</span>${leave}</span>${tabbar(lang, 'overview')}</div></div>`;
  return shot('uebersicht', lang, t.overAlt, html);
}

/** The PDF time sheet, as paper. */
export function proofSheet(lang, { crop = false } = {}) {
  const t = T[lang];
  const head = t.cols.map((c) => `<span>${c}</span>`).join('');
  const rows = t.pdfRows.map((r) => `<span class="pdf-row">${r.map((c, i) => `<span class="${i === 5 ? sign(c) : ''}">${c}</span>`).join('')}</span>`).join('');
  const html = `<div class="pdf${crop ? ' pdf-crop' : ''}" data-ui role="img" aria-label="${t.pdfAlt}"><div aria-hidden="true">` +
    `<span class="pdf-head">${mark({ id: `pdf-${lang}${crop ? '-c' : ''}`, simple: true, cls: 'pdf-mark' })}<span><b>${t.pdfTitle}</b><span>${t.pdfWho}</span></span></span>` +
    `<span class="pdf-row pdf-cols">${head}</span>${rows}` +
    `<span class="pdf-sum"><span>${t.pdfSum}</span><b class="plus num">${t.pdfDiff}</b></span>` +
    `<span class="pdf-foot num">${t.pdfFoot}</span></div></div>`;
  return crop ? html : shot('nachweis', lang, t.pdfAlt, html);
}

/** Calm law hint as it appears in the app. */
export function hintFragment(lang) {
  const t = T[lang];
  return `<div class="ui-hint" data-ui role="img" aria-label="${t.hintAlt}"><span aria-hidden="true" class="ui-hint-in">` +
    `<svg class="ui-hint-ico" viewBox="0 0 24 24" focusable="false"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.4.3.6.8.6 1.2v1h6v-1c0-.4.2-.9.6-1.2A6 6 0 0 0 12 3z"/></svg>` +
    `<span><b>${t.hint}</b><span>${t.hintMore}</span><span class="ui-hint-small">${t.noAdvice}</span></span></span></div>`;
}

/** The clock card in three states for the pinned day: morning, midday, evening. */
export function clockStages(lang) {
  const de = lang === 'de';
  const st = de
    ? [['7:58', '0:00', 'Noch nicht eingestempelt.', 'Einstempeln', 'in'], ['12:31', '4:33', 'Pause seit 12:31', 'Weiter', 'pause'], ['16:31', '8:03', 'Feierabend. Heute 8:03, +0:15.', 'Einstempeln', 'out']]
    : [['7:58', '0:00', 'Not clocked in yet.', 'Clock in', 'in'], ['12:31', '4:33', 'On a break since 12:31', 'Resume', 'pause'], ['16:31', '8:03', 'Done for today. 8:03 today, +0:15.', 'Clock in', 'out']];
  const alt = de
    ? 'Die Stempeluhr von Fieravend über den Tag: morgens um 7:58 der Knopf Einstempeln, mittags die Pause, um 16:31 Feierabend mit 8:03 Stunden.'
    : 'The Fieravend clock across the day: at 7:58 the Clock in button, a break at midday, done at 16:31 with 8:03 hours.';
  const cards = st.map(([now, worked, line, btn, k]) =>
    `<span class="ui-stage-card st-${k}"><span class="ui-stage-now num">${now}</span>` +
    `<span class="ui-stage-dial"><svg viewBox="0 0 200 120" aria-hidden="true" focusable="false"><defs><clipPath id="sd-${lang}-${k}"><rect x="0" y="0" width="200" height="86"/></clipPath></defs>` +
    `<g clip-path="url(#sd-${lang}-${k})"><circle class="ui-sun sun-${k}" cx="100" cy="60" r="20"/></g><line class="ui-horizon" x1="10" y1="86" x2="190" y2="86"/></svg></span>` +
    `<b class="ui-hero num">${worked}</b><span class="ui-note">${line}</span><span class="ui-stamp${k === 'pause' ? ' ui-stamp-quiet' : ''}">${btn}</span></span>`).join('');
  return `<div class="ui-stage" data-ui role="img" aria-label="${alt}"><span class="ui-stage-in" aria-hidden="true">${cards}</span></div>`;
}

/** Small fragments for the feature list. */
export function holidaysFragment(lang) {
  const rows = lang === 'de'
    ? [['Sa 31.10.', 'Reformationstag', 'nicht in NRW'], ['So 1.11.', 'Allerheiligen', 'NRW'], ['Fr 25.12.', '1. Weihnachtstag', 'bundesweit'], ['Sa 26.12.', '2. Weihnachtstag', 'bundesweit']]
    : [['Sat 31 Oct', 'Reformation Day', 'not in NRW'], ['Sun 1 Nov', 'All Saints’ Day', 'NRW'], ['Fri 25 Dec', 'Christmas Day', 'nationwide'], ['Sat 26 Dec', 'Boxing Day', 'nationwide']];
  const alt = lang === 'de' ? 'Feiertage für Nordrhein-Westfalen: Allerheiligen gilt, der Reformationstag nicht.' : 'Public holidays for North Rhine-Westphalia: All Saints’ Day applies, Reformation Day does not.';
  return `<div class="ui-panel" data-ui role="img" aria-label="${alt}"><span class="ui-list ui-list-flat" aria-hidden="true">` +
    rows.map(([d, n, w], i) => `<span class="ui-day${i === 0 ? ' ui-day-off' : ''}"><b class="num">${d}</b><span>${n}</span><span>${w}</span></span>`).join('') + '</span></div>';
}

export function leaveFragment(lang) {
  const de = lang === 'de';
  const alt = de ? 'Urlaub über Weihnachten: 21. Dezember bis 1. Januar kostet in NRW 8 Urlaubstage, weil drei Feiertage und zwei Wochenenden darin liegen.' : 'Leave over Christmas: 21 December to 1 January costs 8 days of leave in NRW, because three public holidays and two weekends fall in it.';
  return `<div class="ui-panel ui-leave" data-ui role="img" aria-label="${alt}"><span aria-hidden="true" class="ui-leave-in">` +
    `<span class="ui-sub">${de ? 'Urlaub eintragen' : 'Add leave'}</span><b class="num ui-leave-range">${de ? '21.12. – 1.1.' : '21 Dec – 1 Jan'}</b>` +
    `<span class="ui-leave-cost"><b class="num">8</b> ${de ? 'Urlaubstage, nicht 12' : 'days of leave, not 12'}</span>` +
    `<span class="ui-note">${de ? 'Wochenenden und 3 Feiertage zählen nicht.' : 'Weekends and 3 public holidays do not count.'}</span></span></div>`;
}

export function jobsFragment(lang) {
  const de = lang === 'de';
  const alt = de ? 'Zwei Jobs an einem Dienstag: Praxis von 8 bis 14:30 Uhr, Café Mika von 18 bis 22:30 Uhr, zusammen 10:30. Hinweis: Bis zum Dienst morgen um 7 Uhr liegen nur 8:30 Stunden Ruhe.' : 'Two jobs on a Tuesday: Praxis from 8:00 to 14:30, Café Mika from 18:00 to 22:30, 10:30 together. Note: only 8:30 hours of rest before tomorrow’s shift at 7:00.';
  return `<div class="ui-panel ui-jobs" data-ui role="img" aria-label="${alt}"><span aria-hidden="true" class="ui-jobs-in">` +
    `<span class="ui-row"><b>${de ? 'Dienstag' : 'Tuesday'}</b><b class="num">${de ? 'Zusammen 10:30' : '10:30 together'}</b></span>` +
    `<span class="ui-track"><span class="ui-job ui-job-a">Praxis <span class="num">8:00–14:30</span></span><span class="ui-job ui-job-b">Café Mika <span class="num">18–22:30</span></span></span>` +
    `<span class="ui-scale num"><span>6</span><span>12</span><span>18</span><span>24</span></span>` +
    `<span class="ui-note ui-warn">${de ? 'Bis zum Dienst morgen um 7:00 liegen nur 8:30 Stunden Ruhe.' : 'Only 8:30 hours of rest before tomorrow’s shift at 7:00.'}</span></span></div>`;
}

export function countriesFragment(lang) {
  const de = lang === 'de';
  const rows = de
    ? [['Praxis am Markt', 'Köln', 'Überstunden', '+21:15'], ['Café Mika', 'Zürich', 'Überzeit', '+3:40'], ['Hotel am See', 'Salzburg', 'Zeitausgleich', '+6:05']]
    : [['Praxis am Markt', 'Cologne', 'Überstunden', '+21:15'], ['Café Mika', 'Zurich', 'Überzeit', '+3:40'], ['Hotel am See', 'Salzburg', 'Zeitausgleich', '+6:05']];
  const alt = de ? 'Drei Jobs in drei Ländern, jeder mit dem Wort, das dort gilt: Überstunden in Köln, Überzeit in Zürich, Zeitausgleich in Salzburg.' : 'Three jobs in three countries, each with the word used there: Überstunden in Cologne, Überzeit in Zurich, Zeitausgleich in Salzburg.';
  return `<div class="ui-panel" data-ui role="img" aria-label="${alt}"><span class="ui-list ui-list-flat" aria-hidden="true">` +
    rows.map(([j, c, w, v]) => `<span class="ui-day ui-day-3"><b>${j}<span class="ui-city">${c}</span></b><span>${w}</span><span class="plus num">${v}</span></span>`).join('') + '</span></div>';
}

/** Lock and backup: what stays on the phone. */
export function privacyFragment(lang) {
  const de = lang === 'de';
  const rows = de
    ? [['Konto', 'keins'], ['Server', 'keiner'], ['Tracking', 'keins'], ['Speicherort', 'iPhone und deine iCloud'], ['Backup', 'JSON-Datei, immer frei']]
    : [['Account', 'none'], ['Server', 'none'], ['Tracking', 'none'], ['Stored on', 'your iPhone and your iCloud'], ['Backup', 'JSON file, always free']];
  const alt = de ? 'Was mit deinen Daten passiert: kein Konto, kein Server, kein Tracking, gespeichert auf dem iPhone und in deiner iCloud, Backup als JSON-Datei immer frei.' : 'What happens with your data: no account, no server, no tracking, stored on your iPhone and in your iCloud, JSON backup always free.';
  return `<div class="ui-panel ui-panel-night" data-ui role="img" aria-label="${alt}"><span class="ui-values" aria-hidden="true">` +
    rows.map(([k, v]) => `<span class="ui-row"><span>${k}</span><b>${v}</b></span>`).join('') + '</span></div>';
}
