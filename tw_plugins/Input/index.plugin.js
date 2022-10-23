const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions((options = {}) => {
  return ({ addComponents }) => {
    addComponents({
      '.input': {},
    });
  };
});
