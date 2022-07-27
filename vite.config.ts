import { URL, fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Components({
      dirs: ['./src/components/', './node_modules/@vueuse/head/**/*'],

    }),
    Pages({
      // exclude: ['**/admin/index.vue'],
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default',
    }),
    AutoImport({
      dirs: ['composables'],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
        // '@vueuse/integrations',
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
        presetScrollbar({
          scrollbarWidth: '10px',
        }),
      ],
      rules: [
        ['text-2xs', { 'font-size': '0.75rem', 'line-height': '1rem;' }],
        ['transition-dark-light', { transition: 'all 1s cubic-bezier(0.3, 0.04, 0.11, 1.02)' }],
        ['text-amber-950', { color: 'rgba(113, 77, 14, 0.97)' }],
        ['bg-amber-950', { 'background-color': 'rgba(113, 77, 14, 0.97)' }],
      ],
    }),
  ],
  // ssgOptions: {
  //   script: 'async',
  //   formatting: 'minify',
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
  },
})
