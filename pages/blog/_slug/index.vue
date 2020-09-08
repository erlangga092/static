<template>
	<div class="post">
		<aside class="nav">
			<app-header />
		</aside>
		<div v-if="blog !== null && typeof blog !== 'undefined'" class="blog">
			<section class="img">
				<app-img :src="blog.img" alt="title" />
			</section>
			<section class="blog__wrap">
				<div class="blog__wrap__meta">
					<h1 class="text-2xl">{{ blog.title }}</h1>
				</div>
				<component :is="blog.component" />
			</section>
		</div>
	</div>
</template>

<script>
import readingTime from 'reading-time';
import { isExist } from '~/utils';
import { formatDate } from '~/mixins';

import AppHeader from '~/components/AppHeader';

const Cookie = process.client ? require('js-cookie') : undefined;

export default {
	mixins: [formatDate],
	component: {
		AppHeader
	},
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
		this.initColorScheme()
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			element.toScrollIntoView({});
		}
	},
	methods: {
		initColorScheme() {
			const isDark = Cookie.get('d');
			if (isDark) {
				if (parseInt(isDark)) {
					this.isDark = true;
				}
			} else if (
				window.matchMedia('(prefers-color-scheme)').media !== 'not all'
			) {
				const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				if (darkModeMediaQuery.matches) {
					this.isDark = true;
				}
				darkModeMediaQuery.addListener(e => {
					const darkModeOn = e.matches;
					this.isDark = darkModeOn;
				})
			}
		}
	},
	head() {
		return {
			bodyAttrs: {
				class: this.isDark ? 'dark' : 'light'
			}
		}
	}
}
</script>

<style lang="postcss">
.post {
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 100%;

	.nav {
		@apply z-30;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
	}

	.blog {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-family: 'Merriweather sans', sans-serif;

		> .img {
			@apply w-screen overflow-hidden;
			margin-top: -5rem;
			height: 42rem;
			border-bottom: transparent;

			@media screen and (max-width: 576px) {
				margin-top: 3rem;
			}

			> img {
				@apply w-screen object-cover;
			}
		}

		&__wrap {
			@apply mb-12 px-16 rounded-md overflow-hidden shadow-xl z-10;
			background-color: var(--card-bg);
			width: 75%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: -17rem;

			@media screen and (max-width: 992px) {
				width: 85%;
				margin-top: -21rem;
			}

			@media screen and (max-width: 768px) {
				width: 90%;
				margin-top: -24rem;
				padding-right: 2.75rem;
				padding-left: 2.75rem;
			}

			@media screen and (max-width: 576px) {
				margin-top: -31.5rem;
				padding-right: 2.5rem;
				padding-left: 2.5rem;
			}

			&__meta {
				width: 100%;
				
				> h1 {
					font-family: 'Bitter', serif;
				}
			}

			> h1, h2, h3, h4, h5, h6 {
				font-family: 'Bitter', serif;
			}
		}
	}
}
</style>