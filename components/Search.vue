<template>
  <div class="flex items-center">
    <transition name="slide-fade">
      <div v-if="$route.name === 'search'">
        <button
          class="p-2 text-indigo-500 transition-opacity duration-300 rounded-full dark:text-indigo-200 focus:outline-none"
          @click="$router.back()"
        >
          <svg
            class="mr-3 w-7 h-7 dark:filter-logo-dark filter-logo"
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
    </transition>
    <label for="search" class="sr-only">Search</label>
    <div class="relative flex-grow transition-all duration-300">
      <div
        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <input
        id="search"
        ref="search"
        v-model="query"
        name="search"
        autocomplete="off"
        class="block w-full py-2 pl-10 pr-3 font-semibold text-gray-400 placeholder-gray-400 transition-colors duration-300 bg-gray-200 border border-gray-200 rounded-full shadow focus:text-gray-800 dark:border-transparent dark:bg-gray-700 dark:focus:ring-gray-600 focus:ring-indigo-500 dark:focus:bg-white focus:bg-gray-50"
        placeholder="Search for Your Favorites"
        type="search"
        @keydown.esc="home"
        @click="$router.push('search')"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    query: {
      get() {
        return this.$store.state.search.query
      },
      set(value) {
        this.$store.commit('search/updateQuery', value)
      },
    },
  },
  created() {
    this.$nuxt.$on('focus-search', () => {
      this.$refs.search.focus()
      this.$router.push('search')
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('focus-search')
  },
  methods: {
    home() {
      this.$router.push('/')
      this.$refs.search.blur()
    },
  },
}
</script>
