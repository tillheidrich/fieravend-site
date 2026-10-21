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
  export: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 13h5M10 17h5"/>',
};

function tabbar(lang, active) {
  // Tab order as in the app (myTime order): Mehr · Stempeln · Monat (middle) · Übersicht · Export.
  const L = lang === 'de' ? ['Mehr', 'Stempeln', 'Monat', 'Übersicht', 'Export'] : ['More', 'Clock', 'Month', 'Overview', 'Export'];
  const keys = ['more', 'today', 'month', 'overview', 'export'];
  return `<span class="ui-tabs">${keys.map((k, i) =>
    `<span class="ui-tab${k === active ? ' is-on' : ''}"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${icons[k]}</svg>${L[i]}</span>`).join('')}</span>`;
}

/* Minutes since midnight → x on a band from `from` to `to` hours, width w. */
const bx = (min, from, to, w) => ((min / 60 - from) / (to - from)) * w;
const hm = (h, m) => h * 60 + m;

/** Tagesband: blocks in job colour, gaps for breaks, now and Feierabend markers (spec "Abendlicht 2", section 2). */
function dayBand({ blocks, now, end, from = 6, to = 18, w = 300, h = 34, mini = false, ticks = true }) {
  const y = mini ? 4 : 8, bh = mini ? 10 : 16;
  const bars = blocks.map(([s, e, cls]) => `<rect class="db-block ${cls || ''}" x="${bx(s, from, to, w).toFixed(1)}" y="${y}" width="${Math.max(2, bx(e, from, to, w) - bx(s, from, to, w)).toFixed(1)}" height="${bh}" rx="${bh / 2}"/>`).join('');
  const nowM = now != null ? `<line class="db-now" x1="${bx(now, from, to, w).toFixed(1)}" y1="${y - 4}" x2="${bx(now, from, to, w).toFixed(1)}" y2="${y + bh + 4}"/>` : '';
  const endM = end != null ? `<circle class="db-end" cx="${bx(end, from, to, w).toFixed(1)}" cy="${y + bh / 2}" r="${mini ? 3 : 5}"/>` : '';
  const tk = ticks && !mini ? [6, 9, 12, 15, 18].filter((t) => t > from && t < to).map((t) => `<text class="db-tick" x="${bx(t * 60, from, to, w).toFixed(1)}" y="${h - 1}">${t}</text>`).join('') : '';
  return `<svg class="db${mini ? ' db-mini' : ''}" viewBox="0 0 ${w} ${mini ? 18 : h}" aria-hidden="true" focusable="false"><rect class="db-track" x="0" y="${y}" width="${w}" height="${bh}" rx="${bh / 2}"/>${bars}${nowM}${endM}${tk}</svg>`;
}

/** Thin progress bar to today's target, as on the app's sky card (SkyCard.TargetBar). `p` is 0…1. */
const targetBar = (p) => `<svg class="ui-tbar" viewBox="0 0 100 6" preserveAspectRatio="none" aria-hidden="true" focusable="false"><rect class="ui-tbar-track" x="0" y="0" width="100" height="6" rx="3"/><rect class="ui-tbar-in" x="0" y="0" width="${Math.max(6, Math.min(1, Math.max(0, p)) * 100).toFixed(1)}" height="6" rx="3"/></svg>`;

/** "Heute" while clocked in: the sky of the afternoon, the stopwatch to the second, the Feierabend line, a thin bar
 * to the target (the app's SkyCard since 20.10.2026), then day band and week strip. */
