// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/riffrafflive/',
    buildAssetsDir: 'assets'
  },
  modules: ['@nuxtjs/tailwindcss']
})
