export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  loading: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tastyfare',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: 'this is a test' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue2-touch-events'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/google-fonts-module
    '@nuxtjs/google-fonts',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    ['nuxt-lazy-load', { native: true }],
    [
      'nuxt-vuex-localstorage',
      {
        localStorage: ['dark', 'bag'],
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    fullTextSearchFields: ['name', 'other-names'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    splitChunks: {
      layouts: true,
    },
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
    },
  },

  // Google Fonts
  googleFonts: {
    families: {
      Nunito: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      MuseoModerno: {
        wght: [500],
      },
    },
    display: 'swap',
  },

  pwa: {
    meta: {
      nativeUI: true,
      appleStatusBarStyle: 'black-translucent',
    },
    manifest: {
      theme_color: '#f3f4f6',
      background_color: '#f3f4f6',
    },
  },
}
