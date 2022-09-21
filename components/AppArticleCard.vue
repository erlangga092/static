<template>
  <div>
    <nuxt-link :to="localePath({ name: 'blog-slug', params: { slug } })">
      <article>
        <section class="meta px-8 pt-4">
          <div class="meta__title">
            <h1 class="my-4 text-xl">
              {{ title }}
            </h1>
          </div>
          <div class="meta__summary">
            <p class="my-4 text-md">{{ sliceSummary(summary) }}</p>
          </div>
        </section>
        <section class="img w-full h-full overflow-hidden">
          <app-img :src="img" :alt="title" />
        </section>
      </article>
    </nuxt-link>
  </div>
</template>

<script>
import { formatDate } from "~/mixins";

export default {
  mixins: [formatDate],
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    summary: {
      type: String,
      default: "",
    },
    postedDate: {
      type: String,
      default: "",
    },
    updatedDate: {
      type: String,
      default: "",
    },
    readingTime: {
      type: Object,
      default() {
        return null;
      },
    },
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    sliceSummary() {
      return (val) => {
        let i = val.split(" ");
        if (parseInt(i.length) > 14) {
          return `${i.slice(0, 15).join(" ").toString()}...`;
        } else {
          return val;
        }
      };
    },
  },
};
</script>

<style lang="postcss">
article {
  @apply shadow-md;
  display: grid;
  overflow: hidden;
  border-radius: 0.375rem;
  grid-template-rows: 1fr auto;
  background-color: var(--card-bg);
  font-family: "Merriweather sans", sans-serif;

  &:hover {
    border-radius: 0.375rem;
    box-shadow: 0 2px 0 rgba(54, 45, 89, 0.15),
      -0.1875rem -0.1875rem 0 0.1875rem #f2b712, 0 0 0 0.375rem #e1567c;
  }

  .meta {
    flex-grow: 0;

    &__title {
      > h1 {
        font-family: "Bitter", serif;
      }
    }

    &__summary {
      > p {
        font-family: "Merriweather sans", sans-serif;
      }
    }
  }

  .img {
    img {
      background-size: cover;
      background-position: 50% 50%;
      clip-path: polygon(-1% 3.49vw, 101% 0%, 101% 101%, -1% 101%);
    }
  }
}
</style>
