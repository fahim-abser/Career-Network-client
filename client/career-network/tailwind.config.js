/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryFont: ['Bebas Neue','cursive'],
        secondaryFont: ['Playfair Display','serif'],
        besicFont: ['PT Serif','sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}