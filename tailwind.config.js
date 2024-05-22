/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ffe3ee',
          200: '#ffaacd',
          300: '#ff71ab',
          400: '#8e6ae2',
          500: '#8760e0',
          600: '#5525c0',
          700: '#8e003a',
          800: '#550023',
          900: '#1c000c'
        },
        secondary: {
          100: '#ffe3ee',
          200: '#ffaacd',
          300: '#ff71ab',
          400: '#ff398a',
          500: '#e8e8ed',
          600: '#c60051',
          700: '#8e003a',
          800: '#550023',
          900: '#1c000c'
        }
      }
    }
  },
  plugins: []
}
