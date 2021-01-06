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
      </ul>
      <transition name="fade">
        <div
          v-if="unscrolled && !$store.state.dark.enabled"
          class="absolute top-0 right-0 hidden w-32 h-full transition duration-300 sm:flex overflow-button"
        ></div>
      </transition>
    </div>
    <div
      class="w-full h-32 mt-5 bg-green-100 border-8 border-green-50 rounded-2xl"
    ></div>

    <div v-for="(section, index) in sections" :key="section.title">
      <ul
        v-if="index === 1"
        class="grid grid-cols-1 gap-4 mt-10 mb-16 sm:grid-cols-3"
      >
        <Ad v-for="ad in ads" :key="ad.name" :ad="ad" />
      </ul>
      <div class="flex items-center mt-5">
        <div
          class="flex items-center flex-grow text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
        >
          {{ section.title }}
          <img
            :src="`emojis/${section.emoji}.svg`"
            class="w-8 h-8 ml-3 transition duration-75 transform-gpu hover:scale-110 hover:rotate-6 filter-logo dark:filter-logo-dark"
            alt=""
          />
        </div>
        <nuxt-link
          :to="{
            name: 'section',
            params: { section: section.slug },
          }"
          class="flex items-center justify-center font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full sm:shadow-logo sm:dark:shadow-logo-dark dark:text-gray-300 dark:bg-gray-700 w-9 h-9 sm:hover:bg-indigo-600 sm:dark:bg-gray-700 sm:dark:hover:bg-gray-600 sm:bg-indigo-500 sm:px-3 sm:py-2 sm:h-auto sm:w-auto sm:text-pink-50"
        >
          <div class="hidden sm:block">See all</div>
          <svg
            class="w-4 h-4 sm:ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </nuxt-link>
      </div>
      <Items :items="section.items" :section="section" />
    </div>

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
</style>
