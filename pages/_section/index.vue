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
        <Items :items="items" />
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
    setTimeout(() => store.commit('search/hideSearch'), 0)
  },
  transition: {
    name: 'page-slide-left',
    afterLeave(el) {
      this.$store.commit('search/showSearch')
    },
  },
}
</script>
