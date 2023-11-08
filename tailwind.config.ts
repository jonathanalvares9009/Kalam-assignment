/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
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
      screens: {
        xs: "400px",
        laptop: "1400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
      colors: {
        blue: {
          50: "#f4fafe",
          100: "#0d0c22",
          200: "#1da1f2",
        },
        gray: {
          50: "#e7e7e9",
          10: "#6e6d7a",
          100: "#f3f3f4",
        },
        yellow: {
          50: "rgba(255,218,121,0.5)",
        },
        pink: {
          50: "#f8e6e8",
        },
      },
      width: {
        "47": "47%",
      },
      inset: {
        "negative-40": "-40px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
});
