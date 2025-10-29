/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        secondary: '#FF69B4',
        accent: '#06B6D4',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
