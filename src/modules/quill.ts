// import customQuillModule from 'customQuillModule'
import type { UserModule } from '@/types'

export const install: UserModule = async ({ app, isClient }) => {
  if (isClient) {
    const quillEditor = await import('vue3-quill')
    app.use(quillEditor)
  }
}
