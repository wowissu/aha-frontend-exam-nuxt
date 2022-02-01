module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}'
    // './nuxt.config.{js,ts}'
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px'
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9B33'
        },
        disable: '#8A8A8F',
        greyscale: {
          'bg-light': '#1B1B1B',
          50: '#1f1f1f',
          100: '#1B1B1B',
          200: '#181818',
          300: '#121212',
          400: '#B2B2B2',
          500: '#929292'
        },
        secondary: {
          notify: '#00D1FF'
        }
      },
      lineHeight: {
        '4.5': '1.125rem'
      }
    }
  },
  plugins: []
};