/**
 * Device frames for real app screenshots (21.10.2026): iPhone, iPad and Apple Watch drawn in CSS (no Apple artwork,
 * no images of the hardware), the screen is the screenshot from `App/tools/screenshots.sh`.
 *
 * Screenshots live in site/static/shots as `<name>-<lang>-<light|dark>.webp` (made by site/tools/shots-webp.py from
 * the PNGs). Dark mode shows the dark screenshot when there is one. An English page without an English screenshot
 * falls back to the German one only when `fallbackLang` allows it (never for pages where the text would not match).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SHOTS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'static', 'shots');
const SIZE = { phone: [1206, 2622], tablet: [2064, 2752], watch: [422, 514] };

function file(name, lang, look) {
  for (const ext of ['webp', 'png']) {
    const f = `${name}-${lang}-${look}.${ext}`;
    if (fs.existsSync(path.join(SHOTS, f))) return f;
  }
  return null;
}

/** True when a light screenshot exists for this language. */
export const hasShot = (name, lang) => Boolean(file(name, lang, 'light'));

/** <picture> with the light screenshot and, if present, the dark one for dark mode. */
export function screenshot(name, lang, alt, { kind = 'phone', eager = false } = {}) {
  const light = file(name, lang, 'light');
  if (!light) return '';
  const dark = file(name, lang, 'dark');
  const [w, h] = SIZE[kind];
  const src = dark ? `<source srcset="/assets/shots/${dark}" media="(prefers-color-scheme: dark)">` : '';
  const load = eager ? 'fetchpriority="high"' : 'loading="lazy"';
  return `<picture>${src}<img src="/assets/shots/${light}" alt="${alt}" width="${w}" height="${h}" ${load} decoding="async"></picture>`;
}

/** iPhone frame around any screen content (a screenshot or an HTML screen). */
export const phone = (inner, cls = '') =>
  `<div class="dev dev-phone ${cls}"><span class="dev-btn dev-btn-a" aria-hidden="true"></span><span class="dev-btn dev-btn-b" aria-hidden="true"></span>` +
  `<span class="dev-btn dev-btn-c" aria-hidden="true"></span><div class="dev-screen">${inner}<span class="dev-island" aria-hidden="true"></span></div></div>`;

/** iPad frame (portrait). */
export const tablet = (inner, cls = '') => `<div class="dev dev-tablet ${cls}"><div class="dev-screen">${inner}</div></div>`;

/** Apple Watch frame with crown and side button. */
export const watch = (inner, cls = '') =>
  `<div class="dev dev-watch ${cls}"><span class="dev-crown" aria-hidden="true"></span><span class="dev-side" aria-hidden="true"></span><div class="dev-screen">${inner}</div></div>`;

/** Screenshot in an iPhone frame, or '' when there is no screenshot. */
export function phoneShot(name, lang, alt, { cls = '', eager = false } = {}) {
  const pic = screenshot(name, lang, alt, { kind: 'phone', eager });
  return pic ? phone(pic, cls) : '';
}

/** Screenshot in an iPad frame, or ''. */
export function tabletShot(name, lang, alt, { cls = '' } = {}) {
  const pic = screenshot(name, lang, alt, { kind: 'tablet' });
  return pic ? tablet(pic, cls) : '';
}

/**
 * The Apple Watch app in HTML, the same layout as App/FieravendWatch (state, today's time, target, Feierabend,
 * overtime, buttons). Used until a real watch screenshot exists.
 */
export function watchScreen(lang, { worked = '5:46', target = '7:48', end = '16:14', balance = '+22:46' } = {}) {
  const de = lang === 'de';
  const alt = de
    ? `Fieravend auf der Apple Watch: läuft, heute ${worked} von ${target}, Feierabend ${end}, Überstunden ${balance}, Knöpfe Pause und Ausstempeln.`
    : `Fieravend on the Apple Watch: running, ${worked} of ${target} today, done at ${end}, overtime ${balance}, buttons Break and Clock out.`;
  const shot = screenshot('watch', lang, alt, { kind: 'watch' });
  if (shot) return shot;
  return `<div class="w-ui" role="img" aria-label="${alt}"><div aria-hidden="true">` +
    `<span class="w-title">Praxis am Markt</span>` +
    `<span class="w-state">${de ? 'Läuft' : 'Running'}</span>` +
    `<b class="w-num num">${worked}</b>` +
    `<span class="w-muted num">${de ? 'von' : 'of'} ${target}</span>` +
    `<span class="w-end num">${de ? 'Feierabend' : 'Done at'} ${end}</span>` +
    `<span class="w-plus num">${de ? 'Überstunden' : 'Overtime'} ${balance}</span>` +
    `<span class="w-btn">${de ? 'Pause' : 'Break'}</span><span class="w-btn w-btn-out">${de ? 'Ausstempeln' : 'Clock out'}</span>` +
    '</div></div>';
}
