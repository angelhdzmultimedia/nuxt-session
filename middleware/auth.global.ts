export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore()

  await auth.loadProfile()

  if (to.meta.requiresAuth && !auth.isAuth) {
    return navigateTo('/login')
  }
})


