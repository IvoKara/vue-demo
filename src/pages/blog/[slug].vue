<script setup lang="ts">
const props = defineProps<{
  slug: string
}>()
</script>

<template>
  Here
  <Post :id="props.slug" />
  <RouterLink
    to="/blog" class="btn btn-primary"
  >
    Back
  </RouterLink>
</template>
