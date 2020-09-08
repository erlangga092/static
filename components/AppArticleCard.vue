<template>
	<article>
		<section class="meta px-8 pt-4">
			<div class="meta__title">
				<h1 class="meta__title__teks my-4 text-xl">
				<nuxt-link 
					:to="localePath({ name: 'blog-slug', params: { slug } })"
					class="links"
				>
					{{ title }}
				</nuxt-link>
				</h1>
			</div>
			<div class="meta__summary">
				<p class="my-4 text-md">{{ sliceSummary(summary) }}</p>
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
	overflow: hidden;
	font-family: 'Merriweather sans', sans-serif;

	&:hover {
		box-shadow: 0 2px 0 rgba(54, 45, 89, .15),
			-0.1875rem -0.1875rem 0 0.1875rem #f2b712,
			0 0 0 0.375rem #e1567c;
		border-radius: .375rem;
	}

	> .meta {
		flex-grow: 0;

		&__summary {
			> p {
				font-family: 'Merriweather sans', sans-serif;
			}
		}
	}

	> .img {
		display: flex;
		flex-direction: column;
		clip-path: polygon(-1% 3.49vw, 101% 0%, 101% 101%, -1% 101%);
		flex-grow: 1;
		background-size: cover;
		background-position: 50% 50%;
		outline: none;
	}
}

.links {
	@apply no-underline font-bold;
	color: var(--text-color);
	font-family: 'Bitter', sans-serif;

	&:hover {
		text-decoration: underline;
	}
}
</style>