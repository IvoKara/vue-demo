<script setup lang="ts">
import type { Ref } from 'vue'
import { isFieldEmpty, isValidMail } from '../composables/validateMail'

const nameRef = ref('')
const { undo, redo, history } = useRefHistory(nameRef)
onKeyStroke(['ctrl', 'z'], () => undo)
onKeyStroke(['ctrl', 'shifht', 'z'], () => redo)

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

// watch(name, (val) => {
//   if (val !== '')
//     nameEmpty.value = null
// })

watch(email, (val) => {
  // console.log(val)
  // emailValid.value = ValidateEmail(val)
  // console.log(emailValid.value)
  if (emailValid.value === false)
    emailValid.value = null
})
</script>

<template>
  <div v-for="state in history" :key="state">
    {{ state }}
  </div>
  <form mx-auto w-100 text-left @submit.prevent="(e) => sendMail(e as SubmitEvent)">
    <label for="name" w-full>
      <p font-oswald>Name:</p>
      <p v-if="nameEmpty === true" mb-1 text-xs class="text-error">
        * Required
      </p>
      <input
        id="name" v-model="nameRef" type="text" name="name" class="input input-bordered w-full"
        :class="nameEmpty === null ? '' : !nameEmpty ? 'input-success' : 'input-error'"
        placeholder="Your Name..."
        @focusout="checkEmptyName"
      >
    </label>
    <label for="name">
      <p mt-3 font-oswald>Email:</p>
      <p v-if="emailValid === false" mb-1 text-xs class="text-error">
        * {{ (email !== email.trim()) ? 'Remove whitespaces' : (email === '') ? 'Required' : 'Enter valid email' }}
      </p>
      <input
        id="name" v-model="email" name="name" class="input input-bordered w-full" autocomplete="email"
        :class="emailValid === null ? '' : emailValid ? 'input-success' : 'input-error'"
        placeholder="Your Email adress..."
        @focusout="ValidateEmail"
      >
    </label>
    <label>
      <p mt-3 font-oswald>Message:</p>
      <p v-if="messageEmpty === true" mb-1 text-xs class="text-error">
        * Required
      </p>
      <textarea
        id="message" v-model="message" class="textarea textarea-bordered w-full resize-none"
        :class="messageEmpty === null ? '' : !messageEmpty ? 'textarea-success' : 'textarea-error'"
        placeholder="Your thoughts..." rows="8"
        @focusout="checkEmptyMessage"
      />
    </label>

    <button type="submit" class="btn btn-primary">
      Send
    </button>
  </form>
</template>
