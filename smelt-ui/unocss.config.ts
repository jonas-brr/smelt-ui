import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  rules: [],
  presets: [
    // Tailwind-like utility classes, replacement for Bootstrap's utility classes.
    presetUno({
      // Align tailwind darkmode to Quasar's classes,
      // so that darkmode selectors (e.g. 'dark:color-red') can be used as well.
      dark: {
        light: '.body--light',
        dark: '.body--dark'
      }
    })
  ],
  // duplicated for Quasar in quasar-variables.scss
  // https://brand.suse.com/brand-system/color-palette
  theme: {
    colors: {
      primary: '#0c322c',
      secondary: '#343a40',
      accent: '#FE7C3F'
    }
  }
})
