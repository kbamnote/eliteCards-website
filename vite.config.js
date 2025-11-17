import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimize chunk size for 3D assets
    rollupOptions: {
      output: {
        manualChunks: {
          // Split 3D vendor chunks for better caching
          'three-vendor': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'three-effects': ['@react-three/postprocessing', 'postprocessing']
        }
      }
    },
    // Optimize assets
    assetsInlineLimit: 4096,
    // Enable CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom',
      '@react-three/fiber', 
      '@react-three/drei',
      '@react-three/postprocessing'
    ]
  }
})