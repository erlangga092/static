<template>
	<div class="home">
		<app-header />
		<app-hero />
		<div class="article">
			<app-article-card 
				class="article__card hover:shadow-lg"
				v-for="blog in blogs"
				:key="blog.id"
				:img="blog.img"
				:title="blog.title"
				:summary="blog.summary"
				:posted-date="blog.postedDate"
				:updated-date="blog.updatedDate"
				:readingTime="blog.readingTime"
				:slug="blog.slug"
			/>
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppHero from '~/components/AppHero';
import AppArticleCard from '~/components/AppArticleCard';
import slugs from '~/contents/blogs';
import readingTime from 'reading-time';

export default {
	components: {
		AppHeader,
		AppHero,
		AppArticleCard
	},
	async asyncData({ app, redirect }) {
		const { locale, defaultLocale } = app.i18n;

		async function asyncImport(slug) {
			let blog = null;
			if (locale === defaultLocale) {
				blog = await import(`~/contents/blogs/${slug}/index.md`);
				return {
					...blog.attributes,
					readingTime: readingTime(blog.html)
				}
			}
			blog = await import(`~/contents/blogs/${slug}/index.${locale}.md`);
			return {
				...blog.attributes,
				readingTime: readingTime(blog.html)
			}
		}

		const blogs = await Promise.all(slugs.map(slug => asyncImport(slug)));
		return {
			blogs
		}
	},
	data() {
		return {
			blogs: []
		}
	}
}
</script>

<style lang="postcss">
.home {
	margin-top: 7rem;
}

.article {
	@apply mt-4 py-4 grid grid-cols-2 gap-8;

	> &__card {
		@apply col-span-1 rounded shadow overflow-hidden;
		background-color: var(--card-bg);
	}
}
</style>
