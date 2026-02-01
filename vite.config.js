import { defineConfig } from "vite"; 
import preact from "@preact/preset-vite";  
import alias from "@rollup/plugin-alias"; 
import path from "path";  
import autoprefixer from "autoprefixer";  
import { fileURLToPath } from "url";  
import { dirname } from "path"; 
import { visualizer } from "rollup-plugin-visualizer";  
import { terser } from "rollup-plugin-terser";  
import mergeLonghand from "postcss-merge-longhand";  
import mergeRulePlus from "postcss-merge-rules-plus"; 
import svgr from "vite-plugin-svgr"; 
import sortMediaQueries from 'postcss-sort-media-queries'  
import postcssPresetEnv from 'postcss-preset-env';  
import purgeCss from 'vite-plugin-purgecss'  

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/masbo_website/", 
  server: {
    allowedHosts: [ "q5r5mx-5173.csb.app" ],  
  },
  build: {
     
    rollupOptions: {
      plugins: [ terser() ],  
    },
  },
  plugins: [
    visualizer({ open: true }),  
    preact(), 
    alias({  
      entries: [
        { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
        { find: "@ui", replacement: path.resolve(__dirname, "./src/components/shared/ui") },
        { find: "@sections", replacement: path.resolve(__dirname, "./src/components/sections") },
        { find: "@styles", replacement: path.resolve(__dirname, "./src/styles") },
        { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
        { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
        { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
        { find: "@context", replacement: path.resolve(__dirname, "./src/context") },
        { find: "@db", replacement: path.resolve(__dirname, "./src/db") },
      ],
    }),
    svgr(),  
    purgeCss({  
      content: [ './index.html', './src/**/*.{js,jsx,ts,tsx}' ],
      safelist: [
        /^scrollbar/,
        /^lazy/,
        /^nav/     
      ]
    }),
  ],
  css: {
    preprocessorMaxWorkers: 4,  
    postcss: {
      plugins: [ 
        autoprefixer,   
        mergeLonghand,  
        mergeRulePlus.default, 
        sortMediaQueries,  
        postcssPresetEnv({  
          stage: 2,
          features: {
            'nesting-rules': true  
          }
        })
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, "src/styles/variablesAndMixins.scss")}" as *;`,
      },
    },
  },
});
