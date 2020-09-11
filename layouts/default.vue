<template>
	<div class="default">
		<div class="default__wrapper">
			<nuxt />
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';

export default {
	components: {
		AppHeader
	},
	head() {
		const i18nSeo = this.$nuxtI18nSeo();
		return {
			title: this.$t('description'),
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

	> .wrapper {
		width: 100%;
		box-sizing: border-box;
	}
}
</style>
