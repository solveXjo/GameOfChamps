/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'goc': {
          white: '#ffffff',
          gray: '#777887',
          rose: '#a46b6b',
          coral: '#d15e50',
          red: '#ff5235',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};