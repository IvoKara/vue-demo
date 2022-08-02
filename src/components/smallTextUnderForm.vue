<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { SmallText } from '@/types'

defineProps<{
  options: SmallText
}>()

const xs = useBreakpoints(breakpointsTailwind).smaller('sm')
</script>

<template>
  <small :class="{ 'text-xs': xs }">
    {{ options.text }}
    <RouterLink
      class="link link-primary underline-offset-2"
      :to="options.link"
    >
      {{ options.linkText }}
    </RouterLink>
  </small>
</template>
