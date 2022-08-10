<script setup lang="ts">
import type { Ref } from 'vue'
import { usePostsQuery } from '@/composables/postQuery'
import type { QuillOptions } from '@/types'
import { usePostMutation } from '@/composables/postMutation'
import { extractFromHTML } from '@/composables/extractContent'
import { isDark } from '@/composables/dark'

useHead({
  title: 'Edit Post',
})

const changeBorder = ref(false)

const postId: Ref<number> = ref(1)
const content: Ref<string> = ref('')
const { data, error, isLoading, refetch } = usePostsQuery(postId, {
  enabled: computed(() => !!postId.value),
})

const placeholder: Ref<string> = ref('')
const options: QuillOptions = reactive({
  theme: 'snow',
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      ['code-block', 'blockquote'],
      [{ color: [] }, { background: [] }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
  },
})

const editorContainer: Ref<HTMLDivElement | null> = ref(null)
const quillEditor: Ref<HTMLDivElement | null> = ref(null)

watchEffect(() => {
  if (quillEditor.value) {
    (quillEditor.value as any)
      .editor
      .firstChild.dataset
      .placeholder = placeholder.value

    const editor = editorContainer.value
    const fills = editor?.querySelectorAll('.ql-fill')
    const strokes = editor?.querySelectorAll('.ql-stroke')
    const pickers = editor?.querySelectorAll('.ql-picker')
    if (isDark.value) {
      fills?.forEach(elem => elem.classList.add('!fill-coolgray'))
      strokes?.forEach(elem => elem.classList.add('!stroke-coolgray'))
      pickers?.forEach(elem => elem.classList.add('!color-coolgray'))
    }
    else {
      fills?.forEach(elem => elem.classList.remove('!fill-coolgray'))
      strokes?.forEach(elem => elem.classList.remove('!stroke-coolgray'))
      pickers?.forEach(elem => elem.classList.remove('!color-coolgray'))
    }
  }
})

watchEffect(() => {
  if (error.value) {
    placeholder.value = `Error while loading post content: ${(error.value as any).response.statusText}`
    content.value = ''
  }
  else if (isLoading.value) {
    placeholder.value = 'Loading post content...'
    content.value = ''
  }
  else {
    placeholder.value = 'Enter your text here...'
    content.value = `
      <h1>${data.value?.title}</h1>
      <p>${data.value?.body}</p>
    `
  }
})

const url: Ref<string> = ref('')
watchEffect(() => {
  url.value = `/posts/${postId.value}`
})

const { mutateAsync, mutate } = usePostMutation(url)

async function saveEdittedPost() {
  // custom extract logic
  const edittedPost = extractFromHTML(content.value)
  await mutateAsync(edittedPost as any)
}
</script>

<template>
  {{ isDark }}
  <AdminPanelHeading>
    Edit
  </AdminPanelHeading>
  <div mb-10>
    <label for="post-id">
      <span class="text-xl mr-3">Post Id:</span>
      <input
        id="post-id" v-model="postId" type="number"
        name="post-id" min="1" max="100"
        class="input input-bordered"
        max-w-xs p-3
      >
    </label>
    <div v-if="error" my-2 text-red text-sm>
      {{ error }}
    </div>
  </div>
  <ClientOnly>
    <div
      ref="editorContainer"
      :class="{
        'outline outline-2 outline-yellow-5 outline-offset-2': changeBorder,
      }"
    >
      <QuillEditor
        ref="quillEditor"
        v-model:value="content"
        class="!h-100"
        :options="options"
        @ready="changeBorder = true"
        @focus="changeBorder = true"
        @blur="changeBorder = false"
      />
    </div>
    <button
      class="btn btn-primary mt-5"
      @click.prevent="saveEdittedPost()"
    >
      Save
    </button>
    {{ content }}
  </ClientOnly>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
