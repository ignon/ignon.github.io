const defaultTheme = require("tailwindcss/defaultTheme");
const { colors: defaultColors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "firago": ["FiraGO", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultColors,
        gray: {
          "150": "hsl(210, 44%, 97%)",
          "250": "hsl(210, 40%, 93.5%)",
          "550": "hsl(0, 20%, 63%)",
          "650": "hsl(216, 15%, 48%)",
          "750": "hsl(214, 17%, 32%)",
          ...defaultTheme.colors.gray
        },
        link: "#fbf3f3"
      },
      fontSize: {
        sm: "0.9375rem", // 15px label
        base: "1rem", // 16px base
        md: "1.0625rem", // 17px body
        lg: "1.125rem", // 18px heading
      },
    },
  },
  plugins: [],
}

