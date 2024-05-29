/** @type {import('tailwindcss').Config} */

/** Wrapper constant for Material Tailwind components */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creme: "#fafafc",
        primary: "#092635",
        secondary: "#1B4242",
        gray: "#E0E0E0",
      },
    },
  },
});
