import { text } from "stream/consumers";
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        display: "Roboto", // Adds a new `font-display` class
      },
      colors: {
        gray: {
          "100": "#F2F2F2",
          "200": "#D9D9D9",
          "300": "#C8C8C8",
          "400": "#969696",
          "500": "#727272",
          "600": "#333333",
          "700": "#2A2A2A",
        },
      },
    },
  },
  plugins: [daisyui],
};
export default config;
