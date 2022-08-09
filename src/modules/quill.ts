// import customQuillModule from 'customQuillModule'
import type { UserModule } from '@/types'
import LoadingEditor from '@/components/LoadingEditor.vue'

export const install: UserModule = ({ app, isClient }) => {
  if (isClient) {
    app.component(
      'QuillEditor',
      defineAsyncComponent({
        loader: () => import('vue3-quill')
          .then(quill => quill.quillEditor),

        delay: 100,

        loadingComponent: LoadingEditor,
      }),
    )
  }
}

