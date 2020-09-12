<template>
	<div class="default">
		<div class="default__header">
			<app-header v-model="isDark" />
		</div>
		<div class="default__wrapper">
			<nuxt />
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';

const Cookie = process.client ? require('js-cookie') : undefined;

export default {
	data() {
		return {
			isDark: false
		}
	},
	components: {
		AppHeader
	},
	mounted() {
		this.initColorScheme();
	},
	methods: {
		initColorScheme() {
			const isDark = Cookie.get('d');
			if (isDark) {
				if (parseInt(isDark)) {
					this.isDark = true;
				}
			} else if (
				window.matchMedia('(prefers-color-scheme)').media !== 'not all'
			) {
				const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				if (darkModeMediaQuery.matches) {
					this.isDark = true;
				}
				darkModeMediaQuery.addListener(e => {
					const darkModeOn = e.matches;
					this.isDark = darkModeOn;
				})
			}
		}
	},
	head() {
		const i18nSeo = this.$nuxtI18nSeo();
		return {
			title: this.$t('description'),
			bodyAttrs: {
				class: this.isDark ? 'dark' : 'light'
			},
			...i18nSeo
		}
	}
}
</script>

<style lang="postcss">
.default {
	display: flex;
	justify-content: center; 
	align-items: center;
	flex-direction: column;
	
	&__header {
		@apply top-0 left-0 fixed z-30;
		width: 100%;
	}

	> .wrapper {
		width: 100%;
		box-sizing: border-box;
	}
}
</style>
