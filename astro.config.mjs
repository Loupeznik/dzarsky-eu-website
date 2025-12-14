// @ts-check

import sitemap from '@astrojs/sitemap';

import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dzarsky.eu',
  integrations: [solidJs(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
