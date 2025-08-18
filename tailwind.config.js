/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        playwrite: ['"Playwrite AU SA"', 'cursive'],
        basic: ['"Basic"', 'sans-serif'],
        nova: ['"Nova Mono"', 'monospace'],
        iceland: ['"Iceland"', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

