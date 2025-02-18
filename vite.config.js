import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import alias from "@rollup/plugin-alias";
import path from "path";
import autoprefixer from "autoprefixer";
// import mergeRules from 'postcss-merge-rules';
import { fileURLToPath } from "url";
import { dirname } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { terser } from "rollup-plugin-terser";
import mergeLonghand from "postcss-merge-longhand";
import mergeRulePlus from "postcss-merge-rules-plus";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/masbo_website/",
  // optimizeDeps: {
  //   exclude: [ "gsap" ],
  // },
  server: {
    allowedHosts: ["q5r5mx-5173.csb.app"],
  },
  build: {
    minify: false,
    rollupOptions: {
      plugins: [terser()],
    },
  },
  plugins: [
    visualizer({ open: true }),
    preact(),
    alias({
      entries: [
        {
          find: "@components",
          replacement: path.resolve(__dirname, "./src/components"),
        },
        {
          find: "@sections",
          replacement: path.resolve(__dirname, "./src/components/sections"),
        },
        {
          find: "@styles",
          replacement: path.resolve(__dirname, "./src/styles"),
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "./src/assets"),
        },
        {
          find: "@pages",
          replacement: path.resolve(__dirname, "./src/pages"),
        },
        {
          find: "@hooks",
          replacement: path.resolve(__dirname, "./src/hooks"),
        },
        {
          find: "@context",
          replacement: path.resolve(__dirname, "./src/context"),
        },
      ],
    }),
  ],
  css: {
    preprocessorMaxWorkers: 4,
    postcss: {
      plugins: [autoprefixer, mergeLonghand, mergeRulePlus.default],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, "src/styles/variables.scss")}" as *;`,
      },
    },
  },
});
