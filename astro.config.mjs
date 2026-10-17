import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://devnode.info',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Ready for future languages: add 'ar' / 'fr' here and create src/pages/ar/, src/pages/fr/
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
});
