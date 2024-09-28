import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
    build: {
      outDir: 'dist', // Ensure this matches the output directory you're setting in Vercel
    },
  },

  plugins: [react()],
});
