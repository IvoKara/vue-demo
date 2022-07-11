import { URL, fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import { presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Components({
      dirs: ['./src/components/', './node_modules/@vueuse/head/**/*'],

    }),
    Pages(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: [
        'vue', 'vue-router',
        '@vueuse/core', '@vueuse/head',
      ],
    }),
    Unocss({
      presets: [
        presetUno(),
        presetIcons({ scale: 2.4 }),
        presetAttributify(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            oswald: 'Oswald:400,600',
            montserrat: 'Montserrat',
            greatvibes: 'Great Vibes:400',
          },
        }),
        presetTypography(),
      ],
      rules: [
        ['text-2xs', { 'font-size': '0.75rem', 'line-height': '1rem;' }],
        ['transition-dark-light', { transition: 'all 1s cubic-bezier(0.3, 0.04, 0.11, 1.02)' }],
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
