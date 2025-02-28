export default defineNuxtRouteMiddleware(
  async (to, _from) => {
    const { loggedIn } = useUserSession()
    if (!loggedIn.value) {
      const cookie = useCookie<string | null>('REDIRECT_COOKIE_NAME')
      cookie.value = to.fullPath
      return navigateTo('/auth/google', { external: true })
    }
  },
)
