<template>
  <div>
    <div class="relative w-full mt-5">
      <ul
        class="grid grid-flow-col overflow-x-scroll overflow-y-hidden scroll sections auto-cols-max"
        @scroll="scrolled"
      >
        <li
          v-for="section in sections"
          :key="section.title"
          class="px-6 py-3 text-sm dark:text-gray-200 text-shadow-sm"
        >
          <nuxt-link
            class="flex flex-col items-center justify-center"
            :to="{ name: 'section', params: { section: section.slug } }"
          >
            <img
              :src="`emojis/${section.emoji}.svg`"
              class="w-12 h-12 mb-2 transition duration-75 transform opacity-80 hover:opacity-100 hover:scale-110 hover:rotate-6 filter-logo dark:filter-logo-dark"
              alt=""
            />
            {{ section.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- <Ads :ads="ads" /> -->

    <div
      class="w-full mt-12 mb-2 text-lg font-bold text-center text-indigo-500 dark:text-gray-200"
    >
      Feeling Lucky?
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full dark:text-gray-300 dark:bg-gray-700 shadow-logo dark:shadow-logo-dark text-pink-50 sm:dark:hover:bg-gray-600 hover:bg-indigo-600"
      >
        Random Meal
      </button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    const sections = await $content('sections')
      .sortBy('position')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    sections.forEach(async (section) => {
      section.items = await $content('menu')
        .where({ section: { $contains: section.slug } })
        .limit(5)
        .fetch()
    })
    const ads = await $content()
      .where({ slug: 'ads' })
      .limit(3)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Ads not found' })
      })
    return {
      sections,
      ads,
    }
  },
  data() {
    return {
      unscrolled: true,
    }
  },
  mounted() {
    this.$store.commit('search/showSearch')
  },
  methods: {
    scrolled(e) {
      if (e.target.scrollLeft > 80) {
        this.unscrolled = false
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.card:hover {
  img {
    @apply sm:shadow-xl scale-105;
  }
}

.overflow-button {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 40%,
    rgb(255, 255, 255) 100%
  );
}

.dark .overflow-button {
  background: linear-gradient(
    90deg,
    rgba(31, 41, 55, 0) 0%,
    rgba(31, 41, 55, 0.8) 40%,
    rgb(31, 41, 55) 100%
  );
}

/* width */
.scroll::-webkit-scrollbar {
  @apply block;
  @apply h-2;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.scroll::-webkit-scrollbar-thumb {
  @apply rounded-md;
  @apply opacity-50;
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
  @apply bg-gray-200;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500;
}

/* Handle */
.dark .scroll::-webkit-scrollbar-thumb {
  @apply bg-gray-600;
}

/* Handle on hover */
.dark .scroll::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-200;
}
</style>
