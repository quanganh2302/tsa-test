/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        global: "#fafafa",
        primary: "#ce1628",
        secondary: "#db3b46",

      },
      boxShadow :{
        button : "0 2px 0 rgba(0, 0, 0, 0.045)"
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        authForm: "#252b2f",
      },
    },
    screens: {
      ss: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
    },
  },
  important: true,
  plugins: [],
};
