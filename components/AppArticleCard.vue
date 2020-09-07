<template>
	<article>
		<section class="meta px-8">
			<div class="meta__title">
				<h1 class="meta__title__teks my-4 text-lg">
				<nuxt-link 
					:to="localePath({ name: 'blog-slug', params: { slug } })"
					class="link"
				>
					{{ title }}
				</nuxt-link>
				</h1>
			</div>
			<div class="meta__summary">
				<p class="my-4 text-base">{{ sliceSummary(summary) }}</p>
			</div>
		</section>
		<section class="img w-full h-full overflow-hidden">
			<app-img :src="img" :alt="title" />
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
	},
	computed: {
		sliceSummary() {
			return (val) => {
				let i = val.split(' ');
				if (parseInt(i.length) > 14) {
					return `${i.slice(0,15).join(' ').toString()}...`;
				} else {
					return val;
				}
			}
		}
	}
}
</script>

<style lang="postcss">
article {
	@apply shadow;
	display: flex;
	flex-direction: column;
	background-color: var(--card-bg);
	border-radius: .375rem;
	height: 25rem;
	overflow: hidden;

	&:hover {
		box-shadow: 0 2px 0 rgba(54, 45, 89, .15),
			-0.1875rem -0.1875rem 0 0.1875rem #f2b712,
			0 0 0 0.375rem #e1567c;
		border-radius: .375rem;
	}

	> .meta {
		flex-grow: 0;
	}

	> .img {
		display: flex;
		flex-direction: column;
		align-items: end;
		clip-path: polygon(-1% 3.49vw, 101% 0%, 101% 101%, -1% 101%);
		flex-grow: 1;
		background-size: cover;
		object-fit: cover;
		background-position: 50% 50%;
		outline: none;
	}
}

.link {
	@apply no-underline;
	color: var(--text-color);

	&:hover {
		text-decoration: underline;
	}
}
</style>