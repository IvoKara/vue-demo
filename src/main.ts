import { createApp } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import { Head, createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/../node_modules/nprogress/nprogress.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/../node_modules/daisyui/dist/full.css'
import '@/../node_modules/daisyui/dist/themes.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(PerfectScrollbar)
app.use(router)
app.component('Head', Head)
app.mount('#app')

