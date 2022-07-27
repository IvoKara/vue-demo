<script setup lang="ts">
import type { SmallText } from '@/types'

defineProps<{
  options: SmallText
}>()
</script>

<template>
  <small>
    {{ options.text }}
    <RouterLink
      class="link link-primary underline-offset-2"
      :to="options.link"
    >
      {{ options.linkText }}
    </RouterLink>
  </small>
</template>
