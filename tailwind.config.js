/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Frank Ruhl Libre",
      secondary: "Lato",
      logo: "Grand Hotel",
      // b: "Great Vibes",
      // c: "Imperial Script",
      // d: "Mea Culpa",
      // e: "MonteCarlo",
      // f: "Niconne",
      // g: "Pinyon Script",
      // h: "Rochester",
      // i: "Sacramento",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        // lg: "0",
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
        transparent: "transparent",
      },
      // boxShadow: {
      //   primary: "0px 8px 30px -12px rgba(43, 43, 43, 1)",
      // },
      backgroundImage: {
        header: "url('assets/header/headerBG.png')",
        hero: "url('assets/header/heroImg.webp')",
        about: "url('assets/about/about.webp')",
        bestseller: "url('assets/bestseller/bestsellerBG.png')",
      },
    },
  },
  plugins: [],
};
