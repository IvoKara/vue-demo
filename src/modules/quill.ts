// import customQuillModule from 'customQuillModule'
import type { UserModule } from '@/types'
export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.component(
      'QuillEditor',
      defineAsyncComponent(() => import('vue3-quill')
        .then(quill => quill.quillEditor)),
    )
  }
}

