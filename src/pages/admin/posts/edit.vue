<script setup lang="ts">
useHead({
  title: 'Edit Post',
})

const postId = ref(1)
const content = ref('<div>Hello World!!</div>')

const options = {
  theme: 'snow',
  placeholder: 'Enter your text here...',
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
}
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
      mb-10
    >
  </label>
  <div v-cloak class="h-100">
    <QuillEditor v-model:value="content" :options="options" />
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>

<route lang="yaml">
meta:
  layout: admin
</route>
