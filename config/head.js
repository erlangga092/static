import { HOSTNAME } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - Erlangga`
    }
    return 'Erlangga'
  },
  htmlAttrs: {
		lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1'
    },
    {
      hid: 'title',
      name: 'title',
      property: 'title',
      content: 'Erlangga'
    },
    {
      hid: 'description',
      name: 'description',
      property: 'description',
      content: 'I am software enginer'
    },
    {
			hid: 'og:title',
			name: 'og:title',
			property: 'og:title',
			content: 'Erlangga'
    },
    {
			hid: 'og:description',
			name: 'og:description',
			property: 'og:description',
			content: 'I am software enginer'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'og:image:alt',
      content: 'Erlangga'
    },
    {
      name: 'google-site-verification',
      content: 'FxADGTkaDzhIA5Lt1c8ebMBO9U9y_8lsTsCzot6ZIUs'
    }
  ],
  link: [
    {
      type: 'text/plain',
      rel: 'author',
      href: `${HOSTNAME}/robots.txt`
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'dns-prefetch',
      href: 'https://fonts.gstatic.com'
    },
    {
      rel: 'preconnect',
      href: 'https://www.google-analytics.com'
    }
  ],
  // Taken from: https://github.com/manniL/lichter.io/blob/master/config/head.js
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'WebSite',
        name: 'Erlangga',
        headline: 'A personal site of Erlangga',
        description: 'A personal site of Erlangga',
        about: 'A personal site of Erlangga',
        keywords: 'erlangga, Erlangga',
        genre: ['Personal', 'Tutorial', 'Programming', 'Review', 'Science'],
        copyrightYear: new Date().getFullYear(),
        dateCreated: '2017-03-12',
        inLanguage: ['Bahasa Indonesia', 'English'],
        isAccessibleForFree: 'true',
        isFamilyFriendly: 'true',
        license: 'https://opensource.org/licenses/MIT',
        image: {
          '@type': 'imageObject',
          url: `${HOSTNAME}/icon.png`,
          width: '2739',
          height: '3102'
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${HOSTNAME}`
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
        creator: {
          '@type': 'Person',
          name: 'Erlangga',
          alternateName: 'erlangga',
          birthDate: '1996-10-13',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [
            `${HOSTNAME}`,
            'https://erlangga092.wordpress.com/'
          ],
          sameAs: [
            'https://www.facebook.com/nggacox',
            'https://www.linkedin.com/in/erlangga/',
          ]
        }
      })
    }
  ]
}
