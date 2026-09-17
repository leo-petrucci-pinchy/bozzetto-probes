import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Vite + React + Tailwind v4 probe. */
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
