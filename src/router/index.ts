import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import * as NProgress from 'nprogress'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  // NProgress.settings.showSpinner = false
  window.scrollTo(0, 0)
  NProgress.configure({
    template: `
      <div style="background: rgb(202 138 4);" class="bar" role="bar">
        <div class="peg"> 
        </div>
      </div>
    `,
  })
  NProgress.start()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
