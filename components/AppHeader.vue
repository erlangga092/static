<template>
	<header class="header">
		<div class="header__navbar">
			<section class="header__navbar__logo">
				<h1 class="my-0 text-2xl">
					<nuxt-link
						to="/"
						class="header__navbar__logo__home"
					>
						ERL_Angga
					</nuxt-link>
				</h1>
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
</template>

<script>
import AppSwitchTheme from '~/components/AppSwitchTheme';
import { switchLang } from '~/mixins';

const Cookie = process.client ? require('js-cookie') : undefined

export default {
	mixins: [switchLang],
	components: {
		AppSwitchTheme
	},
	data() {
		return {
			isDark: false
		}
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
		const i18nSeo = this.$nuxtI18nSeo();
		return {
			bodyAttrs: {
				class: this.isDark ? 'dark' : 'light'
			},
			...i18nSeo
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
			padding-right: 1.75rem;
			padding-left: 1.75rem;
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

.header__navbar__logo__home {
	@apply no-underline;
	color: var(--text-color);
}
</style>