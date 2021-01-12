<template>
  <div>
    <div class="flex items-center w-full">
      <div>
        <button
          class="p-2 text-indigo-500 transition-opacity duration-300 rounded-full dark:text-indigo-200 focus:outline-none"
          @click="$router.back()"
        >
          <svg
            class="w-7 h-7 dark:filter-logo-dark filter-logo"
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
        class="flex-grow text-2xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="flex items-center justify-center text-center sm:p-0">
      <div
        class="relative flex flex-col flex-1 w-full px-3 pt-4 pb-6 sm:max-w-xl"
      >
        <MenuItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const [item] = await $content('menu')
      .where({
        section: { $contains: params.section.toLowerCase() },
        slug: params.item.toLowerCase(),
      })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Item not found' })
      })

    const section = await $content('sections', params.section.toLowerCase())
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Section not found' })
      })
    if (!section) {
      return error({ statusCode: 404, message: 'Section not found' })
    }

    return {
      item,
      section,
    }
  },
  middleware({ store }) {
    store.commit('search/hideSearch')
  },
  transition: {
    name: 'page-slide-left',
  },
}
</script>
