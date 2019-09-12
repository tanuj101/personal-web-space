module.exports = {
  /*
   ** Headers of the page
   */
  modules: ["@nuxtjs/markdownit", "@nuxtjs/pwa"],
  head: {
    title: "Tanuj's Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msvalidate.01", content: "014B7B34B19895BC9F265732F07E4E31" },
      { name: "Tanuj's Blog" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Cormorant+Unicase|Sofia|Rajdhani"
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  // workbox: {
  //   offlineAnalytics: true,
  //   offlineStrategy: "CacheFirst",
  //   preCaching: ["**/*.{html,js,css,png,jpg,woff,woff2,ttf}"]
  // },
  manifest: {
    name: "Tanuj Nagpal's Blog",
    short_name: "Tanuj's Blog",
    lang: "en"
  },
  build: {
    /*
     ** Run ESLint on save
     */
    /*extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }*/
  },
  plugins: [{ src: "~plugins/ga.js", ssr: false }]
};
