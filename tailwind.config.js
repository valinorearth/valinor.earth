const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      // https://tailwindcolorgenerator.com
      colors: {
        'earth': '#cc7722',
        'water': '#0e78be',
        'fire':  '#f0b81a',
        'wind':  '#cfdff6',
        'void':  '#f3ebde',
        "earth": {
          "50": "#fea954",
          "100": "#f49f4a",
          "200": "#ea9540",
          "300": "#e08b36",
          "400": "#d6812c",
          "500": "#cc7722",
          "600": "#c26d18",
          "700": "#b8630e",
          "800": "#ae5904",
          "900": "#a44f00"
        },
        "water": {
          "50": "#40aaf0",
          "100": "#36a0e6",
          "200": "#2c96dc",
          "300": "#228cd2",
          "400": "#1882c8",
          "500": "#0e78be",
          "600": "#046eb4",
          "700": "#0064aa",
          "800": "#005aa0",
          "900": "#005096"
        },
        "fire": {
          "50": "#ffea4c",
          "100": "#ffe042",
          "200": "#ffd638",
          "300": "#ffcc2e",
          "400": "#fac224",
          "500": "#f0b81a",
          "600": "#e6ae10",
          "700": "#dca406",
          "800": "#d29a00",
          "900": "#c89000"
        },
        "wind": {
          "50": "#ffffff",
          "100": "#f7ffff",
          "200": "#edfdff",
          "300": "#e3f3ff",
          "400": "#d9e9ff",
          "500": "#cfdff6",
          "600": "#c5d5ec",
          "700": "#bbcbe2",
          "800": "#b1c1d8",
          "900": "#a7b7ce"
        },
        "void": {
          "50": "#ffffff",
          "100": "#ffffff",
          "200": "#fffffc",
          "300": "#fffff2",
          "400": "#fdf5e8",
          "500": "#f3ebde",
          "600": "#e9e1d4",
          "700": "#dfd7ca",
          "800": "#d5cdc0",
          "900": "#cbc3b6"
        },
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
