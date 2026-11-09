import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { extname } from 'node:path';

export default defineConfig({
  site: 'https://www.centralcomms.nz',
  integrations: [sitemap({
    serialize(item) {
      // File-format builds use .html canonicals; the sitemap receives route paths.
      const url = new URL(item.url);
      if (url.pathname !== '/' && !extname(url.pathname)) {
        url.pathname = `${url.pathname.replace(/\/$/, '')}.html`;
      }
      return { ...item, url: url.href };
    },
  }), mdx()],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    format: 'file'
  },
  trailingSlash: 'never'
});
