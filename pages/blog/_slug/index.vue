<template>
	<div v-if="blog !== null && typeof blog !== 'undefined'">
		<section class="blog">
			<app-img :src="blog.img" alt="title" />
			<h1>{{ formatDate(blog.postedDate) }}</h1>
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
@apply mb-12 px-12 rounded overflow-hidden shadow relative;
  background-color: var(--card-bg);

  .image-placeholder {
    @apply mb-8;
  }

  img {
    @apply w-full h-auto;
  }

  &__translations {
    @apply leading-normal mb-8 py-3 px-4 rounded-lg border;
    background-color: var(--inline-code-bg);
    border-color: var(--inline-code-border);
    color: var(--inline-code-text);

    a:not(:last-child) {
      @apply mr-3;
    }
  }

  &__content {
    @apply p-6;
  }

  &__meta {
    @apply mb-8;
  }

  &__title {
    @apply font-bold text-2xl mt-0 mb-4;
  }

  &__date {
    @apply leading-normal mb-4 text-base;
  }

  &__link {
    @apply absolute top-0 left-0 w-full h-full overflow-hidden z-0;
    text-indent: -9999px;
  }
}
</style>