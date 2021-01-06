<template>
  <div>
    <div class="relative w-full mt-5">
      <ul
        class="grid grid-flow-col overflow-y-scroll sections auto-cols-max"
        @scroll="scrolled"
      >
        <li
          v-for="section in sections"
          :key="section.title"
          class="flex flex-col items-center justify-center px-6 py-3 text-sm cursor-pointer dark:text-gray-200 text-shadow-sm"
        >
          <img
            :src="`emojis/${section.emoji}.svg`"
            class="w-12 h-12 mb-2 transition duration-75 transform-gpu hover:scale-110 hover:rotate-6 filter-logo dark:filter-logo-dark"
            alt=""
          />
          {{ section.title }}
        </li>
        <li
          class="flex flex-col items-center justify-center px-6 py-3 text-sm cursor-pointer dark:text-gray-200 text-shadow-sm"
        ></li>
        <li
          class="flex flex-col items-center justify-center px-6 py-3 text-sm cursor-pointer dark:text-gray-200 text-shadow-sm"
        ></li>
      </ul>
      <transition name="fade">
        <div
          v-show="unscrolled"
          class="absolute top-0 right-0 hidden w-32 h-full transition duration-300 sm:flex overflow-button"
        ></div>
      </transition>
    </div>
    <Ads :ads="ads" />

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
  middleware({ store }) {
    setTimeout(() => store.commit('search/showSearch'), 150)
  },
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
    rgba(255, 255, 255, 0) 0%,
    rgba(31, 41, 55, 0.8) 40%,
    rgb(31, 41, 55) 100%
  );
}
</style>
