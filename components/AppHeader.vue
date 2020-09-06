<template>
	<header class="header">
		<div class="header__navbar">
			<section class="header__navbar__logo">
				<h1 class="my-0 text-2xl">ERL_Angga</h1>
			</section>
			<aside class="header__navbar__menu">
				<ul class="flex items-center justify-between px-8 mx-0 my-0 list-none">
					<li class="mx-0 my-0 mr-4">
						<nuxt-link to="/">Home</nuxt-link>
					</li>
					<li class="mx-0 my-0">
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li>
				</ul>
			</aside>
			<section class="header__navbar__search">
				<nuxt-link 
					v-for="locale in availableLocales"
					:key="locale.id"
					:aria-label="locale.name"
					:to="switchLocalePath(locale.code)"					
					class="translation hover:bg-green-400"
				>
					{{ locale.iso }}
				</nuxt-link>				
			</section>
		</div>
	</header>
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
.header {
	@apply w-full top-0 flex items-center justify-center absolute;
	box-sizing: border-box;
	background-color: var(--card-bg);

	&__navbar {
		@apply w-full h-24 grid grid-cols-3 px-8 py-2 items-center shadow-sm;
		background-color: var(--bg-card);
		@media screen and (max-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}

		&__logo {
			@apply flex col-span-1 items-center;

			> h1 {
				color: var(--text-color);
			}
		}

		&__search {
			@apply flex items-center justify-end w-full;				
		}

		&__menu {
			@apply flex items-center justify-center;
			@media screen and (max-width: 768px) {
				display: none;
			}

			> ul > li {
				@apply p-2;
			}

			> ul > li > a {
				@apply underline;
				color: var(--text-color);
			}
		}
	}
}

.translation {
	@apply px-4 py-1 rounded text-white text-lg mr-4 bg-green-500;
}
</style>