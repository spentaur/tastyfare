<template>
  <div>
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
  loading: false,
  computed: {
    query() {
      return this.$store.state.search.query
    },
    items() {
      return this.$store.state.search.items
    },
  },
  watch: {
    async query(query) {
      if (!query) {
        this.$store.commit('search/removeItems')
        return
      }

      const items = await this.$content('menu').limit(12).search(query).fetch()
      this.$store.commit('search/addItems', items)
    },
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
