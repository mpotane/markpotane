/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["retro"],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
