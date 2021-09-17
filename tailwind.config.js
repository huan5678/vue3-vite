const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      bgray: colors.blueGray,
      cgray: colors.coolGray,
      gray: colors.gray,
      tgray: colors.trueGray,
      wgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      funchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
