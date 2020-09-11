import {
	build,
	modules,
	head,
	pwa,
	feed,
	sitemap
} from './config'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  env: {
  	GOOGLE_ANALYTICS: 'UA-177623519-1',
  	SENTRY_DSN: 'https://e5ed29619a0a498fb539c61a723fea99@o446152.ingest.sentry.io/5424084'
  },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head,
	/*
	 ** Global CSS
	 */
	loading: {
		color: 'var(--text-normal)'
	},
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
		'~/plugins/component.client',
		'~/plugins/components',
		'~/plugins/vue-lazyload'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
	modules,
	feed,
	sitemap,
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  pwa,
  build
}
