const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [`_site/**/*.html`],
  theme: {
    extend: {
      // https://tailwindcolorgenerator.com
      colors: {
        ve: {
          'earth': '#cc7722',
          'water': '#0e78be',
          'fire':  '#f0b81a',
          'wind':  '#cfdff6',
          'void':  '#f3ebde',
        },
        earth: {
           50: '#fea954',
          100: '#f49f4a',
          200: '#ea9540',
          300: '#e08b36',
          400: '#d6812c',
          500: '#cc7722', //earth
          600: '#c26d18',
          700: '#b8630e',
          800: '#ae5904',
          900: '#a44f00'
        },
        water: {
           50: '#40aaf0',
          100: '#36a0e6',
          200: '#2c96dc',
          300: '#228cd2',
          400: '#1882c8',
          500: '#0e78be', //water}
          600: '#046eb4',
          700: '#0064aa',
          800: '#005aa0',
          900: '#005096',
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
