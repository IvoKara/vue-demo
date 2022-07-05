import { URL, fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Components(),
    Pages(),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    AutoImport({
      imports: [
        'vue', 'vue-router',
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
            montserrat: 'Montserrat:400',
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
