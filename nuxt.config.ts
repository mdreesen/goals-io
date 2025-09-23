// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['nuxt-auth-utils'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    // typeCheck: true,
    strict: false
  }
})