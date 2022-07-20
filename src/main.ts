import { createApp } from 'vue'
import { Head, createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from 'vue-query'
import * as devtools from 'vue-query/devtools'

import App from './App.vue'
import router from './router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/../node_modules/nprogress/nprogress.css'
import '@/../node_modules/daisyui/dist/full.css'
import '@/../node_modules/daisyui/dist/themes.css'

// const payload = ref(JSON.parse(localStorage.getItem('payload')))
// console.log(payload)

const pinia = createPinia()
const head = createHead()
createApp(App)
  .use(head)
  .use(pinia)
  .use(VueQueryPlugin)
  .use(router)
  .component('Head', Head)
  .component('VueQueryDevTools', devtools.VueQueryDevTools)
  .mount('#app')

