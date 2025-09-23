// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import './lib/env';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['nuxt-auth-utils'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    // typeCheck: true,
    strict: false
  }
})