<script setup lang="ts">
import Editor from 'primevue/editor'

useHead({
  title: 'Edit Post',
})

const content = ref('<div>Hello there</div>')
const postId = ref(1)
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
  <Editor v-model="content" editor-style="height: 320px" />

  <!-- <div id="editor">
  <p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br></p>
</div> -->
</template>

<route lang="yaml">
meta:
  layout: admin
</route>
