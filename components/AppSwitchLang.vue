<template>
	<div class="switch__lang">
    <nuxt-link
    	v-for="locale in availableLocales"
			:key="locale.id"
			:aria-label="locale.name"
			:to="switchLocalePath(locale.code)"		
			class="switch__lang__btn"
    >
    	{{ locale.view }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
	data() {
		return {
			availableLocales: []
		}
	},
	created() {
		const locale = this.$i18n.locale;
		const locales = this.$i18n.locales;
		const defaultLocale = this.$i18n.defaultLocale;
		const availableLocales = locales.filter(i => i.code !== locale);
		this.availableLocales = availableLocales;
	}
}
</script>

<style lang="postcss">
.switch__lang {
	@apply fixed z-20;
	top: 6rem;
	right: 1.9rem;

	@media screen and (max-width: 976px) {
		right: 1.5rem;
		top: 7rem;
	}

	&__btn {
		@apply block w-12 h-12 rounded-full shadow-md no-underline text-center text-lg;
		font-family: 'Bitter', serif;
		display: flex;
		align-items: center;
		justify-content: center;
    background-color: var(--bg);
    color: var(--text-normal);

    &:focus {
      @apply outline-none;
    }

    &:hover {
      @apply shadow-lg;
    }
	}
}
</style>