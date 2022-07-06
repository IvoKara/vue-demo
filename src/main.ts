import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@/../node_modules/nprogress/nprogress.css'

import 'vue-custom-scrollbar/dist/vueScrollbar.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
