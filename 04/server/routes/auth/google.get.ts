export default defineOAuthGoogleEventHandler({
  config: {
    authorizationParams: {
      access_type: 'offline',
    },
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user: {
        google: user.email,
      },
      loggedInAt: Date.now(),
    })

    const to = getCookie(event, 'REDIRECT_COOKIE_NAME') || '/'
    deleteCookie(event, 'REDIRECT_COOKIE_NAME')
    return sendRedirect(event, to)
  },
})
