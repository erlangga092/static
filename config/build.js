import path from 'path';
import MarkdownIt from 'markdown-it';
import mip from 'markdown-it-prism';
import mihl from 'markdown-it-highlight-lines';
import mila from 'markdown-it-link-attributes';
import mia from 'markdown-it-anchor';
import mitdr from 'markdown-it-toc-done-right';
import slugify from '@sindresorhus/slugify';
import { VUE_COMPONENT, HTML } from 'frontmatter-markdown-loader/mode';

const md = new MarkdownIt({
	html: true, 
	typographer: true
})

md.use(mip);
md.use(mihl);
md.use(mila, {
	pattern: /(http|https|ftp|ftps):\/\/[a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(\/\S*)?/,
	attrs: {
		target: '_blank',
		rel: 'noopener noreferrer'
	}
})
md.use(mia, {
	permalink: true,
	permalinkBefore: true,
	permalinkSymbol: '🔗',
	slugify
})
md.use(mitdr, {
	slugify
})

export default {
	postcss: {
		plugins: {
			'postcss-nested': {},
		}
	},
	extend(config, { isDev, isClient }) {
		config.node = {
			fs: 'empty'
		}

		config.module.rules.push({
			test: /\.md$/,
			loader: 'frontmatter-markdown-loader',
			include: path.resolve(__dirname, '../contents'),
			options: {
				mode: [VUE_COMPONENT, HTML],
				vue: {
					root: 'dynamic-markdown'
				},
				markdown(body) {
					return md.render(body)
				}
			}
		})
	}
}