export function todayScreen(lang) {
  const t = T[lang];
  const de = lang === 'de';
  // 7:58 start, break 12:30–13:00, 7:48 target, 30 min break → Feierabend 16:16. Now 15:10:45: worked 6:42:45,
  // 1:06 to go (rounded up). Phase "Abend" (15–20).
  const p = (hm(6, 42) + 0.75) / hm(7, 48);
  const week = de ? ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const vals = [[488, '+0:20'], [490, '+0:22'], [402, '6:42'], [0, ''], [0, ''], [0, ''], [0, '']];
  const cols = vals.map(([m, d], i) => {
    const x = 6 + i * 44, bh = Math.round((m / 600) * 56);
    const cls = i === 2 ? ' is-today' : i > 2 ? ' is-future' : '';
    return `<g class="ws-col${cls}"><rect class="ws-track" x="${x}" y="8" width="30" height="56" rx="6"/>` +
      (m ? `<rect class="ws-bar" x="${x}" y="${64 - bh}" width="30" height="${bh}" rx="6"/>` : '') +
      `<line class="ws-target" x1="${x - 2}" y1="${64 - Math.round((468 / 600) * 56)}" x2="${x + 32}" y2="${64 - Math.round((468 / 600) * 56)}"/>` +
      `<text class="ws-day" x="${x + 15}" y="80">${week[i]}</text><text class="ws-diff ${sign(d)}" x="${x + 15}" y="94">${d}</text></g>`;
  }).join('');
  const alt = de
    ? 'Fieravend, Seite Stempeln am Nachmittag: Himmel in Abendfarbe. Heute gearbeitet 6:42:45, Feierabend 16:16, noch 1:06, ein Balken zeigt, wie weit du beim Soll bist. Tagesband von 7:58 bis jetzt mit Pause um 12:30. Wochenstreifen: Montag plus 0:20, Dienstag plus 0:22, heute 6:42.'
    : 'Fieravend, Clock screen in the afternoon: evening sky. Worked today 6:42:45, you finish at 16:16, 1:06 to go, a bar shows how far you are towards your target. Day band from 7:58 until now with a break at 12:30. Week strip: Monday plus 0:20, Tuesday plus 0:22, today 6:42.';
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${alt}"><div class="ui-in ui-in-sky" aria-hidden="true">` +
    `<span class="ui-sky sky-evening"><span class="ui-sky-top"><span class="ui-large">${t.today}</span><span class="ui-date">${t.date}</span></span>` +
    `<span class="ui-sig ui-sig-run"><span class="ui-sig-l">${de ? 'Heute gearbeitet' : 'Worked today'}</span><b class="ui-sig-n num">6:42:45</b><span class="ui-sig-s num">${de ? 'Feierabend 16:16 · noch 1:06' : 'Done at 16:16 · 1:06 to go'}</span>${targetBar(p)}</span></span>` +
    `<span class="ui-pad"><span class="ui-stamp">${t.out}</span>` +
    `<span class="ui-card ui-card-tight"><span class="ui-sub">${de ? 'Heute' : 'Today'}</span>${dayBand({ blocks: [[hm(7, 58), hm(12, 30), 'job-a'], [hm(13, 0), hm(15, 10), 'job-a']], now: hm(15, 10), end: hm(16, 16) })}</span>` +
    `<span class="ui-card ui-card-tight"><span class="ui-row"><span class="ui-sub">${de ? 'Diese Woche' : 'This week'}</span><b class="plus num">+0:42</b></span>` +
    `<svg class="ws" viewBox="0 0 312 100" focusable="false">${cols}</svg></span></span>` +
    `${tabbar(lang, 'today')}</div></div>`;
  return shot('heute', lang, alt, html);
}

