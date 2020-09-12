<template>
	<div>
		<div class="top__navbar__article">
			<app-header />
		</div>
		<div v-if="blog !== null && typeof blog !== 'undefined'" id="blog">
			<div class="header">
				<div class="header__img">
					<app-img :src="blog.img" :alt="blog.title" />
				</div>
			</div>
			<div class="blog">
				<div class="blog__content">
					<main>
						<article>
							<div class="blog__meta">
								<div class="blog__meta__title">
									<h1>{{ blog.title }}</h1>
								</div>
							</div>
							<div class="blog__article">
								<component :is="blog.component" />
							</div>
						</article>
					</main>
				</div>
			</div>
			<client-only>
	      <vue-scroll-indicator
	        height="2px"
	        color="var(--text-normal)"
	        background="var(--bg)"
	      />
	    </client-only>
	    <app-to-top />
	    <app-switch-lang />
		</div>
	</div>
</template>

<script>
import readingTime from 'reading-time';
import { isExist } from '~/utils';
import { formatDate } from '~/mixins';

import AppHeader from '~/components/AppHeader';
import AppToTop from '~/components/AppToTop';
import AppSwitchLang from '~/components/AppSwitchLang';
import { HOSTNAME } from '~/constant';

const Cookie = process.client ? require('js-cookie') : undefined;

export default {
	mixins: [formatDate],
	component: {
		AppToTop,
		AppHeader,
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
			element.toScrollIntoView({ behavior: 'smooth' });
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
          hid: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}${
            this.blog &&
            this.localePath({
              name: 'blog-slug',
              params: { slug: this.blog.slug }
            })
          }`
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
            mainEntityOfPage: `${HOSTNAME}${
              this.blog &&
              this.localePath({
                name: 'blog-slug',
                params: { slug: this.blog.slug }
              })
            }`,
            headline: this.blog && this.blog.title,
            description: this.blog && this.blog.description,
            datePublished: this.blog && this.blog.postedDate,
            dateCreated: this.blog && this.blog.postedDate,
            dateModified: this.blog && this.blog.updatedDate,
            wordcount: this.blog && this.blog.readingTime.words,
            url: `${HOSTNAME}${
              this.blog &&
              this.localePath({
                name: 'blog-slug',
                params: { slug: this.blog.slug }
              })
            }`,
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
              name: 'Jefrydco',
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
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': `${HOSTNAME}${this.localePath({ name: 'index' })}`,
                  name: 'Blog'
                }
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': `${HOSTNAME}${
                    this.blog &&
                    this.localePath({
                      name: 'blog-slug',
                      params: { slug: this.blog.slug }
                    })
                  }`,
                  name: this.blog && this.blog.title
                }
              }
            ]
          })
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
.top__navbar__article {
	@apply fixed top-0 left-0 z-30 w-full;
}

.header {
	@apply w-full relative;
	
	img {
		@apply w-screen h-128;
	}
}

.blog {
	@apply z-20 mx-auto relative rounded-md;
	width: 80%;
	display: flex;
	justify-content: center;
	margin-top: -16rem;
	background-color: var(--card-bg);

	&__content {
		@apply p-12;
		width: 80%;
		display: flex;
		justify-content: center;
	}
}

.table-of-contents {
  ol {
    counter-reset: list-item;
  }

  li {
    @apply block;
    counter-increment: list-item;
  }

  li:before {
    content: counters(list-item, '.') ' ';
  }
}
</style>