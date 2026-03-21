import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false })],
  output: 'static',
  // For GitHub Pages deployment, set your repo name here:
  // base: '/mediterranean-pools',
  site: 'https://mediterraneanpoolsqld.com.au',
  build: {
    assets: '_assets',
  },
});
