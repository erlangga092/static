<template>
	<main class="hero">
		<div class="hero__title">
			<h1 class="text-2xl font-bold my-4">{{ $t('description') }}</h1>
		</div>
		<div class="hero__desc flex flex-wrap text-center">
			<p>Sedikit tempat untuk menuliskan apa yang dirasakan penulis, serta beberapa informasi terkait ilmu yang penulis pelajari. <b>Enjoy to read!</b></p>
		</div>
	</main>
</template>

<style lang="postcss">
.hero {
	@apply w-full flex flex-col items-center justify-center px-8 py-4 my-2;
	background-color: var(--card-bg);
}
</style>