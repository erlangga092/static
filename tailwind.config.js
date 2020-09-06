/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      height: {
        '128': '32rem'
      },
      screens: {
	      'xl': {'max': '1279px'},
	      // => @media (max-width: 1279px) { ... }

	      'lg': {'max': '1023px'},
	      // => @media (max-width: 1023px) { ... }

	      'md': {'max': '767px'},
	      // => @media (max-width: 767px) { ... }

	      'sm': {'max': '639px'},
	      // => @media (max-width: 639px) { ... }
	    }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
