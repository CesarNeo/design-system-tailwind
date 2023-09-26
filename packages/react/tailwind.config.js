import { colors, fonts } from '@cesarneo/tokens'

/** @type {import('tailwindcss').Config} */
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
      keyframes: {
        slideIn: {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        slideOut: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'slide-in': 'slideIn 200ms ease-out',
        'slide-out': 'slideOut 200ms ease-out',
      },
    },
  },
  plugins: [],
}
