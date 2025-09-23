// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import './lib/env';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ['nuxt-auth-utils', '@vueuse/motion/nuxt'],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    // typeCheck: true,
    strict: false
  },

  // @vueuse/motion/nuxt
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            }
          }
        }
      }
    }
  }
})