/**
 * Screenshots of the built site (site/dist) for a visual check, 390 px and 1440 px wide, light and optionally dark.
 *   PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node site/tools/shots.mjs <out-dir> [path ...]   (out-dir always first) [--dark] [--viewport]
 * Default paths: / and /en/. Serves dist with a tiny built-in static server. Also reports horizontal overflow.
 */
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const args = process.argv.slice(2);
const out = args[0] || 'shots';
const paths = args.slice(1).filter((a) => a.startsWith('/'));
const dark = args.includes('--dark');
const fullPage = !args.includes('--viewport');
const require = createRequire(import.meta.url);
const { chromium } = require(path.join(execSync('npm root -g').toString().trim(), 'playwright'));

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(DIST, p);
  if (!f.startsWith(DIST) || !fs.existsSync(f)) { res.writeHead(404); res.end(fs.readFileSync(path.join(DIST, '404.html'))); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
  res.end(fs.readFileSync(f));
});
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;

fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const width of [390, 1440]) {
  const ctx = await browser.newContext({ viewport: { width, height: width < 600 ? 844 : 900 }, deviceScaleFactor: width < 600 ? 2 : 1, colorScheme: dark ? 'dark' : 'light', reducedMotion: 'reduce', locale: 'de-DE' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(e.message));
  for (const p of paths.length ? paths : ['/', '/en/']) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    const name = (p === '/' ? 'de-start' : p.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'root').replace(/^en$/, 'en-start');
    const file = path.join(out, `${name}-${width}${dark ? '-dark' : ''}.png`);
    await page.screenshot({ path: file, fullPage });
    console.log(`${file}${over > 0 ? `  OVERFLOW ${over}px` : ''}`);
  }
  if (errors.length) console.log('console errors:', errors.join(' | '));
  await ctx.close();
}
await browser.close();
server.close();