/** "Monat" list for October, each day with its small day band. */
export function monthScreen(lang) {
  const t = T[lang];
  const bands = [[[hm(7, 52), hm(12, 15)], [hm(12, 45), hm(16, 20)]], [[hm(8, 0), hm(12, 0)], [hm(12, 30), hm(16, 15)]], null,
    [[hm(7, 55), hm(12, 0)], [hm(12, 45), hm(16, 40)]], null, [[hm(8, 5), hm(12, 30)], [hm(13, 15), hm(17, 10)]], [[hm(7, 58), hm(12, 0), 'is-late'], [hm(12, 30), hm(15, 30), 'is-late']]];
  const rows = t.rows.map(([d, time, diff, kind], i) => {
    const extra = kind === 'late' ? `<span class="ui-tag">${t.late}</span>` : '';
    const cls = kind === 'holiday' ? ' ui-day-off' : kind === 'leave' ? ' ui-day-leave' : '';
    const band = bands[i] ? dayBand({ blocks: bands[i].map(([s, e, c]) => [s, e, `job-a ${c || ''}`]), mini: true, from: 6, to: 19, w: 120 }) : '';
    return `<span class="ui-day ui-day-band${cls}"><b>${d}</b><span class="num">${band || ''}<span class="ui-day-t">${time}${extra}</span></span><span class="num ${sign(diff)}">${diff}</span></span>`;
  }).join('');
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${t.monthAlt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-monthbar"><span class="ui-chev">‹</span><b>${t.month}</b><span class="ui-chev">›</span></span>` +
    `<span class="ui-card ui-list">${rows}</span>` +
    `<span class="ui-foot"><span>${lang === 'de' ? '1.–8. Okt.' : '1–8 Oct'}</span><span><b class="num">46:53</b> ${lang === 'de' ? 'Std.' : 'h'}</span><span><b class="plus num">+0:05</b></span></span>` +
    `${tabbar(lang, 'month')}</div></div>`;
  return shot('monat', lang, t.monthAlt, html);
}

/** Month as a heat map (spec section 4): plus in three moss levels, minus in three evening levels, symbols for leave and holidays. */
export function calendarScreen(lang) {
  const de = lang === 'de';
  // October 2026 starts on a Thursday. Diffs in minutes for worked days; 'h' holiday, 'v' vacation, '' free/future.
  const days = { 1: 10, 2: -3, 3: 'h', 5: 12, 6: 'v', 7: 32, 8: -46, 9: 5, 12: 40, 13: -12, 14: 25, 15: 70, 16: 0, 19: 20, 20: 22 };
  const lvl = (m) => (m >= 45 ? 'p3' : m >= 15 ? 'p2' : m > 0 ? 'p1' : m <= -45 ? 'm3' : m <= -15 ? 'm2' : m < 0 ? 'm1' : 'z');
  const head = (de ? ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] : ['M', 'T', 'W', 'T', 'F', 'S', 'S']).map((d) => `<span class="hm-h">${d}</span>`).join('');
  let cells = '<span class="hm-c hm-empty"></span>'.repeat(3);
  for (let d = 1; d <= 31; d++) {
    const v = days[d];
    const today = d === 21 ? ' is-today' : '';
    if (v === 'h') cells += `<span class="hm-c hm-hol${today}"><b>${d}</b><svg viewBox="0 0 24 24" focusable="false"><path d="M6 20V4M6 5h10l-2 3 2 3H6"/></svg></span>`;
    else if (v === 'v') cells += `<span class="hm-c hm-vac${today}"><b>${d}</b><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg></span>`;
    else if (typeof v === 'number') cells += `<span class="hm-c hm-${lvl(v)}${today}"><b>${d}</b><i class="num">${v > 0 ? '+' : v < 0 ? '−' : ''}${Math.floor(Math.abs(v) / 60)}:${String(Math.abs(v) % 60).padStart(2, '0')}</i></span>`;
    else cells += `<span class="hm-c${today}${d > 21 ? ' hm-future' : ''}"><b>${d}</b></span>`;
  }
  const alt = de ? 'Fieravend, Monat als Kalender: jeder Tag farbig nach Plus oder Minus, Feiertag mit Fahne, Urlaub mit Sonne.' : 'Fieravend, month as a calendar: every day coloured by plus or minus, holiday with a flag, leave with a sun.';
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${alt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-monthbar"><span class="ui-chev">‹</span><b>${de ? 'Oktober 2026' : 'October 2026'}</b><span class="ui-chev">›</span></span>` +
    `<span class="ui-card"><span class="hm">${head}${cells}</span></span>` +
    `<span class="hm-legend"><span class="hm-c hm-m2"></span>${de ? 'Minus' : 'Minus'}<span class="hm-c hm-z"></span>${de ? 'genau' : 'even'}<span class="hm-c hm-p2"></span>${de ? 'Plus' : 'Plus'}</span>` +
    `${tabbar(lang, 'month')}</div></div>`;
  return shot('kalender', lang, alt, html);
}

/** "Übersicht": account balance like a bank app with 12 month-end points, leave as a dot row. */
export function overviewScreen(lang) {
  const t = T[lang];
  const de = lang === 'de';
  const series = [520, 610, 700, 655, 760, 845, 900, 980, 1050, 1120, 1235, 1275]; // minutes, Nov–Oct; last = +21:15
  const min = 480, max = 1300, W = 290, H = 70;
  const pts = series.map((v, i) => [10 + (i * (W - 20)) / (series.length - 1), H - 8 - ((v - min) / (max - min)) * (H - 16)]);
  const line = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  const dots = pts.map(([x, y], i) => `<circle class="${i === pts.length - 1 ? 'sp-last' : 'sp-dot'}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${i === pts.length - 1 ? 4.5 : 2.5}"/>`).join('');
  const months = de ? ['N', 'D', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O'] : ['N', 'D', 'J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O'];
  const labels = pts.map(([x], i) => `<text class="sp-m" x="${x.toFixed(1)}" y="${H + 10}">${months[i]}</text>`).join('');
  const leave = Array.from({ length: 34 }, (_, i) => `<span class="lv ${i < 19 ? 'lv-taken' : i < 23 ? 'lv-planned' : 'lv-free'}"></span>`).join('');
  const html = `<div class="ui-screen" data-ui role="img" aria-label="${t.overAlt}"><div class="ui-in" aria-hidden="true">` +
    `<span class="ui-large">${t.over}</span>` +
    `<span class="ui-card"><span class="ui-sub">${de ? 'Kontostand Überstunden' : 'Overtime balance'}</span><b class="ui-hero ui-hero-xl plus num">+21:15</b>` +
    `<svg class="sp" viewBox="0 0 ${W} ${H + 14}" focusable="false"><path class="sp-line" d="${line}"/>${dots}${labels}</svg>` +
    `<span class="ui-note">${de ? 'Saldo am Monatsende, letzte 12 Monate' : 'Balance at month end, last 12 months'}</span></span>` +
    `<span class="ui-card"><span class="ui-row"><span class="ui-sub">${t.leave}</span><b class="num">${de ? '11 von 34 frei' : '11 of 34 free'}</b></span>` +
    `<span class="lv-row">${leave}</span><span class="lv-key"><span class="lv lv-taken"></span>${de ? 'genommen' : 'taken'}<span class="lv lv-planned"></span>${de ? 'geplant' : 'planned'}<span class="lv lv-free"></span>${de ? 'frei' : 'free'}</span></span>` +
    `${tabbar(lang, 'overview')}</div></div>`;
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

/** The clock card in three states for the pinned day, each in the sky colour of its time of day: in the morning
 * before clocking in ("Heute 7:48 Soll"), on the break at midday (the stopwatch stands still, bar to the target), and
 * after clocking out, when the sun goes down ("Feierabend."). Same day as the today screen: 7:58 start, break from
 * 12:31, out at 16:31 with 8:03 worked, +0:15. */
export function clockStages(lang) {
  const de = lang === 'de';
  const st = de
    ? [['7:58', 'Heute', '7:48', 'Soll', 'Einstempeln', 'in', 'sky-morning', null],
      ['12:31', 'Pause', '4:33:12', 'Feierabend 16:16 · noch 3:45', 'Weiter', 'pause', 'sky-day', 273 / 468],
      ['16:31', '', 'Feierabend.', '8:03 heute, +0:15', 'Einstempeln', 'out', 'sky-evening', null]]
    : [['7:58', 'Today', '7:48', 'Target', 'Clock in', 'in', 'sky-morning', null],
      ['12:31', 'Break', '4:33:12', 'Done at 16:16 · 3:45 to go', 'Resume', 'pause', 'sky-day', 273 / 468],
      ['16:31', '', 'Done for the day.', '8:03 today, +0:15', 'Clock in', 'out', 'sky-evening', null]];
  const alt = de
    ? 'Die Stempeluhr von Fieravend über den Tag: morgens um 7:58 heute 7:48 Soll und der Knopf Einstempeln, mittags die Pause bei 4:33:12 gearbeitet, Feierabend 16:16, um 16:31 Feierabend mit 8:03 Stunden, und die Sonne geht unter.'
    : 'The Fieravend clock across the day: at 7:58 a target of 7:48 today and the Clock in button, a break at midday at 4:33:12 worked, done at 16:16, at 16:31 done for the day with 8:03 hours, and the sun goes down.';
  const sunset = `<span class="ui-stage-dial"><svg viewBox="0 0 200 120" aria-hidden="true" focusable="false"><defs><clipPath id="sd-${lang}-out"><rect x="0" y="0" width="200" height="86"/></clipPath></defs>` +
    `<g clip-path="url(#sd-${lang}-out)"><circle class="ui-sun sun-out" cx="100" cy="60" r="20"/></g><line class="ui-horizon" x1="10" y1="86" x2="190" y2="86"/></svg></span>`;
  const cards = st.map(([now, label, hero, sub, btn, k, sky, prog]) =>
    `<span class="ui-stage-card st-${k} ${sky}"><span class="ui-stage-now num">${now}</span>` +
    (k === 'out' ? sunset : '') +
    `<span class="ui-stage-sig">${label ? `<span class="ui-sig-l">${label}</span>` : ''}<b class="ui-hero num">${hero}</b><span class="ui-sig-s num">${sub}</span>${prog != null ? targetBar(prog) : ''}</span>` +
    `<span class="ui-stamp${k === 'pause' ? ' ui-stamp-quiet' : ''}">${btn}</span></span>`).join('');
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

/** iPhone, iPad and Apple Watch: what each one does. */
export function devicesFragment(lang) {
  const de = lang === 'de';
  const rows = de
    ? [['iPhone', 'alles, mit Sperrbildschirm'], ['iPad', 'Seitenleiste, quer und hochkant'], ['Apple Watch', 'Stand, Stempeln, Komplikationen']]
    : [['iPhone', 'everything, with lock screen'], ['iPad', 'sidebar, landscape and portrait'], ['Apple Watch', 'status, clock, complications']];
  const alt = de ? 'Fieravend auf drei Geräten: iPhone mit allem und Sperrbildschirm, iPad mit Seitenleiste quer und hochkant, Apple Watch mit Stand von heute, Stempeln und Komplikationen.' : 'Fieravend on three devices: iPhone with everything and the lock screen, iPad with a sidebar in landscape and portrait, Apple Watch with today’s status, clocking and complications.';
  return `<div class="ui-panel" data-ui role="img" aria-label="${alt}"><span class="ui-values" aria-hidden="true">` +
    rows.map(([k, v]) => `<span class="ui-row"><span>${k}</span><b>${v}</b></span>`).join('') + '</span></div>';
}
