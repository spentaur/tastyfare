<template>
  <div class="flex flex-col w-full mx-auto lg:flex-row max-w-screen-2xl">
    <div
      class="hidden w-full p-4 text-white bg-indigo-500 border-8 border-indigo-300 lg:block lg:shadow-2xl lg:ml-4 lg:w-1/3 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl xl:w-1/4"
    >
      - allergen info needs to go somewhere
      <br />
      - recent orders
      <br />
      - tracker
      <br />
      - refresh on update
      <br />
      - theme color
      <br />
      - start working on drilling down pages
      <br />
      - this side is going to be recent orders, ads, tracker? news?
      <br />
      - i kinda wanna split this up.. into like food and drinks maybe or dinner,
      breakfast, lunch, drinks, sides, dessert
      <br />
      - i need to get a full menu written up
      <br />
      - uhhh
      <br />
      - i think i like this layout, but i might make it more like door dash,
      like instead of entrees - sides ++ i'll do like sandwiches -> view all
      pizza -> view all smoothies -> view all etc
      <br />
      - ^ so in order to do that, i need to have a menu fully fleshed out
      <br />
      - make buttons more consistent?
      <br />
      - i need some way to display locations? or have some feed back based on
      locations
    </div>
    <div class="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
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
          class="block w-full py-2 pl-10 pr-3 font-semibold text-gray-400 placeholder-gray-400 transition-colors duration-300 bg-gray-200 border border-gray-200 rounded-full shadow focus:text-gray-800 dark:border-transparent dark:bg-gray-700 dark:focus:ring-gray-600 focus:ring-indigo-500 dark:focus:bg-white focus:bg-gray-50"
          placeholder="Search for Your Favorites"
          type="search"
        />
      </div>
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
  transition: 'none',
  data() {
    return {
      query: '',
      items: [],
    }
  },
  watch: {
    async query(query) {
      if (!query) {
        this.items = []
        return
      }

      this.items = await this.$content('menu').limit(12).search(query).fetch()
    },
  },
  mounted() {
    this.$refs.search.focus()
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
      const menuItem = this.items.find(
        (element) => element.slug === route.params.item
      )
      this.$nuxt.$emit('open-modal', menuItem)
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
