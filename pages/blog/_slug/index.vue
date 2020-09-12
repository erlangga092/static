<template>
	<div>
	<div v-if="blog !== null && typeof blog !== 'undefined'" id="blog">
		<div class="header">
			<div class="header__img">
				<app-img :src="blog.img" :alt="blog.title" />
			</div>
		</div>
		<div class="max-w-5xl ml-auto mr-auto wrapper">
			<div class="blog">
				<div class="blog__content">
					<main>
						<article>
							<header>
								<div class="blog__meta">
									<h1 id="blog-title" class="blog__title">
										{{ blog.title }}
									</h1>
								</div>
							</header>
							<component :is="blog.component" />
						</article>
					</main>
				</div>
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
#blog {
	box-sizing: border-box;
}

.header {
	@apply w-full relative;

	img {
		@apply w-screen h-128 object-cover;
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

.blog {
  @apply mb-12 mx-4 rounded overflow-hidden shadow relative -mt-64 z-20;
  background-color: var(--card-bg);
  font-family: 'merriweather sans', sans-serif;

  .image-placeholder {
    @apply mb-8;
  }

  img {
    @apply w-full h-auto;
  }

  &__content {
    @apply p-16;

    @media screen and (max-width: 576px) {
    	padding: 2rem;
    }
  }

  &__meta {
    @apply mb-8;
  }

  &__title {
    @apply font-bold text-2xl mt-0 mb-4;
    font-family: 'Bitter', serif;
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