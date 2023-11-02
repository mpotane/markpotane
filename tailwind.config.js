const { fontFamily } = require("tailwindcss/defaultTheme");


module.exports = {
  daisyui: {
    themes: ["dark"],
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", ...fontFamily.sans],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};

