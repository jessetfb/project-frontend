import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        // Allow serving files from the project directory
        '/Users/macbook/Documents/PHASE-3/FRONTEND/real-estate/frontend',
        // Add other necessary directories if required
      ]
    }
  }
})
