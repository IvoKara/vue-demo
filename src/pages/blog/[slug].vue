<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()

const postId = ref(props.slug)
</script>

<template>
  <Post :id="props.slug" />
  <RouterLink
    to="/blog" class="btn btn-primary"
  >
    Back
  </RouterLink>
</template>
