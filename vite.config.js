import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import posthtml from '@vituum/vite-plugin-posthtml'
import expressions from 'posthtml-expressions'

export default defineConfig({
  plugins: [
    tailwindcss(),  
    posthtml({
      root: './src',
      plugins: [
        expressions(),
      ]
    })
  ],
  root: 'src',              
  build: {
    outDir: '../dist',      
    emptyOutDir: true,
  },
})