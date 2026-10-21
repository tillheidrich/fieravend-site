/**
 * Checks every internal link in site/dist after a build: href/src in all HTML files, <loc> in sitemap.xml and the
 * page links in llms.txt. Also fails on leftover magazine link keys (href="@…").
 *   node site/build.mjs && node site/tools/check-links.mjs
 *   FV_BUILD_DATE=2027-01-31 node site/build.mjs && node site/tools/check-links.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/config.mjs';

const DIST = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const exists = (p) => {
  const f = path.join(DIST, decodeURI(p));
  return (fs.existsSync(f) && fs.statSync(f).isFile()) || fs.existsSync(path.join(f, 'index.html'));
};
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));

const bad = [];
let n = 0;
for (const file of walk(DIST).filter((f) => f.endsWith('.html'))) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = '/' + path.relative(DIST, file);
  if (html.includes('href="@')) bad.push(`${rel}: unresolved href="@…"`);
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"#?]+)/g)) {
    let p = ref;
    if (p.startsWith(SITE)) p = p.slice(SITE.length) || '/';
    if (!p.startsWith('/') || p.startsWith('//')) continue;
    n++;
    if (!exists(p)) bad.push(`${rel}: ${ref}`);
  }
}
const sitemap = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
for (const [, u] of sitemap.matchAll(/(?:<loc>|href=")([^<"]+)/g)) { n++; if (!exists(u.slice(SITE.length) || '/')) bad.push(`sitemap.xml: ${u}`); }
const llms = fs.readFileSync(path.join(DIST, 'llms.txt'), 'utf8');
for (const [, u] of llms.matchAll(/\]\((https:\/\/[^)]+)\)/g)) { if (!u.startsWith(SITE)) continue; n++; if (!exists(u.slice(SITE.length) || '/')) bad.push(`llms.txt: ${u}`); }

if (bad.length) { console.error(`broken links (${bad.length}):\n` + bad.join('\n')); process.exit(1); }
console.log(`link check: ${n} internal links ok`);
