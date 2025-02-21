import type { MetadataRoute } from 'next';

const currentUrl = 'https://goals-io.vercel.app/'; // Replace with your URL logic

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ascend',
    short_name: 'Ascend',
    id: "Ascend",
    description: 'Set goals. Achieve greatness.',
    start_url: currentUrl,
    orientation: 'any',
    lang: 'en',
    display: 'standalone',
    background_color: '#272727',
    theme_color: '#272727',
    icons: [
      {
        src: '/assets/play_store_icons/play_store_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "any"
      },
      {
        src: '/assets/play_store_icons/play_store_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "monochrome"
      },
      {
        src: '/assets/play_store_icons/play_store_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: "maskable"
      },
      {
        src: '/assets/logo_transparent_512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/assets/logo.png',
        sizes: '375x375',
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
    dir: "auto",
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
  }
}