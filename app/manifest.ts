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
    background_color: '#1b1b1b',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    categories: [
      "fitness",
      "health",
      "lifestyle",
      "productivity"
    ],
    dir: "auto",
    display_override: [
      "standalone",
      "window-controls-overlay"
    ],
    prefer_related_applications: true
  }
}