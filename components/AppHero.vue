<template>
  <main class="hero">
    <div class="hero__img py-4">
      <div class="text px-20">
        <h1 class="text-3xl text-white text-center font-semibold">
          {{ $t("description") }}
        </h1>
        <p class="text-white text-lg text-center">{{ $t("quote") }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="postcss">
.hero {
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 578px) {
    margin-top: 5rem;
  }

  &__img {
    @apply overflow-hidden bg-indigo-900;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* clip-path: polygon(0% 3.82vw, 100% 0%, 100% 100%, 0% 100%); */

    @media screen and (max-width: 578px) {
    }

    > .text {
      @media screen and (max-width: 578px) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
      }

      > h1 {
        font-family: "Bitter", serif;
        @media screen and (max-width: 578px) {
          font-size: 1.85rem;
        }
      }

      > p {
        font-family: "Merriweather sans", sans-serif;
        @media screen and (max-width: 578px) {
          font-size: 1.05rem;
        }
      }
    }
  }
}
</style>
