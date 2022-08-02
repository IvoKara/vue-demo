<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import type { Ref } from 'vue'
import { isFieldEmpty, isValidMail } from '../composables/validateMail'

const nameRef = ref('')
const email = ref('')
const message = ref('')
const emailValid: Ref<null | boolean> = ref(null)
const nameEmpty: Ref<null | boolean> = ref(null)
const messageEmpty: Ref<null | boolean> = ref(null)

interface EmailPayload {
  name: string
  email: string
  message: string
}

function ValidateEmail() {
  emailValid.value = isValidMail(email.value)
}

function checkEmptyName() {
  nameEmpty.value = isFieldEmpty(nameRef.value)
}

function checkEmptyMessage() {
  messageEmpty.value = isFieldEmpty(message.value)
}

async function sendMail(e: SubmitEvent) {
  e.preventDefault()
  // ValidateEmail()
  // if (name.value === '')
  //   nameEmpty.value = true

  // const payload: EmailPayload = {
  //   name: name.value,
  // }

  // await sending mail
}

watch(email, (val) => {
  if (emailValid.value === false)
    emailValid.value = null
})

const xs = useBreakpoints(breakpointsTailwind).smaller('sm')
</script>

<template>
  <!-- <div v-for="state in history" :key="state">
    {{ state }}
  </div> -->
  <form
    mx-auto w-80 sm:w-100 text-left
    @submit.prevent="(e) => sendMail(e as SubmitEvent)"
  >
    <label for="name" w-full>
      <p font-oswald>Name:</p>
      <p v-if="nameEmpty === true" mb-1 text-xs class="text-error">
        * Required
      </p>
      <input
        id="name" v-model="nameRef" type="text" name="name"
        placeholder="Your Name..."
        class="w-full input input-bordered input-sm !h-10.5 sm:input-md sm:!h-12"
        :class="{
          'input-success': nameEmpty !== null && !nameEmpty,
          'input-error': nameEmpty !== null && nameEmpty,
        }"
        @focusout="checkEmptyName"
      >
    </label>
    <label for="name">
      <p mt-3 font-oswald>Email:</p>
      <p v-if="emailValid === false" mb-1 text-xs class="text-error">
        * {{
          (email !== email.trim()) ? 'Remove whitespaces'
          : (email === '') ? 'Required' : 'Enter valid email'
        }}
      </p>
      <input
        id="name" v-model="email" name="name" autocomplete="email"
        placeholder="Your Email adress..."
        class="input input-bordered w-full input-sm sm:input-md !h-10 sm:!h-12"
        :class="{
          'input-success': emailValid !== null && emailValid,
          'input-error': emailValid !== null && !emailValid,
        }"
        @focusout="ValidateEmail"
      >
    </label>
    <label>
      <p mt-3 font-oswald>Message:</p>
      <p v-if="messageEmpty === true" mb-1 text-xs class="text-error">
        * Required
      </p>
      <textarea
        id="message" v-model="message" :rows="xs ? 4 : 8"
        placeholder="Your thoughts..."
        class="textarea textarea-bordered w-full resize-none"
        :class="{
          'textarea-success': messageEmpty !== null && !messageEmpty,
          'textarea-error': messageEmpty !== null && messageEmpty,
        }"
        @focusout="checkEmptyMessage"
      />
    </label>

    <button
      type="submit"
      class="mt-5 btn btn-primary !h-9 btn-sm sm:btn-md"
      :class="{ 'btn-block': xs }"
    >
      Send
    </button>
  </form>
</template>
