import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetUno,  presetIcons,  presetAttributify, presetWebFonts } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    Unocss({ 
      presets: [
        presetUno(),
        presetIcons({scale: 2.4}),
        presetAttributify(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            oswald:  'Oswald:400,600',
            montserrat: 'Montserrat:400'
          }
        })
      ]
     }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
