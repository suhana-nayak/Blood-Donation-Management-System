/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary' : '#7e0c0c',
        'secondary': '#7e0c0c'
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false,
  },
}
