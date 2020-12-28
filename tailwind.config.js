/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class',
  purge: {
    options: {
      safelist: ['lazyLoad', 'isLoaded'],
    },
  },
  theme: {
    extend: {
      padding: {
        22: '5.5rem',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        logo: ['MuseoModerno', 'cursive'],
      },
      textShadow: {
        logo: '7px 7px 0px rgba(249, 168, 212, 0.5);',
      },
      textColor: {
        'pink-dark-logo': 'rgba(252, 231, 243, 0.25)',
      },
      gridAutoRows: {
        0: '0',
      },
      scale: {
        99: '.99',
        98: '.98',
        98.5: '.985',
      },
      spacing: {
        18: '4.5rem',
        26: '6.5rem',
      },
      boxShadow: {
        'md-top':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg-top':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.05);',
      },
      translate: { '-1/25': '-4%' },
      rotate: {
        360: '360deg',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover'],
      opacity: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.filter-logo': {
          filter: 'drop-shadow(3px 3px 0px rgba(249, 168, 212, 0.5))',
        },
        '.filter-logo-dark': {
          filter: 'drop-shadow(3px 3px 0px rgba(252, 231, 243, 0.25))',
        },
      }

      addUtilities(newUtilities, ['responsive', 'dark'])
    }),
  ],
}
