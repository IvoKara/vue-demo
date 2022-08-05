<script setup lang="ts">
import type { Ref } from 'vue'

// import Quill from 'quill'

useHead({
  title: 'Edit Post',
})

const content = ref('<div>Hello there</div>')
const postId = ref(1)
const myEditor = ref<HTMLElement | null>(null)
onMounted(async () => {
  // const Quill = await import('quill')
  // const quill = new Quill('#myEditor', {
  //   theme: 'snow',
  // })
  // quill.pasteHTML()
  // console.log(quill)
})
</script>

<template>
  <AdminPanelHeading>
    Edit
  </AdminPanelHeading>
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
  <div id="myEditor" ref="myEditor">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br></p>
  </div>

  <ClientOnly>
    <!-- <Editor v-model="content" editor-style="height: 320px" /> -->
    <quill-editor v-model:value="content" class="!h-100" />
  </ClientOnly>
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
