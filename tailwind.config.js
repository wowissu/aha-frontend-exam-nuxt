module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9B33'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};