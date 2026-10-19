/**
 * Drawn parts of the site: the mark (dial with horizon, from the wiki page "Logo & App-Icon", draft 18.10.2026)
 * and the illustrated app screens. The screens are drawn in HTML, not screenshots: the app is not finished yet.
 * All numbers in them are invented examples (people: Mira, Sam, Ben; places: Praxis am Markt, Café Mika).
 * Colours come from CSS classes (site.css), so light and dark mode work without separate files.
 */

/**
 * The mark. Geometry on a 1024 grid, exactly as in the draft SVG.
 * simple = favicon version (no hour ticks, no reflection), used below 40 px.
 */
export function mark({ id = 'm', simple = false, cls = 'mark', label = '' } = {}) {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  const reflection = simple ? '' :
    '<line class="m-sun-s" x1="641.4" y1="674" x2="791.4" y2="674" stroke-width="18"/>' +
    '<line class="m-sun-s" x1="668.4" y1="716" x2="764.4" y2="716" stroke-width="18"/>' +
    '<line class="m-sun-s" x1="694.4" y1="758" x2="738.4" y2="758" stroke-width="18"/>';
  const ticks = simple ? '' :
    '<line class="m-line" x1="512" y1="186" x2="512" y2="230" stroke-width="28"/>' +
    '<line class="m-line" x1="838" y1="512" x2="794" y2="512" stroke-width="28"/>' +
    '<line class="m-line" x1="186" y1="512" x2="230" y2="512" stroke-width="28"/>';
  const w = simple ? 56 : 40;
  return `<svg class="${cls}" viewBox="116 116 792 792" ${a11y}>` +
    `<defs><clipPath id="${id}-dial"><circle cx="512" cy="512" r="360"/></clipPath></defs>` +
    `<g clip-path="url(#${id}-dial)"><circle class="m-sun" cx="716.4" cy="630" r="96"/>` +
    `<rect class="m-water" x="0" y="630" width="1024" height="394"/>${reflection}</g>` +
    `<line class="m-line" x1="164" y1="630" x2="860" y2="630" stroke-width="20" clip-path="url(#${id}-dial)"/>` +
    `<circle class="m-ring" cx="512" cy="512" r="360" stroke-width="${w}"/>${ticks}` +
    `<line class="m-line" x1="512" y1="512" x2="603.8" y2="565" stroke-width="${w}"/>` +
    `<circle class="m-dot" cx="512" cy="512" r="34"/></svg>`;
}

/** Big decorative dial behind the hero phone: outline only, the sun sinks once on load (transform only). */
export function heroDial() {
  return `<svg class="hero-dial" viewBox="0 0 1024 1024" aria-hidden="true" focusable="false">` +
    `<defs><clipPath id="hd-clip"><rect x="0" y="0" width="1024" height="630"/></clipPath></defs>` +
    `<g clip-path="url(#hd-clip)"><circle class="hd-sun" cx="716.4" cy="600" r="96"/></g>` +
    `<circle class="hd-ring" cx="512" cy="512" r="360"/>` +
    `<line class="hd-line" x1="40" y1="630" x2="984" y2="630"/>` +
    `<line class="hd-hand" x1="512" y1="512" x2="603.8" y2="565"/>` +
    `<circle class="hd-dot" cx="512" cy="512" r="20"/></svg>`;
}

