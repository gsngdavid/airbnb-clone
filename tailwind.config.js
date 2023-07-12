/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#ff385c",
        "red-secondary": "#ff385c",
        "gray-primary": "#b0b0b0",
        "gray-secondary": "#dddddd",
        "white-secondary": "#ffffffe6",
        "black-secondary": "#222222",
      },
      fontFamily: {
        "roboto": "'Roboto', sans-serif;"
      }
    },
  },
  plugins: [],
}

