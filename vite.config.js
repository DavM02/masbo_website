import { defineConfig } from "vite";
import preact from '@preact/preset-vite'
import alias from '@rollup/plugin-alias';
import path from 'path';
import autoprefixer from 'autoprefixer';
import mergeRules from 'postcss-merge-rules';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/masbo_website/', 
  plugins: [
    preact(),
    alias({
      entries: [
        {
          find: '@components',
          replacement:path.resolve(__dirname, './src/components')  
        },
        {
          find: '@sections',
          replacement: path.resolve(__dirname, './src/components/sections')  
        },
        {
          find: '@styles',
          replacement: path.resolve(__dirname, './src/styles'),
        },
        {
          find: '@assets',
          replacement: path.resolve(__dirname, './src/assets') 
        },
        {
          find: '@pages',
          replacement:path.resolve(__dirname, './src/pages')  
        }
      ] 
    })
  ],
  css: {
    preprocessorMaxWorkers: 4,  
    postcss: {
      plugins: [ autoprefixer, mergeRules ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, 'src/styles/variables.scss')}" as *;`,
        sourceMap: true,
      }
    }
  },
  
});
