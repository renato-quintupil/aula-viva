import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// viteSingleFile empaqueta todo en un solo index.html para que se pueda
// abrir con doble clic (file://) sin necesidad de un servidor.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
});
