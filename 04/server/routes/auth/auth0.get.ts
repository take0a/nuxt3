export default defineOAuthAuth0EventHandler({
  config: {
    emailRequired: true,
  },
  async onSuccess(event, { user }) {
    const config = useRuntimeConfig()
    await setUserSession(event, {
      user: {
        auth0: user.email,
      },
      loggedInAt: Date.now(),
    }, {
      maxAge: Number(config.public.maxAge),
    })

    const to = getCookie(event, 'REDIRECT_COOKIE_NAME') || '/'
    deleteCookie(event, 'REDIRECT_COOKIE_NAME')
    return sendRedirect(event, to)
  },
})
