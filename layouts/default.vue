<template>
	<div class="default">
		<div class="default__header">
			<app-header />
		</div>
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
		top: 0;
		position: fixed;
		width: 100%;
	}

	> .wrapper {
		width: 100%;
		box-sizing: border-box;
	}
}
</style>
