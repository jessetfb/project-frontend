import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '/Users/macbook/Documents/PHASE-3/FRONTEND/real-estate/frontend',
        '/Users/macbook/Documents/challenges/APP/project-frontend/frontend/src',
        '/Users/macbook/Documents/challenges/APP/project-frontend/frontend/node_modules',
        '/Users/macbook/node_modules/react-multi-carousel' // Add the specific directory for react-multi-carousel
        // Add other necessary directories if required
      ]
    }
  }
});
