<template>
  <div>
    <div class="flex items-center w-full">
      <div>
        <button @click="$router.back()">
          <svg
            class="w-6 h-6 mr-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex-grow text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
      >
        {{ section.title }}
      </div>
    </div>
    <div class="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div>
        <ul class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
          <li
            v-for="menuItem in items"
            :key="menuItem.name"
            class="flex flex-col col-span-1 text-center transition-all duration-300 card"
          >
            <nuxt-link
              :to="{
                name: 'section-item',
                params: { section: menuItem.section, item: menuItem.slug },
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
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const section = await $content('sections', params.section.toLowerCase())
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Section not found' })
      })
    if (!section) {
      return error({ statusCode: 404, message: 'Section not found' })
    }
    const items = await $content('menu')
      .where({ section: section.slug })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Items not found' })
      })

    return {
      items,
      section,
    }
  },
  middleware({ store }) {
    store.commit('search/hideSearch')
  },
  transition: {
    name: 'page-slide-left',
    afterLeave(el) {
      this.$store.commit('search/showSearch')
    },
  },
}
</script>
