export default {

  // router: {
  //   middleware: 'authenticated'
  // },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'suaagendafacil.com',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css'
      }
    ],
    script: [
      {
        src: 'js/core/jquery.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/perfect-scrollbar.jquery.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/core/popper.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/core/bootstrap-material-design.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/perfect-scrollbar.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/moment.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/jquery.validate.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/bootstrap-selectpicker.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/bootstrap-datetimepicker.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/jquery.dataTables.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/bootstrap-notify.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/core/core.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/perfect-scrollbar.jquery.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/plugins/arrive.min.js',
        type: 'text/javascript',
        body: true
      },
      {
        src: 'js/material-dashboard.js?v=2.1.2',
        type: 'text/javascript',
        body: true
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/material-dashboard.min.css',
    '~/assets/demo/demo.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/default', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/Dashboard/',
        prefix: 'Dashboard'
      },
      {
        path: '~/components/Login/',
        prefix: 'Login'
      },
      {
        path: '~/components/Unidade/',
        prefix: 'Unidade'
      }
    ]
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://sweetalert2.github.io
    'nuxt-sweetalert2'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://3g4lssowp8.execute-api.us-east-1.amazonaws.com/dev',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: {
    color: '#0091ea',
    background: 'white',
    height: '20px',
    continuous: false,
    duration: 500
  }
}
