<template>
	<div class="default">
		<div class="default__wrapper">
			<Nuxt />
		</div>
	</div>
</template>

<style lang="postcss">
.default {
	display: flex;
	justify-content: center; 
	align-items: center;

	> .wrapper {
		width: 100%;
		box-sizing: border-box;
		position: relative;	
	}
}
</style>
