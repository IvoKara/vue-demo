import { setupLayouts } from 'virtual:generated-layouts'
// import { createRouter, createWebHistory } from 'vue-router'
// import * as NProgress from 'nprogress'
import generatedRoutes from '~pages'

// beforeEach
//   if (to.meta.requiresAuth) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page
//     // eslint-disable-next-line no-console
//     console.log(to)
//     return {
//       path: '/admin/login',
//       // save the location we were at to come back later
//     }

export const routes = setupLayouts(generatedRoutes)
