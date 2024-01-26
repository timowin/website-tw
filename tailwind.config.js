/** @type {import('tailwindcss').Config} */

/** Wrapper constant for Material Tailwind components */

const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#092635",
        secondary: "#1B4242",
      },
    },
  },
});
