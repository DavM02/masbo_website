import { defineConfig } from "vite";
import preact from '@preact/preset-vite'
import alias from '@rollup/plugin-alias';
import path from 'path';
import autoprefixer from 'autoprefixer';
import mergeRules from 'postcss-merge-rules';

export default defineConfig({
  css: {
    preprocessorMaxWorkers: 4,  
    postcss: {
      plugins: [ autoprefixer, mergeRules ]
    }
  },
  plugins: [
    preact(),
    alias({
      entries: [
        {
          find: '@components',
          replacement: path.resolve('./src/components')
        },
        {
          find: '@styles',
          replacement: path.resolve('./src/styles')
        }
      ] 
    })
  ],

  
});
