export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  app: {
    head: {
      bodyAttrs: {
        class: "bg-black text-white font-semibold font-mono"
      }
    }
  },

  compatibilityDate: '2025-02-16'
})