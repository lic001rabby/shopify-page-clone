/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lime: "#d9dd08",
      pale: "#f5f5ed",
      gray: "#666",
      black: "#000",
      white: "#ffffff",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
