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
import { mark } from '../src/art.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATIC = path.join(HERE, '..', 'static');
const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));
const font = pathToFileURL(path.join(STATIC, 'fonts', 'figtree-latin-wght.woff2')).href;

const css = `@font-face{font-family:F;src:url(${font}) format("woff2");font-weight:300 900}
*{margin:0;box-sizing:border-box}body{background:#FAF6EF;color:#1F2B45;font-family:F,sans-serif}
.m-line,.m-ring{fill:none;stroke:#1F2B45;stroke-linecap:round}.m-sun-s{stroke:#D9652B;stroke-linecap:round}.m-sun{fill:#D9652B}.m-water,.m-dot{fill:#1F2B45}`;

const og = (lang) => {
  const t = lang === 'de'
    ? { claim: 'Damit dein Feierabend stimmt.', sub: 'Dein eigener Stundenzettel fürs iPhone. Für alle, deren Betrieb kein System für die Arbeitszeit hat.' }
    : { claim: 'So your hours add up.', sub: 'Your own time sheet for the iPhone. For everyone whose workplace has no system for working hours.' };
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}
  .og{width:1200px;height:630px;display:grid;grid-template-columns:1fr 430px;align-items:center;padding:0 80px;gap:40px;position:relative;overflow:hidden}
  .w{display:flex;align-items:center;gap:18px;font-weight:600;font-size:44px;letter-spacing:.04em;margin-bottom:56px}.w svg{width:64px;height:64px}
  h1{font-size:76px;line-height:1.04;letter-spacing:-.025em;font-weight:700;margin-bottom:28px}p{font-size:28px;line-height:1.4;color:#6B6460;max-width:620px}
  .big{width:430px;height:430px}.bar{position:absolute;left:0;right:0;bottom:0;height:14px;background:#D9652B}</style></head>
  <body><div class="og"><div><div class="w">${mark({ id: 'a', simple: true })}fieravend</div><h1>${t.claim}</h1><p>${t.sub}</p></div>
  <div>${mark({ id: 'b', cls: 'big' })}</div><div class="bar"></div></div></body></html>`;
};

const icon = (size) => `<!doctype html><html><head><meta charset="utf-8"><style>${css}
  body{width:${size}px;height:${size}px;display:grid;place-items:center;background:#FAF6EF}svg{width:${Math.round(size * 0.86)}px;height:${Math.round(size * 0.86)}px}</style></head>
  <body>${mark({ id: 'c', simple: size < 64 })}</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage();
for (const lang of ['de', 'en']) {
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.setContent(og(lang), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(STATIC, `og-${lang}.png`) });
}
for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(icon(size), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(STATIC, name) });
}
await browser.close();
console.log('images written to', STATIC, fs.readdirSync(STATIC).filter((f) => f.endsWith('.png')).join(', '));
