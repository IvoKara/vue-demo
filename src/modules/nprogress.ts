import NProgress from 'nprogress'
import type { UserModule } from '@/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    NProgress.configure({
      template: `
            <div style="background: rgb(202 138 4);" class="bar" role="bar">
              <div class="peg">
              </div>
            </div>
          `,
    })

    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        window.scrollTo(0, 0)
        NProgress.start()
      }
    })

    router.afterEach(() => {
      NProgress.done()
    })
  }
}
