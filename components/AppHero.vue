<template>
	<main class="hero">
		<div class="hero__img relative flex flex-col items-center justify-center h-96 overflow-hidden bg-indigo-900">	
			<div class="text px-16">
				<h1 class="text-3xl text-white text-center">{{ $t('description') }}</h1>
				<p class="text-white text-xl text-center">{{ $t('quote') }}</p>
			</div>
		</div>
	</main>
</template>

<script>
export default {
}
</script>

<style lang="postcss">
.hero {
	@apply w-full flex flex-col;

	&__img {
		clip-path: polygon(0% 3.77vw, 100% 0%, 100% 100%, 0% 100%);

		> .text {
			@apply absolute;
		}
	}
}
</style>