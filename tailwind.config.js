/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
      },
      textShadow: {
        'custom': '0px 0px 10px #00cb2f, 0px 0px 20px #00cb2f',
      },
    },
  },
  plugins: [],
}