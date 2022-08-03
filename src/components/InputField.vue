<script setup lang="ts">
import type { InputOptions } from '@/types'

const props = defineProps(['fieldValue', 'section'])
defineEmits(['update:fieldValue'])

const data = ref('')
</script>

<template>
  <div my-3>
    <p text-left mb="0.5" text-sm sm:text-base>
      {{ section.label }}:
    </p>
    <input
      :value="fieldValue"
      class="input input-bordered
        w-full !h-10 sm:input-md sm:!h-12"
      :type="section.type"
      :placeholder="section.placeholder"
      @input="$emit('update:fieldValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

