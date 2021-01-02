<template>
  <div>
    <div v-for="section in sections" :key="section.title">
      <div class="flex items-center mt-10">
        <div
          class="flex-grow text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
        >
          {{ section.title }}
        </div>
        <nuxt-link
          v-if="section.title != 'Desserts 🍪'"
          :to="{
            name: 'section',
            params: { section: section.slug },
          }"
          class="flex items-center justify-center font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full shadow dark:text-gray-300 dark:bg-gray-700 w-9 h-9 sm:hover:bg-indigo-600 sm:dark:bg-gray-700 sm:dark:hover:bg-gray-600 sm:bg-indigo-500 sm:px-3 sm:py-2 sm:h-auto sm:w-auto sm:text-pink-50"
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
      <ul class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
        <li
          v-for="menuItem in section.items"
          :key="menuItem.name"
          class="flex flex-col col-span-1 text-center transition-all duration-300 card"
        >
          <nuxt-link
            :to="{
              name: 'section-item',
              params: { section: section.slug, item: menuItem.slug },
            }"
            class="text-gray-900 transition duration-100 transform dark:text-gray-200"
          >
            <div class="flex flex-col flex-1 sm:p-4">
              <img
                class="object-cover w-full mx-auto transition duration-100 bg-transparent shadow-md rounded-xl transform-gpu sm:w-44 h-44"
                :src="menuItem.imgUrl"
                alt=""
              />
              <span href="#" class="mt-4 font-extrabold text-shadow">{{
                menuItem.name
              }}</span>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div
      class="w-full mt-12 mb-2 text-lg font-bold text-center text-indigo-500 dark:text-indigo-400"
    >
      Feeling Lucky?
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full shadow text-pink-50 hover:bg-indigo-600"
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
        .where({ section: section.slug })
        .limit(4)
        .fetch()
    })
    return {
      sections,
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'section-item') {
      this.displayProductModal(to)
    } else {
      next()
    }
  },
  methods: {
    displayProductModal(route) {
      const section = this.sections.find(
        (element) => element.slug === route.params.section
      )
      const menuItem = section.items.find(
        (element) => element.slug === route.params.item
      )
      this.$store.commit('modal/open', menuItem)
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
</style>
