<script setup lang="ts">
import type { Ref } from 'vue'
import type { Credentials, InputOptions, SmallText } from '@/types'

const props = defineProps<{
  name: string
  hasConfirmPass?: boolean
  smallText: SmallText
  isLoading?: boolean
}>()
// event
defineEmits(['onSubmit'])

const username: Ref<string> = ref('')
const password: Ref<string> = ref('')
const confirmPass: Ref<string> = ref('')
const inputOptions: InputOptions[] = [

  { label: 'Username', type: 'text', placeholder: 'Username', targetRef: username },
  { label: 'Password', type: 'password', placeholder: 'Password', targetRef: password },
]

if (props.hasConfirmPass === true) {
  inputOptions.push(
    { label: 'Confirm password', type: 'password', placeholder: 'Confirm', targetRef: confirmPass },
  )
}
</script>

<template>
  <div
    v-if="isLoading"
    transition ease-in-out transition-duration="0.4s"
    z-10 fixed opacity-50
    top-0 bottom-0 left-0 right-0
    class="bg-base-100"
  />
  <div transition-dark-light>
    <h1 text-2xl>
      {{ name }}
    </h1>
    <form
      @submit.prevent="$emit('onSubmit', {
        username,
        password,
        confirmPass: hasConfirmPass ? confirmPass : undefined,
        method: name.toLowerCase(),
      })"
    >
      <InputField
        v-for="opt in inputOptions" :key="opt.label"
        v-model:fieldValue="opt.targetRef.value" :section="opt"
      />
      <button
        type="submit" class="btn btn-primary w-full my-2 !h-9 btn-sm sm:btn-md"
        :class="{ loading: isLoading === true }"
      >
        {{ name }}
      </button>
    </form>
    <div class="my-2">
      <SmallTextUnderForm
        :options="smallText"
      />
    </div>
  </div>
</template>
