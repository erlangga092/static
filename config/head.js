import { HOSTNAME } from '../constant'

export default {
  titleTemplate(title) {
    if (title) {
      return `${title} - Erlangga`
    }
    return 'Jefrydco'
  },
  meta: [
    { charset: 'utf-8' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, minimum-scale=1'
    },
    {
      hid: 'og:image:alt',
      name: 'og:image:alt',
      property: 'og:image:alt',
      content: 'Jefrydco'
    },
    { property: 'fb:admins', content: 100003000286186 },
    {
      property: 'fb:app_id',
      content: 267913173658573
    },
    { property: 'fb:pages', content: 632770976865033 },
    {
      name: 'google-site-verification',
      content: 'uDWa7gsQlLiIe_Nk0fG5AvaW8vyEyOFuAZNDdmaZB4M'
    }
  ],
  link: [
    {
      rel: 'webmention',
      href: 'https://webmention.io/jefrydco.id/webmention'
    },
    {
      rel: 'pingback',
      href: 'https://webmention.io/jefrydco.id/xmlrpc'
    },
    {
      type: 'text/plain',
      rel: 'author',
      href: `${HOSTNAME}/humans.txt`
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
      href: 'https://d33wubrfki0l68.cloudfront.net'
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
        name: 'Jefrydco',
        headline: 'A personal site of Jefry Dewangga',
        description: 'A personal site of Jefry Dewangga',
        about: 'A personal site of Jefry Dewangga',
        keywords: 'jefrydco, Jefry Dewangga',
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
          name: 'Jefrydco',
          sameAs: 'https://www.facebook.com/jefrydco.id',
          logo: {
            '@type': 'imageObject',
            url: `${HOSTNAME}/icon.png`,
            width: '2739',
            height: '3102'
          }
        },
        creator: {
          '@type': 'Person',
          name: 'Jefry Dewangga',
          alternateName: 'Jefrydco',
          birthDate: '1998-03-12',
          gender: { '@type': 'GenderType', alternateName: 'Male' },
          url: [
            `${HOSTNAME}`,
            'https://jefrydco.tumblr.com/',
            'https://jefrydco.blogspot.com/',
            'https://jefrydco.wordpress.com/'
          ],
          sameAs: [
            'https://about.me/jefrydco',
            'https://angel.co/jefrydco',
            'https://behance.net/jefrydco',
            'https://dribbble.com/jefrydco',
            'https://foursquare.com/jefrydco',
            'https://github.com/jefrydco',
            'https://goodreads.com/jefrydco',
            'https://instagram.com/jefrydco',
            'https://medium.com/@jefrydco',
            'https://pinterest.com/jefrydco',
            'https://plus.google.com/+JefryDewangga',
            'https://quora.com/jefrydco',
            'https://reddit.com/user/jefrydco',
            'https://soundcloud.com/jefrydco',
            'https://stackoverflow.com/users/7711812/jefry-dewangga',
            'https://twitter.com/jefrydco',
            'https://vimeo.com/jefrydco',
            'https://www.facebook.com/jefrydco',
            'https://www.last.fm/user/jefrydco',
            'https://www.linkedin.com/in/jefrydco/',
            'https://www.xing.com/profile/Jefry_Dewangga'
          ]
        }
      })
    }
  ]
}
