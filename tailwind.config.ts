import { fontFamily } from "tailwindcss/defaultTheme"
import type { Config } from 'tailwindcss'

export default {
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
      sans: ["var(--font-inter)", ...fontFamily.sans],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
} satisfies Config

