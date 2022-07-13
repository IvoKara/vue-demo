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
      class="underline underline-offset-2 text-primary-focus hover:text-primary"
      :to="options.link"
    >
      {{ options.linkText }}
    </RouterLink>
  </small>
</template>
