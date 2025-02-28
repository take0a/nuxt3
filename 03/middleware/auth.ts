export default defineNuxtRouteMiddleware(
  async (to, _from) => {
    const { loggedIn } = useUserSession()
    if (!loggedIn.value) {
      const cookie = useCookie<string | null>('REDIRECT_COOKIE_NAME')
      cookie.value = to.fullPath
      const config = useRuntimeConfig()
      return navigateTo(config.public.loginPath, { external: true })
    }
  },
)
