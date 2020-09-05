<template>
	<div class="article">
		<article>
			<app-article-card />
		</article>
	</div>
</template>

<script>
import AppArticleCard from '~/components/AppArticleCard'

export default {
	components: {
		AppArticleCard
	}
}
</script>

<style lang="postcss">
.article {
	@apply mt-4 py-4 grid grid-cols-2 gap-8;

	> article {
		@apply col-span-1 rounded shadow overflow-hidden;
		background-color: var(--card-bg);
	}
}
</style>