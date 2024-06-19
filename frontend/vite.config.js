import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '/Users/macbook/Documents/PHASE-3/FRONTEND/real-estate/frontend',
        '/Users/macbook/Documents/challenges/APP/project-frontend/frontend/src',
        '/Users/macbook/Documents/challenges/APP/project-frontend/frontend/node_modules', // Add node_modules directory
        // Add other necessary directories if required
      ]
    }
  }
});
