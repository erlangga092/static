import i18n from '../locales/config';

export default [
	['nuxt-i18n', i18n],
	[
		'nuxt-responsive-loader', {
			size: 1920,
			placeholder: true,
			quality: 60,
			adapter: require('responsive-loader/sharp')
		}
	]
]