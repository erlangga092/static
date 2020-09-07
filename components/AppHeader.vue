<template>
	<div>
	<header class="header">
		<div class="header__navbar">
			<section class="header__navbar__logo">
				<h1 class="my-0 text-2xl">ERL_Angga</h1>
			</section>
			<aside class="header__navbar__menu">
				<div class="header__navbar__menu__list">
					<ul class="px-8 mx-0 my-0 list-none">
						<li class="mx-0 my-0 mr-4">
							<nuxt-link to="/">Home</nuxt-link>
						</li>
						<li class="mx-0 my-0 mr-4">
							<nuxt-link to="/blog">Blog</nuxt-link>
						</li>
						<li class="mx-0 my-0 mr-4">
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
				</div>
				<div class="switch__theme">
					<app-switch-theme v-model="isDark" />
				</div>
			</aside>
		</div>
	</header>
	</div>
</template>

<script>
import AppSwitchTheme from '~/components/AppSwitchTheme';

const Cookie = process.client ? require('js-cookie') : undefined

export default {
	components: {
		AppSwitchTheme
	},
	data() {
		return {
			availableLocales: [],
			isDark: false
		}
	},
	created() {
		const locale = this.$i18n.locale;
		const locales = this.$i18n.locales;
		const defaultLocale = this.$i18n.defaultLocale;
		const availableLocales = locales.filter(i => i.code !== locale);
		this.availableLocales = availableLocales;
	},
	mounted() {
		this.initColorScheme();
	},
	methods: {
		initColorScheme() {
			const isDark = Cookie.get('d');
			if (isDark) {
				if (parseInt(isDark)) {
					this.isDark = true;
				}
			} else if (
				window.matchMedia('(prefers-color-scheme)').media !== 'not all'
			) {
				const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				if (darkModeMediaQuery.matches) {
					this.isDark = true;
				}
				darkModeMediaQuery.addListener(e => {
					const darkModeOn = e.matches;
					this.isDark = darkModeOn;
				})
			}
		}
	},
	head() {
		return {
			bodyAttrs: {
				class: this.isDark ? 'dark' : 'light'
			}
		}
	}
}
</script>

<style lang="postcss">
.header {
	@apply z-20;
	width: 100%;
	top: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	background-color: var(--card-bg);
	font-family: 'Bitter', sans-serif;

	&__navbar {
		@apply h-20 px-20 py-2 shadow-md;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		justify-content: center;

		@media screen and (max-width: 768px) {
			padding-right: 2rem;
			padding-left: 2rem;
		}

		&__logo {
			display: flex;
			align-items: center;
			height: 100%;

			> h1 {
				color: var(--text-color);
				font-family: 'Bitter', sans-serif;
			}
		}

		&__menu {
			display: grid;
			grid-template-columns: 80% 20%;
			align-items: center;
			justify-content: center;
			height: 100%;
			@media screen and (max-width: 976px) {
				grid-template-columns: 1fr;
			}

			&__list {
				@media screen and (max-width: 976px) {
					display: none;
				}

				> ul {
					display: flex;
					place-content: flex-end;
					place-items: center /end;
					width: 100%;
					
					> li {
						@apply p-2;

						> a {
							@apply underline;
							color: var(--text-color);
						}
					}
				}
			}

			> .switch__theme {
				width: 100%;
				display: flex;
				height: 100%;
				place-content: flex-end;
				place-items: center /end;

				@media screen and (max-width: 768px) {
					place-content: flex-end;
					place-items: center /end;
				}
			}
		}
	}
}

.translation:hover {
	color: var(--text-link);
}
</style>