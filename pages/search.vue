<template>
  <div>
    <div class="w-full max-w-6xl">
      <div>
        <Items :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page-shrink',
  },
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
