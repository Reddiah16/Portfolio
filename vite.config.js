import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // CSS per-chunk instead of one monolithic file
    cssCodeSplit: true,

    // Keep small assets as separate files (don't inline into JS)
    assetsInlineLimit: 4096,

    // Improve chunk loading parallelism
    modulePreload: { polyfill: true },

    rollupOptions: {
      output: {
        // Vendor code splitting for better long-term caching
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-framer';
          }
          if (id.includes('node_modules/aos')) {
            return 'vendor-aos';
          }
          if (id.includes('node_modules/@emailjs')) {
            return 'vendor-emailjs';
          }
        },
        // Content-hash filenames for optimal caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // Pre-bundle large dependencies for faster dev HMR
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'aos'],
  },
})
