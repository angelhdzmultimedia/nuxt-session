<script setup lang="ts">
const auth = useAuthStore()

async function logout(): Promise<void> {
  await auth.logout()
  return void navigateTo('/login') 
}
</script>

<template>
  <QLayout view="hHh lpR fFf">
    <QHeader>
      <QToolbar>
        <QBtn icon="home" to="/"></QBtn>
        <QToolbarTitle>App</QToolbarTitle>
        <QAvatar class="cursor-pointer" color="white">
          <QMenu auto-close> 
            <QList>
              <QItem to="/profile" clickable>
                <QItemSection>{{auth.isAuth ? auth.user?.name : 'Guest' }}</QItemSection>
              </QItem>
              <QItem v-if="!auth.isAuth" clickable>
                <QBtn color="primary" to="/login">Login</QBtn>
              </QItem>
              <QItem v-if="auth.isAuth"  clickable>
                <QBtn @click="logout" color="primary">Logout</QBtn>
              </QItem>
            </QList>
          </QMenu>
        </QAvatar>
      </QToolbar>
    </QHeader>

    <QPageContainer class="window-width window-height">
      <QPage class="column full-width full-height">
        <slot/>
      </QPage>
    </QPageContainer>
  </QLayout>
</template>

<style scoped>

</style>