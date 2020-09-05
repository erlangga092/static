<template>
	<article>
		<section class="img w-full overflow-hidden">
			<app-img :src="img" :alt="title" />
		</section>
		<section class="meta px-8">
			<div class="meta__title">
				<h1 class="my-4 text-xl">{{ title }}</h1>
			</div>
			<div class="meta__summary">
				<p class="my-4">{{ summary }}</p>
			</div>
			<div class="meta__date">
				<p class="my-4">{{ formatDate(postedDate) }}</p>
			</div>
		</section>
	</article>
</template>

<script>
import { formatDate } from '~/mixins';

export default {
	mixins: [formatDate],
	props: {
		img: {
			type: String,
			default: ''
		},
		title: {
			type: String,
			default: ''
		},
		summary: {
			type: String,
			default: ''
		},
		postedDate: {
			type: String,
			default: ''
		},
		updatedDate: {
			type: String,
			default: ''
		},
		readingTime: {
			type: Object,
			default() {
				return null
			}
		},
		slug: {
			type: String,
			required: true
		}
	}
}
</script>

<style lang="postcss">
article {
	background-color: var(--card-bg);
}
</style>