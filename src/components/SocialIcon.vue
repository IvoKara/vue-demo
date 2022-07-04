<script setup lang='ts'>
defineProps<{
  link?: string
}>()

const name = ref('Name')
</script>

<template>
  <div text-white hover:text-gray-300>
    <a v-if="link" :href="link" target="_blank" rel="noopener norefferer">
      <slot />
    </a>
    <slot v-else />
  </div>
</template>

