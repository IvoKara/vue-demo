<script setup lang="ts">
import type { Ref } from 'vue'
import type { InputOptions, SmallText } from '@/types'

const props = defineProps<{
  name: string
  // inputOptions: InputOptions[]
  smallText: SmallText
  isLoading?: boolean
}>()
// event
defineEmits(['onSubmit'])

const username: Ref<string> = ref('')
const email: Ref<string> = ref('')
const password: Ref<string> = ref('')
const inputOptions: InputOptions[] = [

  { label: 'Username', type: 'text', placeholder: 'Username or email', targetRef: username },
  { label: 'Password', type: 'password', placeholder: 'Password', targetRef: password },
]
</script>

<template>
  <h1 text-2xl>
    {{ name }}
  </h1>
  <form @submit.prevent="$emit('onSubmit', { username, password })">
    <InputField
      v-for="opt in inputOptions" :key="opt.label"
      v-model:fieldValue="opt.targetRef.value" :section="opt"
    />
    <button
      type="submit" class="btn btn-primary w-full my-2"
      :class="{ loading: isLoading === true }"
    >
      {{ name }}
    </button>
  </form>
  <SmallTextUnderForm
    :options="smallText"
  />
</template>
