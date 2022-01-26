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
          400: '#888888',
          500: '#929292'
        }
      },
      lineHeight: {
        '4.5': '1.125rem'
      }
    }
  },
  plugins: []
};