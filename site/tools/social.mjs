/**
 * Renders the social fact cards from site/src/social/cards.mjs into marketing/social (repo root, not published):
 *   marketing/social/<de|en>/<feed|story>/NN-<id>.png   feed 1080 × 1350, story 1080 × 1920
 *   PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node site/tools/social.mjs [id ...]
 * Uses the globally installed playwright package (npm root -g), like og.mjs. Pages are written next to the fonts in
 * site/static and opened as files (setContent cannot load file fonts). Brand "Sünn" (docs/brand.md): sky colours,
 * Fraunces for number and headline, Figtree for the rest, horizon() and mark() from site/src/art.mjs. Cards with money
 * (`money: true`) show neither Sünn nor the scene. Text shrinks until it fits; the script fails on overflow and on any
 * text colour pair below 4.5:1.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mark, horizon } from '../src/art.mjs';
import { CARDS } from '../src/social/cards.mjs';
import { ratio } from './check-contrast.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATIC = path.join(HERE, '..', 'static');
const OUT = path.join(HERE, '..', '..', 'marketing', 'social');
const TMP = path.join(STATIC, '.social-tmp.html');
const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));

/** Sky palettes (tokens from site.css / docs/brand.md). big = colour of the big number. */
const SKY = {
  evening: { bg: '#F5D2B8', ink: '#1F2B45', muted: '#4A3F3A', big: '#8F3C15', sun: '#D9652B', sea: '#1F2B45', glint: '#F08A4B', foot: '#F4F1EA', footMuted: '#C7CCD8' },
  morning: { bg: '#F4E4D4', ink: '#1F2B45', muted: '#4A3F3A', big: '#8F3C15', sun: '#D9652B', sea: '#1F2B45', glint: '#F08A4B', foot: '#F4F1EA', footMuted: '#C7CCD8' },
  day:     { bg: '#E3ECF4', ink: '#1F2B45', muted: '#3E4A5E', big: '#1F2B45', sun: '#F2B544', sea: '#1F2B45', glint: '#F2B544', foot: '#F4F1EA', footMuted: '#C7CCD8' },
  night:   { bg: '#1F2B45', ink: '#F4F1EA', muted: '#C7CCD8', big: '#F5A06A', sun: '#F08A4B', sea: '#0B0F18', glint: '#F08A4B', foot: '#F4F1EA', footMuted: '#B3AEA6' },
};
const FORMAT = {
  feed: { w: 1080, h: 1350, pad: 84, top: 84, foot: 150, safe: 0, scene: 440, big: 210, text: 66, msg: 118, sub: 40, kick: 30, src: 25 },
  story: { w: 1080, h: 1920, pad: 96, top: 230, foot: 150, safe: 230, scene: 520, big: 240, text: 76, msg: 134, sub: 46, kick: 34, src: 27 },
};
const KICK = { de: 'Feierabend-Fakt', en: 'After-work fact' };

