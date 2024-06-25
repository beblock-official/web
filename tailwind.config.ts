import type { Config } from "tailwindcss";

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
    },
    colors: {
      primary: "#6C4BEE",
      "primary-light": "#E7E1FF",
      white: "#FFFFFF",
      "text-001": "#333333",
      "text-002": "#454545",
      "text-003": "#888888",
      "text-004": "#AFAFAF",
      transparent: "transparent",
      current: "currentColor",
    },
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
