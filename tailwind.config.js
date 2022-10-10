const themes = require('tailwindcss/defaultTheme');
// plugins
const buttonPlugin = require('./tw_plugins/Button/button.plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    ...themes,
    colors: ({ colors }) => {
      return {
        ...colors,
        primary: {
          DEFAULT: colors.pink['500'],
          hover: colors.pink['600'],
          focus: colors.pink['700'],
          disabled: colors.pink['300'],
          shadow: colors.pink['300'],
          text: colors.white,
        },
        secondary: {
          DEFAULT: colors.emerald['200'],
          hover: colors.emerald['300'],
          focus: colors.emerald['700'],
          disabled: colors.emerald['200'],
        },
        danger: {
          DEFAULT: colors.red['500'],
          hover: colors.red['600'],
          focus: colors.red['700'],
          disabled: colors.red['300'],
          shadow: colors.red['300'],
          text: colors.white,
        },
        warning: {
          DEFAULT: colors.pink['500'],
          hover: colors.pink['600'],
          focus: colors.pink['700'],
          disabled: colors.pink['300'],
          shadow: colors.pink['200'],
          text: colors.white,
        },
        dark: {
          DEFAULT: colors['black'],
          popover: '#2A2D38',
          html: '#22252F',
          shadow: '#00000040',
          layout: '#24272D',
          border: colors.stone['700'],
        },
      };
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10%)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [buttonPlugin],
  presets: [],
};
