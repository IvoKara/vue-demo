// import PrimeVue from 'primevue/config'
// import Editor from 'primevue/editor'
import type { UserModule } from '@/types'

export const install: UserModule = async ({ app, isClient }) => {
  if (isClient) {
    const PrimeVue = await import('primevue/config')
    app.use(PrimeVue.usePrimeVue)
    const Editor = await import('primevue/editor')
    app.component('Editor', Editor)
  }

  // app.component('Editor', Editor)
}
