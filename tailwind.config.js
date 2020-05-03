const { colors } = require("tailwindcss/defaultTheme");
const brandColors = require("./tailwind.colors.js");

module.exports = {
  purge: ["./src/**/*.njk", "./src/**/*.html", "./src/**/*.md"],
  theme: {
    fontFamily: {
      display: ["Noto Serif JP", "serif"],
      body: ["Noto Serif JP", "serif"],
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      ...brandColors,
    },
    extend: {
      spacing: {
        "1/1": "100%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "4/3": "75%",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
};
