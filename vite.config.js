// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Permite usar '@' como alias para la carpeta 'src'
      '@': '/src',
    },
  },
});
