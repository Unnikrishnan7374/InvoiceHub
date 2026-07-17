import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Group React core
            if (id.includes('react/') || id.includes('react-dom/') || id.includes('scheduler/')) {
              return 'vendor-react';
            }
            // Group MUI and Icons
            if (id.includes('@mui/')) {
              return 'vendor-mui';
            }
            // Group Animation libraries
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'vendor-animation';
            }
            // Group Routing
            if (id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            // Group Swiper
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            // Everything else in a generic vendor chunk
            return 'vendor-libs';
          }
        }
      }
    },
    chunkSizeWarningLimit: 800 // Increase limit warning to 800kB
  }
})
