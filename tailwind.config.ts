import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gameweek-gradient": "linear-gradient(to right, #00FF87, #02EFFF)",
        "field-gradient":
          "linear-gradient(to right, rgb(2, 239, 255, 0.8), rgb(98, 123, 255, 0.9))",
        "field-image": "url('/images/squad-pitch.svg')",
        "field-bench-image": "url('/images/substitution-background.svg')",
      },
      backgroundColor: {
        primary: "#270060",
        hover: "#4F4FB7",
        active: "#8F8FF7",
      },
    },
  },
  plugins: [],
};
export default config;
