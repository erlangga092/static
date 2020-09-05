<template>
	<header class="header">
		<div class="header__navbar">
			<section class="header__navbar__logo">
				<h1 class="my-0 text-2xl">ERL_Angga</h1>
			</section>
			<section class="header__navbar__menu">
				<ul class="flex items-center justify-between px-8 mx-0 my-0 list-none">
					<li class="mx-0 my-0 mr-4">
						<nuxt-link to="/">Home</nuxt-link>
					</li>
					<li class="mx-0 my-0">
						<nuxt-link to="/blog">Blog</nuxt-link>
					</li>
				</ul>
			</section>
			<section class="header__navbar__search">
				<button class="mr-4 bg-green-500 hover:bg-green-400">
					en-US
				</button>
				<button class="bg-red-500 hover:bg-red-400">
					id-ID
				</button>				
			</section>
		</div>
	</header>
</template>

<style lang="postcss">
.header {
	@apply w-full top-0 flex items-center justify-center absolute;
	box-sizing: border-box;
	background-color: var(--card-bg);

	&__navbar {
		@apply w-full h-24 grid grid-cols-3 px-8 py-2 items-center shadow-sm;
		background-color: var(--bg-card);

		&__logo {
			@apply flex col-span-1 items-center;

			> h1 {
				color: var(--text-color);
			}
		}

		&__search {
			@apply flex items-center justify-end w-full;

			> button {
				@apply px-4 py-1 rounded text-white text-lg;
			}
		}

		&__menu {
			@apply flex items-center justify-center;
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
</style>