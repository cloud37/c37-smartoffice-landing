/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
      ],
      theme: {
        extend: {
          colors: {
            rose: colors.rose,
          },
        },
        customColorPalette: {
            colors: {
                c37: '#ffc100',
            },
        },
      },
  plugins: [
    require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@markusantonwolf/tailwind-css-plugin-custom-color-palette'),
  ],
}
