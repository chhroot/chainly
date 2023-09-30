import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Ensure that fonts are served from the correct directory
        assetFileNames: 'assets/fonts/',
      },
    },
  },
})
