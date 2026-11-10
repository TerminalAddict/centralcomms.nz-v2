import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';

const root = new URL('../', import.meta.url);
const { updates } = JSON.parse(await readFile(new URL('public/assets/data/updates.json', root), 'utf8'));
const pages = ['support', 'notifications', 'about', 'updates'].map(name => ({ path: `/${name}.html` }));
pages.push(...updates.map(post => ({ path: `/updates/${post.slug}.html`, post })));

const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const hasClass = (node, name) => (attr(node, 'class') ?? '').split(/\s+/).includes(name);
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
function descendants(node) {
  return [node, ...(node.childNodes ?? []).flatMap(descendants)];
}

for (const { path, post } of pages) {
  const file = new URL(`dist${path}`, root);
  const html = await readFile(file, 'utf8');
  const nodes = descendants(parse(html));
  const heroes = nodes.filter(n => hasClass(n, 'content-hero'));
  assert.equal(heroes.length, 1, `${path}: one shared hero`);
  assert.equal(nodes.filter(n => n.tagName === 'h1').length, 1, `${path}: one H1`);
  const hero = descendants(heroes[0]);
  const title = hero.find(n => n.tagName === 'h1');
  assert.ok(text(title).trim(), `${path}: nonempty title`);
  const breadcrumb = hero.find(n => n.tagName === 'nav' && attr(n, 'aria-label') === 'Breadcrumb');
  assert.ok(breadcrumb, `${path}: breadcrumbs`);
  assert.equal(descendants(breadcrumb).filter(n => attr(n, 'aria-current') === 'page').length, 1);
  const media = hero.find(n => attr(n, 'data-hero-media') !== undefined);
  assert.ok(media, `${path}: stable image container`);
  const images = descendants(media).filter(n => n.tagName === 'img');
  assert.equal(images.length, post && !post.image ? 0 : 1, `${path}: featured image or empty fallback`);
  for (const image of images) {
    const src = attr(image, 'src');
    assert.ok(src.startsWith('/assets/images/') && !src.includes('..'), `${path}: local image`);
    await access(fileURLToPath(new URL(`public${decodeURIComponent(src)}`, root)));
    assert.equal(attr(image, 'fetchpriority'), 'high');
    assert.equal(attr(image, 'alt'), '');
  }
  const ids = nodes.map(n => attr(n, 'id')).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, `${path}: unique IDs`);
  const canonical = attr(nodes.find(n => n.tagName === 'link' && attr(n, 'rel') === 'canonical'), 'href');
  assert.equal(canonical, `https://www.centralcomms.nz${path}`);

  if (post) {
    assert.equal(text(title), post.title);
    assert.equal(attr(title, 'id'), 'post-title-display');
    assert.equal(attr(heroes[0], 'id'), 'post-hero');
    assert.equal(attr(media, 'hidden') !== undefined, !post.image);
    const expected = post.image ? `/assets/images/posts/${encodeURIComponent(post.image)}` : undefined;
    if (expected) assert.equal(attr(images[0], 'src'), expected);
    assert.ok(!ids.includes('post-cover-display') && !ids.includes('post-cover-img'), `${path}: no duplicate cover`);
    assert.equal(attr(nodes.find(n => attr(n, 'id') === 'post-date-display'), 'datetime'), post.date);
    assert.equal(text(nodes.find(n => attr(n, 'id') === 'post-author-display')), post.author);
    const categories = nodes.find(n => attr(n, 'id') === 'post-categories');
    assert.deepEqual(descendants(categories).filter(n => n.tagName === 'li').map(text), post.categories ?? []);
    assert.ok(ids.includes('post-content') && ids.includes('post-nav') && ids.includes('edit-overlay'));
    assert.equal(attr(nodes.find(n => attr(n, 'property') === 'og:type'), 'content'), 'article');
    if (expected) assert.equal(attr(nodes.find(n => attr(n, 'property') === 'og:image'), 'content'), `https://www.centralcomms.nz${expected}`);
  }
}

console.log(`PASS ${pages.length} pages: shared heroes, breadcrumbs, local images, metadata and CMS hooks (${updates.length} featured-image posts)`);
