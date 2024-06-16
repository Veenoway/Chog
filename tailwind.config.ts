import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      mono: ["var(--font-poppins)"],
      inter: ["var(--font-inter)"],
      jetBrains: "JetBrains Mono",
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      borderWidth: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
        "100": "100px",
      },
      colors: {
        purple: {
          tint: "#3d2487",
          dark: "#200052",
          light: "#836EF9",
          lighter: "#9C8CFA",
        },
        cream: "#EFE7D1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
