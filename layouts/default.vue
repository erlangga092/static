<template>
	<div class="default">
		<div class="default__wrapper">
			<nuxt />
		</div>
	</div>
</template>

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
