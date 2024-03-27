/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: "#A9A9AA",
        dark: "#111214",
        orange: "#FE390C",
        light: "#F7F7F7",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
