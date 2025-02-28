export default defineNuxtRouteMiddleware(
  async (_to, _from) => {
    const { loggedIn } = useUserSession()
    if (!loggedIn.value) {
      return navigateTo('/auth/google', { external: true })
    }
  },
)
