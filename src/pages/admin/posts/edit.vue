<script setup lang="ts">
import { usePostsQuery } from '@/composables/postQuery'
import type { Post, QuillOptions } from '@/types'
import { usePostMutation } from '@/composables/postMutation'

useHead({
  title: 'Edit Post',
})

const changeBorder = ref(false)

const postId = ref(1)
const content = ref('')
const { data, error, isLoading, refetch } = usePostsQuery(postId, {
  enabled: computed(() => !!postId.value),
})

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

watchEffect(() => {
  if (error.value) {
    options.placeholder = `
      Error while loading post content: 
        ${(error.value as any).response.statusText}`
    content.value = ''
  }
  else if (isLoading.value) {
    options.placeholder = 'Loading post content...'
    content.value = ''
    // console.log('here')
  }
  else {
    options.placeholder = 'Enter your text here...'
    content.value = `
      <h1>${data.value?.title}</h1>
      <p>${data.value?.body}</p>
    `
    // console.log('not here')
  }
})

const url = ref('')
watchEffect(() => {
  url.value = `/posts/${postId.value}`
})

const { mutateAsync, mutate } = usePostMutation(url)

async function saveEdittedPost() {
  // custom extract logic
  const endHeading = content.value.search('</h1>')
  const edittedPost = {
    title: content.value.slice(4, endHeading),
    body: content.value.slice(endHeading).replace(/<(?:.|\n)*?>/gm, ''),
  }
  console.log(url.value)
  await mutateAsync(edittedPost as any)
}
</script>

<template>
  {{ isLoading }}
  <AdminPanelHeading>
    Edit
  </AdminPanelHeading>
  <div mb-10>
    <label for="post-id">
      <span class="text-xl mr-3">Post Id:</span>
      <input
        id="post-id" v-model="postId" type="number"
        name="post-id" min="1" max="100"
        border-2 p-3
        rounded-3
        border-gray-200
      >
    </label>
    <div v-if="error" my-2 text-red text-sm>
      {{ error }}
    </div>
  </div>
  <ClientOnly>
    {{ options.placeholder }}
    <div
      :class="{
        'outline outline-2 outline-yellow-5 outline-offset-2': changeBorder,
      }"
    >
      <QuillEditor
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