// contrast of every text pair, before rendering
const fails = [];
for (const [k, s] of Object.entries(SKY)) {
  for (const [fg, bg, what] of [[s.ink, s.bg, 'headline'], [s.muted, s.bg, 'kicker/source'], [s.big, s.bg, 'big number'], [s.foot, s.sea, 'footer on sea'], [s.footMuted, s.sea, 'source on sea']]) {
    const r = ratio(fg, bg);
    if (r < 4.5) fails.push(`${k}: ${what} ${fg} on ${bg} = ${r.toFixed(2)}`);
  }
}
if (fails.length) { console.error('contrast below 4.5:1:\n' + fails.join('\n')); process.exit(1); }

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function page(card, lang, fmt, n) {
  const f = FORMAT[fmt];
  const s = SKY[card.sky];
  const scene = !card.money;
  // keep "§ 8 SGB IV", "§ 26(8)" etc. together on one line
  const src = card.source ? card.source[lang].replace(/§ (\S+) (\S+)/g, '§ $1 $2') : '';
  const kicker = card.kind === 'fact' ? `${KICK[lang]} ${String(n).padStart(2, '0')}` : '';
  const word = `<span class="w">${scene ? mark({ id: `m${n}`, simple: true, cls: 'wm' }) : ''}<span>fieravend</span></span>`;
  const main = card.kind === 'message'
    ? `<h1 class="msg fit" data-size="${f.msg}">${esc(card.text[lang])}</h1>${card.sub ? `<p class="sub fit" data-size="${f.sub}">${esc(card.sub[lang])}</p>` : ''}`
    : `${card.big ? `<p class="big fit" data-size="${f.big}">${esc(card.big[lang])}</p>` : ''}<h1 class="txt fit" data-size="${card.big ? f.text : Math.round(f.text * 1.35)}">${esc(card.text[lang])}</h1>`;
  const footer = `<footer class="foot"><p class="src">${esc(src)}</p>${word}</footer>`;
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
@font-face{font-family:F;src:url(fonts/figtree-latin-wght.woff2) format("woff2");font-weight:300 900}
@font-face{font-family:F;src:url(fonts/figtree-latin-ext-wght.woff2) format("woff2");font-weight:300 900;unicode-range:U+0100-02BA,U+20A0-20C4}
@font-face{font-family:D;src:url(fonts/fraunces-latin-var.woff2) format("woff2");font-weight:300 800}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${f.w}px;height:${f.h}px;overflow:hidden}
body{background:${s.bg};color:${s.ink};font-family:F,sans-serif;-webkit-font-smoothing:antialiased}
.card{position:relative;width:100%;height:100%;display:flex;flex-direction:column}
.head{padding:${f.top}px ${f.pad}px 0;font-size:${f.kick}px;font-weight:650;letter-spacing:.04em;text-transform:uppercase;color:${s.muted};min-height:${f.top + f.kick * 1.4}px}
.main{flex:1;min-height:0;padding:24px ${f.pad}px 40px;display:flex;flex-direction:column;justify-content:center;gap:${Math.round(f.text * 0.35)}px;overflow:hidden}
.d,.big,.txt,.msg{font-family:D,serif;font-variation-settings:"SOFT" 100,"WONK" 0}
.big{color:${s.big};white-space:nowrap;font-weight:640;line-height:.95;letter-spacing:-.03em}
.txt{font-weight:600;line-height:1.12;letter-spacing:-.015em;max-width:880px}
.msg{font-weight:620;line-height:1.02;letter-spacing:-.025em}
.sub{color:${s.muted};line-height:1.35;font-weight:500;max-width:840px}
.scene{position:relative;height:${scene ? Math.round(f.scene * 0.9) : 0}px;flex:none}
.scene svg{position:absolute;left:0;bottom:-1px;width:100%;height:100%;display:block}
.hz-sun{fill:${s.sun}}.hz-eye{fill:none;stroke:#1F2B45;stroke-width:12;stroke-linecap:round}.hz-sea{fill:${s.sea}}.hz-glint{fill:${s.glint}}
.foot{flex:none;display:flex;align-items:center;justify-content:space-between;gap:40px;padding:0 ${f.pad}px ${f.safe}px;min-height:${f.foot + f.safe}px;background:${scene ? s.sea : 'transparent'};color:${scene ? s.foot : s.ink}}
.src{font-size:${f.src}px;line-height:1.35;color:${scene ? s.footMuted : s.muted};max-width:640px}
.w{display:inline-flex;align-items:center;gap:12px;font-family:D,serif;font-variation-settings:"SOFT" 100,"WONK" 0;font-weight:600;font-size:40px;letter-spacing:-.01em;flex:none}
.wm{width:48px;height:48px}.m-sky{fill:#F5D2B8}.m-sun{fill:#D9652B}.m-sea{fill:#1F2B45}.m-eye{fill:none;stroke:#1F2B45;stroke-linecap:round}
</style></head><body><div class="card">
<div class="head">${kicker}</div>
<div class="main">${main}</div>
${scene ? `<div class="scene">${horizon({ cx: card.kind === 'message' ? 860 : 900, h: f.scene })}</div>` : ''}
${footer}
</div></body></html>`;
}

/** Shrinks the .fit elements (all together) until .main does not overflow; returns the final scale. */
const fit = () => {
  const main = document.querySelector('.main');
  const els = [...document.querySelectorAll('.fit')];
  let k = 1;
  let kb = 1; // extra factor for the big number only, so a long number does not shrink the headline
  const big = document.querySelector('.big');
  const apply = () => els.forEach((e) => { e.style.fontSize = `${Math.round(Number(e.dataset.size) * k * (e === big ? kb : 1))}px`; });
  apply();
  // a big number must stay on one line
  while (big && big.scrollWidth > big.clientWidth + 1 && kb > 0.4) { kb *= 0.96; apply(); }
  while (main.scrollHeight > main.clientHeight + 1 && k > 0.4) { k *= 0.96; apply(); }
  const over = main.scrollHeight > main.clientHeight + 1 || (big && big.scrollWidth > big.clientWidth + 1);
  const src = document.querySelector('.src');
  const srcLines = src ? Math.round(src.getBoundingClientRect().height / parseFloat(getComputedStyle(src).lineHeight)) : 0;
  return { k: Math.round(k * 100) / 100, over, srcLines };
};

const only = process.argv.slice(2);
const browser = await chromium.launch();
const pw = await browser.newPage();
const report = [];
let bad = 0;
for (const lang of ['de', 'en']) {
  for (const fmt of ['feed', 'story']) {
    const dir = path.join(OUT, lang, fmt);
    fs.mkdirSync(dir, { recursive: true });
    await pw.setViewportSize({ width: FORMAT[fmt].w, height: FORMAT[fmt].h });
    for (const [i, card] of CARDS.entries()) {
      if (only.length && !only.includes(card.id)) continue;
      const n = i + 1;
      fs.writeFileSync(TMP, page(card, lang, fmt, n));
      await pw.goto(pathToFileURL(TMP).href, { waitUntil: 'load' });
      await pw.evaluate(() => document.fonts.ready);
      const r = await pw.evaluate(fit);
      const file = path.join(dir, `${String(n).padStart(2, '0')}-${card.id}.png`);
      await pw.screenshot({ path: file });
      if (r.over || r.srcLines > 3) bad++;
      report.push(`${r.over ? 'OVER' : r.srcLines > 3 ? 'SRC ' : 'ok  '} ${lang}/${fmt}/${path.basename(file)} scale ${r.k} source lines ${r.srcLines}`);
    }
  }
}
await browser.close();
fs.rmSync(TMP, { force: true });
console.log(report.join('\n'));
console.log(`${report.length} cards written to ${path.relative(process.cwd(), OUT) || OUT}${bad ? `, ${bad} with problems` : ''}`);
process.exit(bad ? 1 : 0);
