import { defineConfig } from "vite"; // Основная функция для конфигурации Vite
import preact from "@preact/preset-vite"; // Плагин для поддержки Preact вместо React
import alias from "@rollup/plugin-alias"; // Позволяет создавать алиасы для путей, чтобы писать import "@components/..." вместо длинного пути
import path from "path"; // Работа с путями файловой системы
import autoprefixer from "autoprefixer"; // Добавляет в CSS вендорные префиксы для старых браузеров
import { fileURLToPath } from "url"; // Для преобразования URL в путь (нужно с ESM)
import { dirname } from "path"; // Получение директории файла
import { visualizer } from "rollup-plugin-visualizer"; // Генерирует визуализацию bundle для анализа размера пакетов
import { terser } from "rollup-plugin-terser"; // Минификация JS через Terser
import mergeLonghand from "postcss-merge-longhand"; // Объединяет длинные CSS-свойства в сокращённую форму (например margin-top + margin-right → margin)
import mergeRulePlus from "postcss-merge-rules-plus"; // Улучшенная версия объединения CSS-правил
import svgr from "vite-plugin-svgr"; // Позволяет импортировать SVG как React/Preact компоненты
import sortMediaQueries from 'postcss-sort-media-queries' // Сортирует CSS медиа-запросы в порядке от маленьких к большим или наоборот
import postcssPresetEnv from 'postcss-preset-env'; // Позволяет использовать новые возможности CSS, которые транспилируются под старые браузеры
import purgeCss from 'vite-plugin-purgecss' // Удаляет неиспользуемый CSS из бандла, уменьшает размер итогового CSS

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: "/masbo_website/#", // Базовый путь для деплоя на GitHub Pages
  server: {
    allowedHosts: [ "q5r5mx-5173.csb.app" ], // Разрешённые хосты для dev сервера
  },
  build: {
    // minify: false, // Можно отключить минификацию для отладки
    rollupOptions: {
      plugins: [ terser() ], // Минифицируем JS через Terser во время билда
    },
  },
  plugins: [
    visualizer({ open: true }), // После билда откроется график размера бандла
    preact(), // Подключаем Preact
    alias({ // Настраиваем удобные алиасы для путей
      entries: [
        { find: "@components", replacement: path.resolve(__dirname, "./src/components") },
        { find: "@ui", replacement: path.resolve(__dirname, "./src/components/shared/ui") },
        { find: "@sections", replacement: path.resolve(__dirname, "./src/components/sections") },
        { find: "@styles", replacement: path.resolve(__dirname, "./src/styles") },
        { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
        { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
        { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
        { find: "@context", replacement: path.resolve(__dirname, "./src/context") },
      ],
    }),
    svgr(), // SVG как компоненты
    // purgeCss({ // Удаляем неиспользуемый CSS
    //   content: [ './index.html', './src/**/*.{js,jsx,ts,tsx}' ],
    //   safelist: [
    //     // 'active',       // класс, который точно не удаляем
    //     /^lazy/,        // все классы, начинающиеся с lazy
    //     // 'modal-open',   // конкретный селектор
    //   ]
    // }),
  ],
  css: {
    preprocessorMaxWorkers: 4, // Максимальное количество воркеров для SCSS
    postcss: {
      plugins: [ 
        autoprefixer, // Вендорные префиксы
        mergeLonghand, // Сокращаем длинные свойства
        mergeRulePlus.default, // Оптимизация CSS правил
        sortMediaQueries, // Сортировка media queries
        postcssPresetEnv({ // Поддержка современных возможностей CSS
          stage: 2,
          features: {
            'nesting-rules': true // Разрешаем вложенные правила CSS
          }
        })
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "${path.resolve(__dirname, "src/styles/variablesAndMixins.scss")}" as *;`,
        // Автоматически подключаем переменные и миксины SCSS в каждый файл
      },
    },
  },
});
