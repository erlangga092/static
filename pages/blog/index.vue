<template>
	<div>
		<div class="top__header__blog">
			<app-header />
		</div>
		<div class="mt-32">
			<h5 class="title">Blog</h5>
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
		return {
			title: 'Blog'
		}
	}
}
</script>

<style lang="postcss">
.top__header__blog {
	@apply fixed w-full left-0 top-0 z-20;
}

.title {
	color: var(--text-link);
}
</style>