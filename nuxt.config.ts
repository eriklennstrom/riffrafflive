// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/" : "",
    buildAssetsDir: "assets",
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos"],
  aos: {
    once: true,
    duration: 200,
    offset: 60,
  },
});