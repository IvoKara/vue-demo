import { URL, fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

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
    Unocss(),
  ],
  // @ts-expect-error: Unreachable code error
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    format: 'cjs',
    // @ts-expect-error: Unreachable code error
    includedRoutes(paths, routes) {
      // exclude all the route paths that contains 'foo'
      // @ts-expect-error: Unreachable code error
      return paths.filter((i) => {
        if (i.includes('login'))
          return true
        else
          return !i.includes('admin')
      })
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
  },
})