const T = {
  de: {
    phoneLabel: 'Beispiel: Fieravend auf dem iPhone, Seite Heute. Job Praxis am Markt, plus 3 Stunden 20 diese Woche, eingestempelt seit 7:58, heute 3:12, darunter der Knopf Ausstempeln und die Tage der Woche.',
    today: 'Heute', job: 'Praxis am Markt', week: 'Plus diese Woche', since: 'Eingestempelt seit 7:58', running: '3:12 heute',
    out: 'Ausstempeln', days: [['Mo', '8:20', '+0:20'], ['Di', '8:50', '+0:50'], ['Mi', '9:10', '+1:10'], ['Do', '9:00', '+1:00']],
    sheetLabel: 'Beispiel: Stundenzettel für Oktober als PDF mit Datum, Beginn, Ende, Pause und Arbeitszeit je Tag. Ein Eintrag ist mit Stern als nachgetragen markiert. Unten die Summe mit plus 2 Stunden 35.',
    sheetTitle: 'Stundenzettel Oktober 2026', sheetWho: 'Ben Berg · Werkstatt Nord', cols: ['Tag', 'Beginn', 'Ende', 'Pause', 'Ist'],
    rows: [['Mo 5.', '7:00', '16:05', '0:45', '8:20'], ['Di 6.', '7:00', '15:45', '0:45', '8:00'], ['Mi 7.', '6:55', '16:30', '0:45', '8:50*'], ['Do 8.', '7:00', '15:50', '0:45', '8:05'], ['Fr 9.', '7:00', '13:20', '0:30', '5:50']],
    sheetSum: 'Woche: 39:05 Ist, 36:30 Soll', sheetPlus: '+2:35 Plus', sheetFoot: '* nachgetragen · Erstellt mit Fieravend',
    hint: 'Hinweis', hintText: 'Heute fehlt noch eine Pause.', hintMore: 'Nach 6 Stunden stehen dir 30 Minuten zu.',
    jobsLabel: 'Beispiel: Zwei Jobs an einem Tag. Praxis von 8 bis 14:30 Uhr, Café von 18 bis 22:30 Uhr. Zusammen 10:30. Hinweis: Bis zum nächsten Dienst um 7 Uhr liegen nur 8:30 Stunden Ruhe.',
    jobsDay: 'Dienstag', jobA: 'Praxis', jobB: 'Café Mika', together: 'Zusammen 10:30 heute',
    rest: 'Bis zum Dienst morgen um 7:00 liegen nur 8:30 Stunden. 11 sind Pflicht.',
  },
  en: {
    phoneLabel: 'Example: Fieravend on the iPhone, Today screen. Job Praxis am Markt, plus 3 hours 20 this week, clocked in since 7:58, 3:12 today, below the Clock out button and the days of the week.',
    today: 'Today', job: 'Praxis am Markt', week: 'Plus this week', since: 'Clocked in since 7:58', running: '3:12 today',
    out: 'Clock out', days: [['Mon', '8:20', '+0:20'], ['Tue', '8:50', '+0:50'], ['Wed', '9:10', '+1:10'], ['Thu', '9:00', '+1:00']],
    sheetLabel: 'Example: time sheet for October as a PDF with date, start, end, break and hours per day. One entry has a star because it was added later. At the bottom the total, plus 2 hours 35.',
    sheetTitle: 'Time sheet October 2026', sheetWho: 'Ben Berg · Werkstatt Nord', cols: ['Day', 'Start', 'End', 'Break', 'Hours'],
    rows: [['Mon 5', '7:00', '16:05', '0:45', '8:20'], ['Tue 6', '7:00', '15:45', '0:45', '8:00'], ['Wed 7', '6:55', '16:30', '0:45', '8:50*'], ['Thu 8', '7:00', '15:50', '0:45', '8:05'], ['Fri 9', '7:00', '13:20', '0:30', '5:50']],
    sheetSum: 'Week: 39:05 worked, 36:30 contract', sheetPlus: '+2:35 plus', sheetFoot: '* added later · Made with Fieravend',
    hint: 'Note', hintText: 'A break is still missing today.', hintMore: 'After 6 hours you are owed 30 minutes.',
    jobsLabel: 'Example: two jobs on one day. Praxis from 8:00 to 14:30, Café from 18:00 to 22:30. 10:30 in total. Note: only 8:30 hours of rest before the next shift at 7:00.',
    jobsDay: 'Tuesday', jobA: 'Praxis', jobB: 'Café Mika', together: '10:30 together today',
    rest: 'Only 8:30 hours until your shift tomorrow at 7:00. 11 are required.',
  },
};

