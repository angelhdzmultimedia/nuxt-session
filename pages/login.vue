<script setup lang="ts">
import { NuxtError } from '#app'
import { LoginData } from '~~/types/login-data'

const email = ref<string>('')
const password = ref<string>('')

const auth = useAuthStore()


async function login() {
  try {
    await auth.login(email.value, password.value)
    return navigateTo('/')
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
   <div class="column items-center q-mt-lg q-gutter-sm full-width full-height">
  <span class="text-h6">
    Login
  </span>
  <QForm @submit.prevent="login" class="column q-gutter-md">
    <QInput v-model="email" label="Email" dense></QInput>
    <QInput v-model="password" label="Password" dense></QInput>
    <QBtn color="primary" type="submit">Login</QBtn>
  </QForm>

  <div class="column q-gutter-sm items-center">
    <span>Don't have an account?</span>
    <QBtn color="purple" to="/register">Register</QBtn>
  </div>
 </div>
</template>

<style scoped>

</style>