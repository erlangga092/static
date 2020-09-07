<template>
	<main class="hero">
		<div class="hero__img">	
			<div class="text px-16">
				<h1 class="text-3xl text-white text-center">{{ $t('description') }}</h1>
				<p class="text-white text-xl text-center">{{ $t('quote') }}</p>
			</div>
		</div>
	</main>
</template>

<style lang="postcss">
.hero {
	width: 100%;
	display: flex;
	flex-direction: column;

	&__img {
		@apply h-96 overflow-hidden bg-indigo-900;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		clip-path: polygon(0% 3.77vw, 100% 0%, 100% 100%, 0% 100%);

		> .text {
			position: absolute;
		}
	}
}
</style>