import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import typeChecker from 'vite-plugin-checker';

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [react(), eslintPlugin(), typeChecker({ typescript: true })],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
