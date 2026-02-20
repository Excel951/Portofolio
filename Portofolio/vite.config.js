import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Kalau kamu sudah sempat tambah 'base' untuk GitHub Pages, biarkan saja ada di sini
  base: '/Portofolio/',
})
