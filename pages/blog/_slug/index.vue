<template>
	<div id="blog">
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
		<client-only>
			<vue-scroll-indicator 
				height="2px"
				color="var(--text-normal)"
				background="var(--bg)"
			/>
		</client-only>
		<app-to-top />
		<div class="switch__lang__slug">
			<app-switch-lang />
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import readingTime from 'reading-time';
import { isExists } from '~/utils';
import { formatDate } from '~/mixins';

import AppHeader from '~/components/AppHeader';
import AppToTop from '~/components/AppToTop';
import AppSwitchLang from '~/components/AppSwitchLang';
import { HOSTNAME } from '~/constant';

const Cookie = process.client ? require('js-cookie') : undefined;

export default {
	mixins: [formatDate],
	component: {
		AppHeader,
		AppToTop,
		AppSwitchLang
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

			if (isExists(blog)) {		
				if (
					isExists(blog.attributes.extraComponents) &&
					Array.isArray(blog.attributes.extraComponents) &&
					blog.attributes.extraComponents.length > 0
				) {
					blog.attributes.extraComponents.forEach((component) => {
						Vue.component(
							component,
							require(`~/components/contents/blogs/${blog.attributes.slug}/${component}`).default
						)
					})
				}
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
		this.initColorScheme();
		const hash = window.location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			element.toScrollIntoView({ behavior: 'smooth' });
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
      title: this.blog && this.blog.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.blog && this.blog.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${HOSTNAME}${
            this.blog && require(`~/assets/images${this.blog.img}`)
          }`
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1920'
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '1280'
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.blog && this.blog.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.blog && this.blog.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.blog && this.blog.description
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'blogPosting',
            headline: this.blog && this.blog.title,
            description: this.blog && this.blog.description,
            datePublished: this.blog && this.blog.postedDate,
            dateCreated: this.blog && this.blog.postedDate,
            dateModified: this.blog && this.blog.updatedDate,
            wordcount: this.blog && this.blog.readingTime.words,
            articleBody: this.blog && this.blog.content,
            image: {
              '@type': 'imageObject',
              url: `${HOSTNAME}${
                this.blog && require(`~/assets/images${this.blog.img}`)
              }`,
              height: '1920',
              width: '1080'
            },
            publisher: {
              '@type': 'Organization',
              name: 'Erlangga',
              sameAs: 'https://www.facebook.com/nggacox',
              logo: {
                '@type': 'imageObject',
                url: `${HOSTNAME}/icon.png`,
                width: '2739',
                height: '3102'
              }
            },
            author: {
              '@type': 'Person',
              name: 'Erlangga'
            }
          })
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
#blog {
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
			@apply mb-12 px-16 pb-16 rounded-md overflow-hidden shadow-xl z-10;
			background-color: var(--card-bg);
			width: 75%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: -17rem;
			box-sizing: border-box;
			position: relative;

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
				padding-right: 2rem;
				padding-left: 2rem;
				width: 90%;
				box-sizing: border-box;
			}

			&__meta {
				width: 100%;
				
				> h1 {
					font-family: 'Bitter', serif;
					@media screen and (max-width: 576px) {
						margin-top: 2rem;
					}
				}
			}

			> h1, h2, h3, h4, h5, h6 {
				font-family: 'Bitter', serif;
			}
		}
	}

	> .switch__lang__slug {
		display: none;

		@media screen and (max-width: 976px) {
			display: block;
		}
	}
}

.dynamic-markdown {
	width: 100%;
	box-sizing: border-box;
}

table {
	border: 1px solid var(--text-disabled);
	box-sizing: border-box;
	> thead {
		display: table-header-group;
		vertical-align: middle;
		border-color: inherit;
		box-sizing: border-box;
		> tr > th {
			box-sizing: border-box;
			padding: .8rem;
			border: 1px solid var(--text-disabled);
		}
	}
	tbody {
		display: table-row-group;
		vertical-align: middle;
		border-color: inherit;
		box-sizing: border-box;
		> tr > td {
			box-sizing: border-box;
			padding: .75rem;
			border: 1px solid var(--text-disabled);
		}
	}
}

.table__account {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2rem;
	@media screen and (max-width: 978px) {
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}
	.table-1,
	.table-2 {
		width: 100%;
		display: flex;
		justify-content: center;
		table {
			width: 100%;
		}
	}
}

.table__rumus {
	table {
		@media screen and (max-width: 576px) {
			font-size: .95rem;
		}
	}
}

.table__ledger {
	@media screen and (max-width: 992px) {
		grid-template-columns: 1fr !important;
		box-sizing: border-box;
	}
}
</style>