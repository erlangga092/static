<template>
	<div>
		<div class="top__navbar">
			<app-header />
		</div>
		<div class="home">
			<app-hero />
			<div class="wrap px-20 mt-4">
				<div class="article">
				<app-article-card 
					class="article__card"
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
		</div>
	</div>
</template>

<script>
import AppHero from '~/components/AppHero';
import AppHeader from '~/components/AppHeader';
import AppArticleCard from '~/components/AppArticleCard';
import slugs from '~/contents/blogs';
import readingTime from 'reading-time';
import { HOSTNAME } from '~/constant';

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
	},
	head() {
    const { locales } = this.$i18n
    const link = locales.map((locale) => {
      let href = null
      if (locale.code === 'id') {
        href = `${HOSTNAME}/sitemap.xml`
      } else {
        href = `${HOSTNAME}/${locale.code}/sitemap.xml`
      }
      return {
        rel: 'alternate',
        type: 'application/rss+xml',
        href,
        title: `Blog - Erlangga`
      }
    })
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: `${HOSTNAME}${this.localePath({ name: 'index' })}`
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Blog',
            name: 'Erlangga',
            headline: 'A personal site of Erlangga',
            description: 'A personal site of Erlangga',
            about: 'A personal site of Erlangga',
            keywords: 'jefrydco, Erlangga',
            genre: ['Personal', 'Tutorial', 'Programming', 'Review', 'Science'],
            copyrightYear: new Date().getFullYear(),
            dateCreated: '2017-03-12',
            inLanguage: ['English', 'Bahasa Indonesia'],
            isAccessibleForFree: 'true',
            isFamilyFriendly: 'true',
            license: 'https://opensource.org/licenses/MIT',
            image: {
              '@type': 'imageObject',
              url: `${HOSTNAME}/icon.png`,
              width: '2739',
              height: '3102'
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
            blogPosts: this.blogs.map((blog) => ({
              '@type': 'blogPosting',
              mainEntityOfPage: `${HOSTNAME}${this.localePath({
                name: 'blog-slug',
                params: { slug: blog.slug }
              })}`,
              headline: blog.title,
              description: blog.description,
              datePublished: blog.postedDate,
              dateCreated: blog.postedDate,
              dateModified: blog.updatedDate,
              wordcount: blog.readingTime.words,
              url: `${HOSTNAME}${this.localePath({
                name: 'blog-slug',
                params: { slug: blog.slug }
              })}`,
              image: {
                '@type': 'imageObject',
                url: `${HOSTNAME}${require(`~/assets/images${blog.img}`)}`,
                height: '1920',
                width: '614'
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
            }))
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
.top__navbar {
	@apply fixed top-0 left-0 z-20 w-full;
}

.home {
	margin-top: 4.2rem;
}

.wrap {
	@media screen and (max-width: 1200px) {
		padding-right: 2rem;
		padding-left: 2rem;
	}

	@media screen and (max-width: 976px) {
		padding-right: 2rem;
		padding-left: 2rem;
	}

	@media screen and (max-width: 576px) {
		padding-right: .75rem;
		padding-left: .75rem;
	}
}

.article {
	@apply my-4 py-4;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr;
	}
	
	@media screen and (max-width: 976px) {
		grid-template-columns: 1fr;
	}

	> &__card {
		@apply shadow;
		background-color: var(--card-bg);
		border-radius: .375rem;
		overflow: hidden;
	}
}
</style>

