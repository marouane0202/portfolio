import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 18px 55px rgba(33, 28, 21, 0.10)",
        glow: "0 22px 70px rgba(20, 184, 166, 0.16)"
      },
      colors: {
        ink: "#211c15",
        moss: "#0f766e",
        saffron: "#d97706",
        coral: "#be123c",
        paper: "#faf7ef",
        graphite: "#111316"
      }
    }
  },
  plugins: []
};

export default config;
