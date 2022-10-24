/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      colors: {
        'blue-gray': {
          100: "#6699CC",
          200: "#5783AE",
          300: "#486D91",
          400: "#3A5774",
          500: "#2B4157"
        }
      },
    },
  },
  plugins: [],
}
