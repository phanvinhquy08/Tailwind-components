const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions((options = {}) => {
  return ({ addComponents }) => {
    const { size } = options || {};
    const {
      large = 'h-12 px-6 text-sm',
      base = 'h-10 px-5 text-sm',
      small = 'h-8 px-4 text-xs',
    } = size || {};

    addComponents({
      '.btn': {
        // base button style
        '@apply inline-flex focus-visible:outline-none items-center justify-center space-x-2 font-medium tracking-wide transition duration-300 whitespace-nowrap disabled:shadow-none disabled:cursor-not-allowed':
          {},
      },
      // size
      '.btn-small': {
        [`@apply ${small}`]: {},
      },
      '.btn-base': {
        [`@apply ${base}`]: {},
      },
      '.btn-large': {
        [`@apply ${large}`]: {},
      },
      // primary
      '.btn-primary': {
        // text
        '@apply text-primary-text': {},
        // background
        '@apply bg-primary': {},
        // hover
        '@apply hover:bg-primary-hover': {},
        // focus
        '@apply focus:bg-primary-focus': {},
        // disabled
        '@apply disabled:border-primary-disabled disabled:bg-primary-disabled':
          {},
        // danger
        '&.danger': {
          // text
          '@apply text-danger-text': {},
          // background
          '@apply bg-danger': {},
          // hover
          '@apply hover:bg-danger-hover': {},
          // focus
          '@apply focus:bg-danger-focus': {},
          //  disabled
          '@apply disabled:border-danger-disabled disabled:bg-danger-disabled':
            {},
        },
      },
      // outline
      '.btn-outline': {
        // text
        '@apply text-primary': {},
        // hover
        '@apply hover:border-primary-hover hover:text-primary-hover': {},
        // focus
        '@apply focus:border-primary-focus focus:text-primary-focus': {},
        // disable
        '@apply disabled:border-primary-disabled disabled:text-primary-disabled':
          {},
        // border
        '@apply border border-primary': {},
        // danger
        '&.danger': {
          // text
          '@apply text-danger': {},
          // hover
          '@apply hover:border-danger-hover hover:text-danger-hover': {},
          // focus
          '@apply focus:border-danger-focus focus:text-danger-focus': {},
          // disabled
          '@apply disabled:border-danger-disabled disabled:text-danger-disabled':
            {},
          //  border
          '@apply border-danger': {},
        },
      },
      // default
      '.btn-default': {
        // text
        '@apply text-gray-500': {},
        // hover
        '@apply hover:border-primary-hover hover:text-primary-hover': {},
        // focus
        '@apply focus:border-primary-focus focus:text-primary-focus': {},
        // disable
        '@apply disabled:border-gray-200 disabled:text-gray-300': {},
        // border
        '@apply border border-gray-400': {},
        // danger
        '&.danger': {
          // hover
          '@apply hover:border-danger-hover hover:text-danger-hover': {},
          // focus
          '@apply focus:border-danger-focus focus:text-danger-focus': {},
          // disabled
          '@apply disabled:border-gray-200 disabled:text-gray-300': {},
        },
      }, // link
      '.btn-link': {
        // text
        '@apply text-primary': {},
        // hover
        '@apply hover:border-primary-hover hover:text-primary-hover': {},
        // focus
        '@apply focus:border-primary-focus focus:text-primary-focus': {},
        // disable
        '&[aria-disabled="true"]': {
          '@apply text-primary-disabled cursor-not-allowed': {},
        },
        // danger
        '&.danger': {
          '@apply text-danger': {},
          // hover
          '@apply hover:text-danger-hover': {},
          // focus
          '@apply focus:text-danger-focus': {},
          // disabled
          '&[aria-disabled="true"]': {
            '@apply text-danger-disabled cursor-not-allowed': {},
          },
        },
      },
    });
  };
});
