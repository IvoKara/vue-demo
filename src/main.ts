// import { VueQueryPlugin } from 'vue-query'
// import * as devtools from 'vue-query/devtools'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/../node_modules/nprogress/nprogress.css'
import '@/../node_modules/daisyui/dist/full.css'
import '@/../node_modules/daisyui/dist/themes.css'
import type { UserModule } from './types'
// import '@/assets/base.css'

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.provide('isClient', ctx.isClient)
  },
)
