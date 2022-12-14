/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Frank Ruhl Libre",
      secondary: "Lato",
      logo: "Grand Hotel",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "0",
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
      backgroundImage: {
        header: "url('assets/header/headerBG.png')",
        hero: "url('assets/header/heroImg.webp')",
        about: "url('assets/about/about.webp')",
        bestseller: "url('assets/bestseller/bestsellerBG.png')",
        discount: "url('assets/discount/discount.webp')",
      },
    },
  },
  plugins: [],
};
