/**
 * Renders the raster images into site/static (committed, so the build itself needs no browser):
 *   og-de.png, og-en.png (1200 × 630), favicon-32.png, apple-touch-icon.png (180 × 180).
 *   PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node site/tools/og.mjs
 * Uses the globally installed playwright package (npm root -g). Run again after a logo change.
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { mark, horizon } from '../src/art.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATIC = path.join(HERE, '..', 'static');
const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
// Pages are written next to the fonts and opened as files, so relative font URLs load (setContent cannot read file URLs).
const font = 'fonts/figtree-latin-wght.woff2';
const display = 'fonts/fraunces-latin-var.woff2';
const TMP = path.join(STATIC, '.og-tmp.html');
const show = async (page, html) => { fs.writeFileSync(TMP, html); await page.goto(pathToFileURL(TMP).href, { waitUntil: 'load' }); await page.evaluate(() => document.fonts.ready); };

// Brand 2 (docs/brand.md): evening sky, Sünn setting into the sea, Fraunces for wordmark and claim.
const css = `@font-face{font-family:F;src:url(${font}) format("woff2");font-weight:300 900}
@font-face{font-family:D;src:url(${display}) format("woff2");font-weight:300 800}
*{margin:0;box-sizing:border-box}body{background:#F5D2B8;color:#1F2B45;font-family:F,sans-serif}
.m-sky{fill:#F5D2B8}.m-sun{fill:#D9652B}.m-sea{fill:#1F2B45}.m-glint{fill:#F08A4B}.m-eye{fill:none;stroke:#1F2B45;stroke-linecap:round}
.hz-sun{fill:#D9652B}.hz-eye{fill:none;stroke:#1F2B45;stroke-width:12;stroke-linecap:round}.hz-sea{fill:#1F2B45}.hz-glint{fill:#D9652B}
.d{font-family:D,serif;font-variation-settings:"SOFT" 100,"WONK" 0}`;

const og = (lang) => {
  const t = lang === 'de'
    ? { claim: 'Damit dein Feierabend stimmt.', sub: 'Dein eigener Stundenzettel fürs iPhone. Ohne Konto, ohne Abo.' }
    : { claim: 'So your hours add up.', sub: 'Your own time sheet for the iPhone. No account, no subscription.' };
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}
  .og{width:1200px;height:630px;position:relative;overflow:hidden;padding:56px 80px}.og>*:not(.art){position:relative;z-index:1}
  .w{display:flex;align-items:center;gap:16px;font-weight:640;font-size:46px;letter-spacing:-.01em;margin-bottom:40px}.w svg{width:64px;height:64px}
  h1{font-size:68px;max-width:640px;line-height:1.02;letter-spacing:-.02em;font-weight:620;margin-bottom:20px;max-width:900px}p{font-size:28px;line-height:1.4;color:#4A3F3A;max-width:560px}
  .art{position:absolute;left:0;right:0;bottom:0;height:630px}.art svg{width:100%;height:100%;display:block}</style></head>
  <body><div class="og"><div class="w d">${mark({ id: 'a', simple: true })}fieravend</div><h1 class="d">${t.claim}</h1><p>${t.sub}</p>
  <div class="art">${horizon({ cx: 960, h: 630 })}</div></div></body></html>`;
};

const icon = (size) => `<!doctype html><html><head><meta charset="utf-8"><style>${css}
  body{width:${size}px;height:${size}px;background:transparent}svg{width:${size}px;height:${size}px;display:block}</style></head>
  <body>${mark({ id: 'c', simple: size < 64 })}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const lang of ['de', 'en']) {
  await page.setViewportSize({ width: 1200, height: 630 });
  await show(page, og(lang));
  await page.screenshot({ path: path.join(STATIC, `og-${lang}.png`) });
}
for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
  await page.setViewportSize({ width: size, height: size });
  await show(page, icon(size));
  await page.screenshot({ path: path.join(STATIC, name) });
}
await browser.close();
fs.rmSync(TMP);
console.log('images written to', STATIC, fs.readdirSync(STATIC).filter((f) => f.endsWith('.png')).join(', '));
