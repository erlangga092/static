require('dotenv').config()
import { HOSTNAME } from '../constant';
import i18n from '../locales/config';

export default [
	'@nuxtjs/pwa',
	'@nuxtjs/sitemap',
	['nuxt-i18n', i18n],
	[
		'nuxt-responsive-loader', {
			size: 1920,
			placeholder: true,
			quality: 60,
			adapter: require('responsive-loader/sharp')
		}
	],
	[
		'@nuxtjs/sentry', 
		{
			dsn: process.env.SENTRY_DSN,
			sourceMapStyle: 'hidden-source-map'
		}
	],
	[
		'@nuxtjs/google-analytics',
		{
			id: 'UA-177623519-1'
		}
	],
	[
		'@nuxtjs/robots',
		{
			Sitemap: `${HOSTNAME}/sitemap.xml`
		}
	]
]