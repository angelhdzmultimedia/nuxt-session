<script setup lang="ts">
'Definir Metadatos de Página en Vue 3'

definePageMeta({
  requiresAuth: true
})

const auth = useAuthStore()
const counter = useCounterStore()
</script>

<template>
 <div class="column items-center justify-center q-gutter-sm full-width full-height">
    <span class="text-h6">
    {{ auth.user?.name }}'s Profile
  </span>
  <span>ID: {{ auth.user?.id }}</span>
  <div class="row items-center q-gutter-sm">
    <span>Your Counter:</span> <span class="text-lime text-h6">{{ counter.count ?? 0 }}</span>

  </div>
  <QBtn icon="add" color="primary" @click="counter.add"></QBtn>
  <QBtn icon="restart_alt" color="primary" @click="counter.reset"></QBtn>
  </div>
</template>

<style scoped>

</style>