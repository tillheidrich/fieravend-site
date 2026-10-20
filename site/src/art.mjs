/**
 * The mark (dial with horizon, from the wiki page "Logo & App-Icon", draft 18.10.2026). App screens: screens.mjs.
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
