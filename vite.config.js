/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import posthtml from '@vituum/vite-plugin-posthtml'
import expressions from 'posthtml-expressions'

export default defineConfig({
  plugins: [
    tailwindcss(),  // ← le plugin officiel qui gère tout

    posthtml({
      root: './src',
      plugins: [
        expressions(),
      ]
    })
  ],

  root: 'src',              // ton index.html est dans src/
  build: {
    outDir: '../dist',      // build final dans dist/ à la racine
    emptyOutDir: true,
  },
})