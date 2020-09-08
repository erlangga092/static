<template>
	<div v-if="blog !== null && typeof blog !== 'undefined'" class="blog">
		<section class="img">
			<app-img :src="blog.img" alt="title" />
		</section>
		<section class="blog__wrap">
			<h1 class="date">{{ formatDate(blog.postedDate) }}</h1>
			<h1>{{ formatDate(blog.updatedDate) }}</h1>
			<h1>{{ blog.readingTime.text }}</h1>
			<component :is="blog.component" />
		</section>
	</div>
</template>

<script>
import readingTime from 'reading-time';
import { isExist } from '~/utils';
import { formatDate } from '~/mixins';

export default {
	mixins: [formatDate],
	data() {
		return {
			blog: null
		}
	},
	created() {
		const slug = this.$route && this.$route.params && this.$route.params.slug;
		const locale = this.$i18n.locale;
		const defaultLocale = this.$i18n.defaultLocale;
		let blog = null;
		try {
			if (locale === defaultLocale) {
				blog = require(`~/contents/blogs/${slug}/index.md`);
			} else {
				blog = require(`~/contents/blogs/${slug}/index.${locale}.md`);
			}
			console.log(blog.attributes)

			this.blog = {
				img: blog.attributes.img,
				title: blog.attributes.title,
				description: blog.attributes.description,
				postedDate: blog.attributes.postedDate,
				updatedDate: blog.attributes.updatedDate,
				slug: blog.attributes.slug,
				readingTime: readingTime(blog.html),
				component: blog.vue.component,
			}
		} catch (err) {
			this.$router.replace(this.localePath({ name: 'blog' }));
		}
	},
	mounted() {
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			element.toScrollIntoView({});
		}
	}
}
</script>

<style lang="postcss">
.blog {
	margin-top: -5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Merriweather sans', sans-serif;

	> .img {
		@apply w-screen overflow-hidden;
		height: 42rem;

		> img {
			@apply w-screen object-cover;
		}
	}

	&__wrap {
		@apply mb-12 px-16 rounded-md overflow-hidden shadow-xl;
		background-color: var(--card-bg);
		width: 75%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: -17rem;

		> h1, h2, h3, h4, h5, h6 {
			font-family: 'Bitter', serif;
		}
	}
}
</style>