/**
 * The mark "Sünn" (brand 2, 20.10.2026, docs/brand.md): a content sun with closed eyes, half set into a soft
 * North Sea wave, with its reflection. Colours come from CSS classes (site.css), so light and dark mode work.
 * App screens: screens.mjs.
 */

/** Eyes of Sünn on a 1024 grid around the sun centre. ruhig = closed and content (default), wach = open, stolz = closed, smiling. */
const EYES = {
  ruhig: (x, y, w) => `<path class="m-eye" d="M${x - 38} ${y - 14} q 38 36 76 0" stroke-width="${w}"/>`,
  stolz: (x, y, w) => `<path class="m-eye" d="M${x - 38} ${y + 8} q 38 -38 76 0" stroke-width="${w}"/>`,
  wach: (x, y) => `<circle class="m-eye-dot" cx="${x}" cy="${y - 4}" r="27"/>`,
};

/**
 * The mark as a rounded tile (sky, sun, sea). simple = small version (thicker eyes, no reflection), used below 40 px.
 * tile = false draws only Sünn and the sea (for illustrations on a coloured ground).
 */
export function mark({ id = 'm', simple = false, cls = 'mark', label = '', mood = 'ruhig', tile = true } = {}) {
  const a11y = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"';
  const cx = 512, cy = 560, w = simple ? 46 : 32;
  const eyes = [-1, 1].map((d) => EYES[mood](cx + d * 86, cy, w)).join('');
  const glint = simple ? '' : '<rect class="m-glint" x="402" y="792" width="220" height="20" rx="10"/><rect class="m-glint" x="452" y="850" width="120" height="20" rx="10"/>';
  const sky = tile ? '<rect class="m-sky" width="1024" height="1024"/>' : '';
  return `<svg class="${cls}" viewBox="0 0 1024 1024" ${a11y}>` +
    `<defs><clipPath id="${id}-t"><rect width="1024" height="1024" rx="${tile ? 228 : 0}"/></clipPath></defs>` +
    `<g clip-path="url(#${id}-t)">${sky}<circle class="m-sun" cx="${cx}" cy="${cy}" r="250"/>${eyes}` +
    '<path class="m-sea" d="M-10 712 C 130 676, 250 676, 372 708 S 640 748, 780 708 S 940 672, 1034 698 L1034 1034 L-10 1034 Z"/>' +
    `${glint}</g></svg>`;
}

/**
 * Wide evening scene for the start page: Sünn, eyes closed, half set into the sea, with its reflection.
 * Decorative (aria-hidden); colours from CSS (.hz-*).
 */
export function horizon({ cls = 'hz', cx = 600, h = 520 } = {}) {
  const dy = h - 520, cy = 330 + dy, r = 190;
  const eyes = [-1, 1].map((d) => { const x = cx + d * 66; return `<path class="hz-eye" d="M${x - 30} ${cy - 10} q 30 28 60 0"/>`; }).join('');
  const wave = `M-20 ${410 + dy} C 160 ${372 + dy}, 320 ${372 + dy}, 470 ${404 + dy} S 800 ${446 + dy}, 980 ${404 + dy} S 1140 ${370 + dy}, 1220 ${392 + dy} L1220 ${h + 20} L-20 ${h + 20} Z`;
  return `<svg class="${cls}" viewBox="0 0 1200 ${h}" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">` +
    `<circle class="hz-sun" cx="${cx}" cy="${cy}" r="${r}"/>${eyes}<path class="hz-sea" d="${wave}"/>` +
    `<rect class="hz-glint" x="${cx - 90}" y="${452 + dy}" width="180" height="14" rx="7"/><rect class="hz-glint" x="${cx - 50}" y="${488 + dy}" width="100" height="14" rx="7"/></svg>`;
}
