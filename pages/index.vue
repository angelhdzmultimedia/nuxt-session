<script setup lang="ts">
const auth = useAuthStore()
</script>

<template>
 <div class="column items-center justify-center q-gutter-sm full-width full-height">
  <span class="text-h6">
    {{ !auth.isAuth ? 'Welcome!' : `Welcome, ${auth.user?.name}` }}
  </span>
 </div>
</template>

<style scoped>

</style>