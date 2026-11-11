import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { parse } from 'parse5';

const dist = new URL('../dist/', import.meta.url);
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const descendants = node => [node, ...(node.childNodes ?? []).flatMap(descendants)];

async function pageFiles(directory) {
  const pages = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== 'assets' && entry.name !== '_astro') {
      pages.push(...await pageFiles(new URL(`${entry.name}/`, directory)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      pages.push(new URL(entry.name, directory));
    }
  }
  return pages;
}

const pages = await pageFiles(dist);
assert.ok(pages.length, 'Build the site before running this check');
for (const file of pages) {
  const nodes = descendants(parse(await readFile(file, 'utf8')));
  const targets = nodes.filter(node => attr(node, 'id') === 'page-top');
  const controls = nodes.filter(node => attr(node, 'id') === 'back-to-top');
  assert.equal(targets.length, 1, `${file.pathname}: one top target`);
  assert.equal(targets[0].tagName, 'body');
  assert.equal(attr(targets[0], 'tabindex'), '-1');
  assert.equal(controls.length, 1, `${file.pathname}: one back-to-top control`);
  const control = controls[0];
  assert.equal(control.tagName, 'a');
  assert.equal(attr(control, 'href'), '#page-top');
  assert.equal(attr(control, 'hidden'), undefined, 'Keep the no-JavaScript fallback available');
  assert.equal(text(control).replace(/\s+/g, ' ').trim(), 'Back to top');
  assert.ok(nodes.filter(node => node.tagName === 'footer').some(footer => descendants(footer).includes(control)));
  const icon = descendants(control).find(node => node.tagName === 'svg');
  assert.equal(attr(icon, 'aria-hidden'), 'true');
  assert.equal(attr(icon, 'focusable'), 'false');
}

console.log(`PASS ${pages.length} pages: one labelled back-to-top link, focusable top target and no-JavaScript fallback`);
