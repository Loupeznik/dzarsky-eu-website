// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

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