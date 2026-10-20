/**
 * The Feierabend clock: start time + hours for today + the legal break → when you can leave. Used in the start page hero
 * (Germany only, compact) and on /rechner/feierabend/ (with country). Logic in /assets/start.js, same break rules as the
 * overtime calculator (rechner.js): DE § 4 ArbZG, AT § 11 AZG, CH Art. 15 ArG, EU Art. 4 RL 2003/88/EG.
 * Without script it shows the example: 7:58 + 7:48 + 0:30 = 16:16.
 */
const T = {
  de: {
    title: 'Wann ist heute Feierabend?', start: 'Angefangen um', target: 'Soll heute', land: 'Land',
    targets: [['4:00', '4:00 Std.'], ['6:00', '6:00 Std.'], ['7:00', '7:00 Std.'], ['7:48', '7:48 Std.'], ['8:00', '8:00 Std.'], ['8:24', '8:24 Std.'], ['9:00', '9:00 Std.'], ['10:00', '10:00 Std.']],
    lands: [['de', 'Deutschland'], ['at', 'Österreich'], ['ch', 'Schweiz'], ['eu', 'anderes EU-Land']],
    outLabel: 'Feierabend um', pause: 'mit 30 Minuten Pause nach § 4 ArbZG',
  },
  en: {
    title: 'When do I finish today?', start: 'Started at', target: 'Hours today', land: 'Country',
    targets: [['4:00', '4:00 h'], ['6:00', '6:00 h'], ['7:00', '7:00 h'], ['7:48', '7:48 h'], ['8:00', '8:00 h'], ['8:24', '8:24 h'], ['9:00', '9:00 h'], ['10:00', '10:00 h']],
    lands: [['de', 'Germany'], ['at', 'Austria'], ['ch', 'Switzerland'], ['eu', 'other EU country']],
    outLabel: 'You finish at', pause: 'with a 30 minute break (§ 4 ArbZG, Germany)',
  },
};

export function feierabendClock(lang, { country = false, heading = 'h2' } = {}) {
  const k = T[lang];
  const targets = country ? k.targets : k.targets.filter(([v]) => ['6:00', '7:48', '8:00', '8:24'].includes(v));
  const opts = targets.map(([v, l]) => `<option value="${v}"${v === '7:48' ? ' selected' : ''}>${l}</option>`).join('');
  const land = country
    ? `<p class="fa-field fa-wide"><label for="fa-land">${k.land}</label><select id="fa-land">${k.lands.map(([v, l]) => `<option value="${v}">${l}</option>`).join('')}</select></p>`
    : '';
  return `<div class="fa${country ? ' fa-big' : ''}" id="fa" data-ui role="group" aria-labelledby="fa-t">
  <${heading} class="fa-title" id="fa-t">${k.title}</${heading}>
  <div class="fa-dial" aria-hidden="true"><svg viewBox="0 0 320 180" focusable="false">
    <defs><clipPath id="fa-sky"><rect x="0" y="0" width="320" height="150"/></clipPath></defs>
    <path class="fa-arc" d="M30 150 A130 130 0 0 1 290 150"/>
    <g clip-path="url(#fa-sky)"><circle class="fa-sun" id="fa-sun" cx="160" cy="20" r="18"/></g>
    <rect class="fa-water" x="0" y="150" width="320" height="30"/>
    <line class="fa-horizon" x1="0" y1="150" x2="320" y2="150"/>
  </svg></div>
  <div class="fa-fields">
    <p class="fa-field"><label for="fa-start">${k.start}</label><input id="fa-start" type="time" value="07:58" step="60"></p>
    <p class="fa-field"><label for="fa-target">${k.target}</label><select id="fa-target">${opts}</select></p>
    ${land}
  </div>
  <p class="fa-out" aria-live="polite"><span class="fa-out-l">${k.outLabel}</span> <b class="fa-time num" id="fa-time">16:16</b>
  <span class="fa-sub" id="fa-pause">${k.pause}</span></p>
  <p class="fa-sub fa-now num" id="fa-now"></p>
</div>`;
}
