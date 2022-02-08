import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  build: {
    hotMiddleware: {
      client: {
        quiet: true,
        autoConnect: false
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  meta: {
    link: [{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,700' }]
  },
  buildModules: [
    // '@nuxtjs/device',
    '@pinia/nuxt'
  ],
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
});