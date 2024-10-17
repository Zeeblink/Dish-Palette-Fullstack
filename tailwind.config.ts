import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#16A34A', // dark green
        secondary: "#f5faf7", // light green
        gray2: '#f3f4f6',
      }
    },
  },
  plugins: [],
};
export default config;
