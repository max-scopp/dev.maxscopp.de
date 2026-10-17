// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dev.maxscopp.de',
  redirects: {
    '/work': '/about',
  },
});
