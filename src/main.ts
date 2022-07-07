import { createApp } from 'vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import App from './App.vue'
import router from './router'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import '@/../node_modules/nprogress/nprogress.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import '@/../node_modules/daisyui/dist/full.css'
// import '@/../node_modules/daisyui/dist/themes.css'

const app = createApp(App)

app.use(PerfectScrollbar)
app.use(router)
app.mount('#app')
