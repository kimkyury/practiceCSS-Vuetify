module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'testnuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto: 300, 400, 500, 700|Material+Icons'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  plugins: ['~plugins/vuetify.js'],

  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'vuetify'],
    }
  }

