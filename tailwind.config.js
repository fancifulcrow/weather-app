/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        "primary-Color" : "#dddddd",
        "secondary-Color" : "#333333",
      },
      fontFamily: {
        "Quicksand" : ["Quicksand', sans-serif"],
      },
    },
  },
  plugins: [],
}