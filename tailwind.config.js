/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#646cff',
        chalky: {
            '50': '#fdf9ed',
            '100': '#f8eccd',
            '200': '#eed386',
            '300': '#e9c160',
            '400': '#e3ab3c',
            '500': '#db8c25',
            '600': '#c26b1d',
            '700': '#a14e1c',
            '800': '#833e1d',
            '900': '#6c331b',
            '950': '#3e190a',
        },
      }
    },
  },
  plugins: [],
}