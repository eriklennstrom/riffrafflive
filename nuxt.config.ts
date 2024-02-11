// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/" : "",
    buildAssetsDir: "assets",
  },
  modules: ["@nuxtjs/tailwindcss", "nuxt-aos", "nuxt-gtag"],
  gtag: {
    id: "G-NDBP6CLTZZ",
  },
  aos: {
    once: true,
    duration: 200,
    offset: 60,
  },
});
