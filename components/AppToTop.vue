<template>
  <div class="to-top">
    <a class="to-top__link" aria-label="To Top" href="#blog">▲</a>
  </div>
</template>

<style lang="postcss">
/* purgecss start ignore */
.to-top {
  position: fixed;
  z-index: 20;
  bottom: 1.4rem;
  right: 1.9rem;

  @media screen and (max-width: 576px) {
    bottom: 1rem;
    right: 1.5rem;
  }

  &__link {
    @apply w-12 h-12 rounded-full shadow-md no-underline text-center text-2xl;
    display: block;
    line-height: 1.8;
    background-color: var(--card-bg);
    color: var(--text-normal);

    &:focus {
      @apply outline-none;
    }

    &:hover {
      @apply shadow-lg;
    }
  }
}

@media (max-width: 992px) {
  .to-top {
    &__link {
      background-color: var(--bg);
    }
  }
}
/* purgecss end ignore */
</style>
