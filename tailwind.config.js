/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#205781",
        secondary: "#0e3a5c",
        field: "#98D2C0",
        form: "#ffffff",
        accent: "orange",
        text: "#dbd9d9",
      },
      fontFamily: {
        sans: ['Montserrat', 'serif'],
      },
    },
  },
  plugins: [],
}