<template>
	<figure v-lazy-container="{ selector: 'img' }" class="image-placeholder">
		<img 
			:data-src="imageRequired.src"
			:data-srcSet="imageRequired.srcSet"
			:data-loading="imageRequired.placeholder"
			:width="width"
			:height="height"
			:class="classes"
			:alt="alt"
			:src="imageRequired.placeholder"
		/>
	</figure>
</template>

<script>
import { isExists } from '~/utils'

export default {
	props: {
		src: {
			type: String,
			required: true
		},
		alt: {
			type: String,
			required: true
		},
		width: {
			type: [String, Number],
			default: 1920
		},
		height: {
			type: [String, Number],
			default: 1080
		},
		classes: {
			type: String,
			default: ''
		},
		caption: {
			type: Object,
			default() {
				return {
					en: {},
					id: {}
				}
			}
		},
		source: {
			type: String,
			default: ''
		},
		sourceLink: {
			type: String,
			default: ''
		}
	},
	computed: {
		imageRequired() {
			return require(`~/assets/images${this.src}`);
		}
	}
}
</script>

<style lang="postcss">
.image-placeholder {
	@apply overflow-hidden;

	img {
		@apply opacity-0 object-cover rounded;
		transition: all .3s cubic-bezier(.55, 0, .1, 1);
	}

	img[lazy='loading'] {
		@apply opacity-100;
		filter: blur(0.9375rem);
	}

	img[lazy='loaded'] {
		@apply opacity-100;
	}
}
</style>