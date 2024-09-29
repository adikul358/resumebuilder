/** @type {import('tailwindcss').Config} */
export default {
  content: ["*/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        serif: ["Lora", "serif"]
      },
      colors: {
        primary: "#4A95E0",
        secondary: "#43d0b8"
      }
    },
  },
  plugins: [],
}