/** iPhone with the "Heute" screen. One role=img, the inside is decoration for screen readers. */
export function phone(lang) {
  const t = T[lang];
  const days = t.days.map(([d, h, p]) => `<span class="ph-day"><b>${d}</b><span>${h}</span><span class="plus">${p}</span></span>`).join('');
  return `<div class="phone" role="img" aria-label="${t.phoneLabel}"><div class="ph-screen" aria-hidden="true">` +
    `<span class="ph-top"><span>9:41</span><span class="ph-island"></span><span>100 %</span></span>` +
    `<span class="ph-title">${t.today}</span><span class="ph-chip">${t.job}</span>` +
    `<span class="ph-big plus num">+3:20</span><span class="ph-sub">${t.week}</span>` +
    `<span class="ph-card"><span class="ph-dotline"><span class="ph-live"></span>${t.since}</span><span class="ph-run num">${t.running}</span></span>` +
    `<span class="ph-btn">${t.out}</span><span class="ph-days num">${days}</span></div></div>`;
}

/** Monthly time sheet (PDF) as a paper sheet. */
export function sheet(lang) {
  const t = T[lang];
  const head = t.cols.map((c) => `<span>${c}</span>`).join('');
  const rows = t.rows.map((r) => `<span class="sh-row">${r.map((c) => `<span>${c}</span>`).join('')}</span>`).join('');
  return `<div class="sheet" role="img" aria-label="${t.sheetLabel}"><div aria-hidden="true">` +
    `<span class="sh-head">${mark({ id: `sh-${lang}`, simple: true, cls: 'sh-mark' })}<span><b>${t.sheetTitle}</b><span>${t.sheetWho}</span></span></span>` +
    `<span class="sh-row sh-cols">${head}</span>${rows}` +
    `<span class="sh-sum"><span>${t.sheetSum}</span><b class="plus num">${t.sheetPlus}</b></span>` +
    `<span class="sh-foot">${t.sheetFoot}</span></div></div>`;
}

/** Calm law hint as it appears in the app (warn colour, symbol, never red). */
export function hintCard(lang) {
  const t = T[lang];
  return `<div class="hint" role="note"><svg class="hint-ico" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9.5"/><line x1="12" y1="7.5" x2="12" y2="13"/><circle class="hint-dot" cx="12" cy="16.5" r="1.2"/></svg>` +
    `<span><span class="visually-hidden">${t.hint}: </span><b>${t.hintText}</b><span>${t.hintMore}</span></span></div>`;
}

/** Two jobs on one day as a timeline 6:00–24:00. */
export function jobsDay(lang) {
  const t = T[lang];
  // positions are fixed in site.css (.jd-a, .jd-b) on a 6:00–24:00 track, no inline styles (CSP)
  const bar = (cls, a, b, label, time) => `<span class="jd-bar ${cls}"><b>${label}</b><span>${time}</span></span>`;
  return `<div class="jobsday" role="img" aria-label="${t.jobsLabel}"><div aria-hidden="true">` +
    `<span class="jd-head"><b>${t.jobsDay}</b><span class="num">${t.together}</span></span>` +
    `<span class="jd-track">${bar('jd-a', 8, 14.5, t.jobA, '8:00–14:30')}${bar('jd-b', 18, 22.5, t.jobB, '18:00–22:30')}</span>` +
    `<span class="jd-scale num"><span>6</span><span>12</span><span>18</span><span>24</span></span>` +
    `<span class="hint hint-sm"><svg class="hint-ico" viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9.5"/><line x1="12" y1="7.5" x2="12" y2="13"/><circle class="hint-dot" cx="12" cy="16.5" r="1.2"/></svg><span><b>${t.rest}</b></span></span>` +
    `</div></div>`;
}
