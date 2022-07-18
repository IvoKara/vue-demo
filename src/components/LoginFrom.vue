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

  { label: 'Username', type: 'text', placeholder: 'Username', targetRef: username },
  { label: 'Password', type: 'password', placeholder: 'Password', targetRef: password },
]
</script>

<template>
  <div
    v-if="isLoading"
    transition ease-in-out transition-duration="0.4s"
    z-10 w-100 h-100
    fixed
    opacity-50
    class="bg-base-100"
  />
  <div transition-dark-light>
    <h1 text-2xl>
      {{ name }}
    </h1>
    <form @submit.prevent="$emit('onSubmit', { username, password })">
      <InputField
        v-for="opt in inputOptions" :key="opt.label"
        v-model:fieldValue="opt.targetRef.value" :section="opt"
      />
      <button
        type="submit" class="btn btn-primary w-full my-2 transition-dark-light"
        :class="{ loading: isLoading === true }"
      >
        {{ name }}
      </button>
    </form>
    <SmallTextUnderForm
      :options="smallText"
    />
  </div>
</template>
