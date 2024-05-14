/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      fontWeight: {
        300: ['300'],
        400: ['400'],
        500: ['500']
      }
    },
  },
  plugins: [],
}

