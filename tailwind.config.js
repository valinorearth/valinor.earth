module.exports = {
  theme: {
    fontFamily: {
      display: ["Noto Serif JP", "serif"],
      body: ["Noto Serif JP", "serif"],
    },
    extend: {
      spacing: {
        "1/1": "100%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
};
