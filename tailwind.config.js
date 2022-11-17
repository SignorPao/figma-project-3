/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Frank Ruhl Libre",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1540px",
    },
    extend: {
      colors: {
        black: "#2B2B2B",
        brown: {
          100: "#FFE8D6",
          200: "#EECDB6",
          300: "#CB997E",
        },
        red: "#C01616",
        yellow: "#FFB168",
      },
      // boxShadow: {
      //   primary: "0px 8px 30px -12px rgba(43, 43, 43, 1)",
      // },
      backgroundImage: {
        header: "url('src/assets/header/headerBG.png')",
        bestseller: "url('src/assets/bestseller/bestsellerBG.png')",
      },
    },
  },
  plugins: [],
};
