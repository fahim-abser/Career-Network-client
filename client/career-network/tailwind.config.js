/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primaryFont: ['Bebas Neue', 'cursive'],
        secondaryFont: ['Playfair Display', 'serif'],
        besicFont: ['Tinos', "serif"]
      },

      colors: {
        Primary: "#F9F5E7",
        secondary: "#205295",
        info: "#253858",
        home: "#FFFBF5"
      },
      clipPath: {
        mypolygon: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)"
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },
      },
      key: {
        open: {
          "0%": { display: "none" },
          "1%": { display: "block", height: "0px" },
          "100%": { display: "block", height: "100%" }
        }
      },
      animation: {
        "waving-hand": "wave 2s linear infinite"
      },
      anim: {
        "dropdown": "open 2s linear ease-in"
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwind-clip-path')
  ],
}