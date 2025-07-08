/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ penting!
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

