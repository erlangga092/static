<template>
	<header class="header">
		<div class="header__navbar">
			<section class="header__navbar__logo">
				<h1 class="my-0 text-2xl">ERL_Angga</h1>
			</section>
			<aside class="header__navbar__menu">
				<ul class="flex items-center justify-end w-full px-8 mx-0 my-0 list-none">
					<li class="mx-0 my-0 mr-4">
						<nuxt-link to="/">Home</nuxt-link>
					</li>
					<li class="mx-0 my-0 mr-4">
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li>
					<li class="mx-0 my-0">
						<nuxt-link 
							v-for="locale in availableLocales"
							:key="locale.id"
							:aria-label="locale.name"
							:to="switchLocalePath(locale.code)"					
							class="translation"
						>
							{{ locale.iso }}
						</nuxt-link>				
					</li>
				</ul>
			</aside>
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
	@apply w-full top-0 fixed flex items-center justify-center absolute z-30 shadow;
	box-sizing: border-box;
	background-color: var(--card-bg);
	font-family: 'Bitter', sans-serif;

	&__navbar {
		@apply w-full h-20 grid grid-cols-2 px-20 py-2 items-center shadow-md top-0 fixed;
		background-color: var(--card-bg);

		&__logo {
			@apply flex col-span-1 items-center;

			> h1 {
				color: var(--text-color);
				font-family: 'Bitter', sans-serif;
			}
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

.translation:hover {
	color: var(--text-link);
}
</style>