import { HOSTNAME } from '../constant'

export default {
  // https://pwa.nuxtjs.org/modules/meta.html
  meta: {
    name: 'ERL_Angga',
    description: 'A personal site of Erlangga',
    lang: 'id',
    ogHost: `${HOSTNAME}`,
    twitterCard: 'summary_large_image',
    twitterSite: '@erlangga',
    twitterCreator: '@erlangga'
  },

  // https://pwa.nuxtjs.org/modules/manifest.html
  manifest: {
    name: 'ERL_Angga',
    short_name: 'ERL_Angga',
    start_url: '/?utm_source=homescreen',
    description: 'A personal site of Erlangga',
    lang: 'id',
    background_color: '#2D3748',
    theme_color: '#2D3748'
  },

  // https://pwa.nuxtjs.org/modules/workbox.html
  workbox: {
    offlineAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: 'https://ajax.cloudflare.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://d33wubrfki0l68.cloudfront.net/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://www.google.com/.*',
        handler: 'staleWhileRevalidate'
      },
      {
        urlPattern: 'https://www.gstatic.com/.*',
        handler: 'staleWhileRevalidate'
      }
    ]
  }
}
