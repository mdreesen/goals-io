// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    'nuxt-auth-utils',
    '@vueuse/motion/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-charts',
    '@nuxt/ui',
    '@vite-pwa/nuxt',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: {
    strict: false
  },
  colorMode: {
    dataValue: 'theme',
    classSuffix: '', // Important for Tailwind CSS integration
  },
  pwa: {
    /* PWA options */
    manifest: {
      name: 'Ascend',
      short_name: 'Ascend',
      description: 'Set goals. Achieve greatness.',
      orientation: 'any',
      lang: 'en',
      display: 'standalone',
      background_color: '#272727',
      theme_color: '#272727',
      icons: [
        {
          src: '/images/maskable_icon.png',
          sizes: '445x445',
          type: 'image/png',
          purpose: "any"
        },
        {
          src: '/images/maskable_icon.png',
          sizes: '445x445',
          type: 'image/png',
          purpose: "monochrome"
        },
        {
          src: '/images/maskable_icon.png',
          sizes: '445x445',
          type: 'image/png',
          purpose: "maskable"
        },
        {
          src: '/images/logo_transparent_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/images/maskable_icon.png',
          sizes: '445x445',
          type: 'image/png',
        }
      ],
      categories: [
        "fitness",
        "health",
        "lifestyle",
        "productivity",
        "books",
        "personalization"
      ],
      display_override: [
        "standalone",
        "window-controls-overlay"
      ],
      related_applications: [
        {
          "platform": "play",
          "url": "https://play.google.com/store/apps/details?id=app.vercel.goals_io.twa.pwa&hl=en-US&ah=LK08Pcp_p9aSBNro6Va1uM424v4",
          "id": "app.vercel.goals_io.twa.pwa"
        },
        {
          "platform": "windows",
          "url": "https://www.ascendpod.com"
        }
      ],
      prefer_related_applications: true,
    },
    workbox: {
      'navigateFallback': '/login',
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
  },
  
  // @vueuse/motion/nuxt
  runtimeConfig: {
    logto: {
      endpoint: process.env.PROJECT_DOMAIN,
      appId: '<your-logto-app-id>',
      appSecret: process.env.NEXTAUTH_SECRET,
      cookieEncryptionKey: '<a-random-string>',
    },
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