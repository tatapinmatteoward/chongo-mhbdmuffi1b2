import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  site: 'https://chongo-mhbdmuffi1b2.pages.dev'
});
