/**
 * WCAG 2.2 contrast check against the design tokens in site/static/site.css (light :root and dark block).
 * Pairs = every text/background combination the site uses. Targets: text 4.5:1, large text and graphics 3:1.
 *   node site/tools/check-contrast.mjs      (prints the table, exits 1 on failure)
 * Also imported by build.mjs, so a token change that breaks contrast stops the build.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const CSS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'static', 'site.css');

/** [foreground, background, minimum, what] */
const PAIRS = [
  ['text', 'bg', 4.5, 'body text'], ['text', 'surface', 4.5, 'text on cards'], ['text', 'surface-2', 4.5, 'text on sand'],
  ['text-muted', 'bg', 4.5, 'small print'], ['text-muted', 'surface', 4.5, 'small print on cards'], ['text-muted', 'surface-2', 4.5, 'small print on sand'],
  ['accent-strong', 'bg', 4.5, 'links'], ['accent-strong', 'surface', 4.5, 'links on cards'], ['accent-strong', 'surface-2', 4.5, 'links on sand'],
  ['on-accent', 'accent-strong', 4.5, 'primary button'],
  ['plus', 'bg', 4.5, 'plus'], ['plus', 'surface', 4.5, 'plus on cards'], ['plus', 'surface-2', 4.5, 'plus on sand'],
  ['minus', 'bg', 4.5, 'minus'], ['minus', 'surface', 4.5, 'minus on cards'],
  ['warn', 'surface', 4.5, 'hint text'], ['warn', 'bg', 4.5, 'hint text'],
  ['secondary', 'surface', 4.5, 'secondary text'],
  ['accent', 'bg', 3, 'sun, large numbers'], ['accent', 'surface', 3, 'sun on cards'],
  ['border-strong', 'bg', 3, 'input borders'], ['border-strong', 'surface', 3, 'input borders on cards'],
  ['focus', 'bg', 3, 'focus ring'], ['focus', 'surface', 3, 'focus ring on cards'], ['focus', 'surface-2', 3, 'focus ring on sand'],
  ['night-text', 'night-bg', 4.5, 'night band text'], ['night-muted', 'night-bg', 4.5, 'night band small print'],
  ['night-link', 'night-bg', 4.5, 'night band links'], ['night-accent', 'night-bg', 4.5, 'night band label (small caps)'],
  ['on-accent', 'accent-hover', 4.5, 'primary button, hover'], ['surface', 'secondary', 4.5, 'text on the blue job bar'],
  ['warn', 'surface-2', 4.5, 'hint text on sand'], ['bg', 'text', 4.5, 'clock-out button (inverted)'],
];

function tokens(block) {
  const out = {};
  for (const [, k, v] of block.matchAll(/--fv-([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})/g)) out[k] = v;
  return out;
}
function lum(h) {
  const n = h.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

export function checkContrast({ quiet = false } = {}) {
  const css = fs.readFileSync(CSS, 'utf8');
  const light = tokens(css.match(/:root\s*\{([\s\S]*?)\}/)[1]);
  const darkBlock = css.match(/@media \(prefers-color-scheme: dark\)\s*\{\s*:root\s*\{([\s\S]*?)\}/);
  const dark = { ...light, ...tokens(darkBlock ? darkBlock[1] : '') };
  const fails = [];
  const rows = [];
  for (const [mode, t] of [['light', light], ['dark', dark]]) {
    for (const [fg, bg, min, what] of PAIRS) {
      if (!t[fg] || !t[bg]) { fails.push(`${mode}: token missing for ${fg} on ${bg}`); continue; }
      const r = ratio(t[fg], t[bg]);
      const ok = r >= min;
      rows.push(`${ok ? 'ok  ' : 'FAIL'} ${mode.padEnd(5)} ${(fg + ' on ' + bg).padEnd(34)} ${r.toFixed(2).padStart(5)}:1 (min ${min}) ${what}`);
      if (!ok) fails.push(rows[rows.length - 1]);
    }
  }
  if (!quiet) console.log(rows.join('\n'));
  return fails;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const f = checkContrast();
  console.log(f.length ? `\n${f.length} failing pair(s)` : `\nall ${PAIRS.length * 2} pairs pass`);
  process.exit(f.length ? 1 : 0);
}
