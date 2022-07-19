<script setup lang="ts">
import type { Ref } from 'vue'
import type { InputOptions, SmallText } from '@/types'
import { useUserStore } from '@/stores/user'
import router from '@/router'
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

const userStore = useUserStore()
const route = useRoute()
watch(() => route.path, () => {
  userStore.errors = []
})
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
    <form
      @submit.prevent="$emit('onSubmit', {
        username,
        password,
        formType: name.toLowerCase(),
      })"
    >
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
    <div
      v-for="error in userStore.errors" :key="error"
      class="text-error text-sm"
    >
      {{ error.response.data }}
    </div>
  </div>
</template>
