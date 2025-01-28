import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 8080,
  },

  plugins: [
    tailwindcss(),
  ],
  
})