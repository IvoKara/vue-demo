import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import * as NProgress from 'nprogress'
import generatedRoutes from '~pages'
import { useUserStore } from '@/stores/user'

// generatedRoutes.push({
//   path: '/admin',
//   name: 'admin',
//   meta: { layout: 'admin' },
//   component: () => import('@/pages/admin/index.vue'),
//   beforeEnter: (to, from, next) => {
//     if (useUserStore().token === null)
//       next('/admin/login')
//     else
//       next()
//   },
// })

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from) => {
  // console.log(from)
  // console.log(to)
  // NProgress.settings.showSpinner = false
  if (to.meta.requiresAuth) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(to)
    return {
      path: '/admin/login',
      // save the location we were at to come back later
    }
  }

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

router.afterEach(() => {
  NProgress.done()
})

export default router
