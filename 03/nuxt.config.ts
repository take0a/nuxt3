// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@nuxt/test-utils/module',
    'nuxt-auth-utils',
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      loginPath: '/auth/google',
    },
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
})
