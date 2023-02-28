<script setup lang="ts">
import { NuxtError } from '#app'

const email = ref<string>('')
const password = ref<string>('')
const username = ref<string>('')
const name = ref<string>('')

const auth = useAuthStore()

async function register() {
  try {
    const data = await auth.register({
      email: email.value,
      password: password.value,
      name: name.value,
      username: username.value
    })
    return navigateTo('/login')
  } catch (error) {
    const nuxtError: NuxtError = error as NuxtError
    Notify.create({
      message: nuxtError.message,
      type: 'negative'
    })
  }
}
</script>

<template>
   <div class="column q-pb-md items-center q-mt-lg q-gutter-sm full-width full-height">
  <span class="text-h6">
    Register
  </span>
  <QForm @submit.prevent="register" class="column q-gutter-md">
    <QInput v-model="name" label="Name" dense></QInput>
    <QInput v-model="username" label="Username" dense></QInput>
    <QInput v-model="email" label="Email" dense></QInput>
    <QInput v-model="password" label="Password" dense></QInput>
    <QBtn color="primary" type="submit">Register</QBtn>
  </QForm>

  <div class="column q-gutter-sm items-center">
    <span>Already registered?</span>
    <QBtn color="purple" to="/login">Login</QBtn>
  </div>
 </div>
</template>

<style scoped>

</style>