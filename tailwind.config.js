/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{html,ts}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#3B2F85",
        secondary: "#FCE736",
        grey: "#E3E3E3",
        // semiGrey: "#5E6282",
        oldGrey:"#353535",
        heavyGrey: "#212832",
        lightGrey: "#f1f1f1",
        darkSecondary: "#FBB800",
        semiBlue: "#5E6282",
        lightBlue: "#0ECEFF",
        blue: "#253776",

      },
      iconSpacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
      },
      fontFamily: {
        Frutiger: ["Kefa"],
        Volkhov: ["Volkhov", 'serif']
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-rtl"), require('flowbite/plugin')],
}

