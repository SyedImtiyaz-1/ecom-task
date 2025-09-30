/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: '#000000'
      },
      backgroundColor: {
        DEFAULT: '#ffffff'
      }
    },
  },
  plugins: [],
}
