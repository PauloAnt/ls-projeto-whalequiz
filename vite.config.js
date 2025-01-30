import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',
  assetsInclude: ["**/*.html"],
  server: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
  },

  plugins: [
    tailwindcss(),
  ],
})
