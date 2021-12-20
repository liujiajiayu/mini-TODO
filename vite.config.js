import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
VitePWA({
  registerType: 'autoUpdate',  
  manifest: {
    "name": "Progressive Web App",
    "short_name": "PWA",
    "description": "Progressive Web App Demo",
    "icons": [
        {
            "src": "./assets/icon/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
        },
        {
            "src": "./assets/icon/android-chrome-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
        }
    ],
    "start_url": "index.html",
    "display": "fullscreen",
    "theme_color": "#B12A34",
    "background_color": "#B12A34"
},
  workbox: {
    // workbox options for generateSW
  }
})
export default defineConfig({
  plugins: [vue(),VitePWA()]
})