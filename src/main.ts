import { createApp } from 'vue'
import { Head, createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
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
  .use(router)
  .component('Head', Head)
  .mount('#app')

