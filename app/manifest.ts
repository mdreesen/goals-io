import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ascend',
    short_name: 'Ascend',
    id: "Ascend",
    description: 'Set goals. Achieve greatness.',
    start_url: '/',
    orientation: 'any',
    lang: 'en',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/logo.webp',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
  }
}