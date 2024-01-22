/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Cara custom spacing
    extend: {spacing: {
      13: '3.25rem'
    },},
  },
  plugins: [],
}

