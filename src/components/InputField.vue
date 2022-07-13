<script setup lang="ts">
import type { InputOptions } from '@/types'

const props = defineProps(['fieldValue', 'section'])
defineEmits(['update:fieldValue'])

const data = ref('')
</script>

<template>
  <div my-3>
    <p text-left mb="0.5">
      {{ section.label }}:
    </p>
    <input
      :value="fieldValue"
      class="input input-bordered w-full"
      :type="section.type"
      :placeholder="section.placeholder"
      @input="$emit('update:fieldValue', $event.target.value)"
    >
  </div>
</template>

