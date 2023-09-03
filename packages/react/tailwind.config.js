/** @type {import('tailwindcss').Config} */
import { colors, fonts } from '@cesarneo/tokens'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        roboto: fonts.default,
        code: fonts.code,
      },
    },
  },
  plugins: [],
}
