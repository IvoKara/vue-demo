import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'
export default defineConfig(
  {
    presets: [
      presetUno(),
      presetIcons({ scale: 2.4 }),
      presetAttributify(),
      presetWebFonts({
        provider: 'google',
        fonts: {
          oswald: 'Oswald:400,600',
          montserrat: 'Montserrat',
          greatvibes: 'Great Vibes:400',
        },
      }),
      presetTypography(),
      presetScrollbar({
        scrollbarWidth: '10px',
      }),
    ],
    rules: [
      ['text-2xs', { 'font-size': '0.75rem', 'line-height': '1rem;' }],
      ['transition-dark-light', {
        'transition-property': 'color, background-color, border-color, text-decoration-color, fill, stroke',
        'transition-duration': '1s',
        'transition-timing-function': 'cubic-bezier(0.3, 0.04, 0.11, 1.02)',
      }],
      ['text-amber-950', { color: 'rgba(113, 77, 14, 0.97)' }],
      ['bg-amber-950', { 'background-color': 'rgba(113, 77, 14, 0.97)' }],
    ],
  })
