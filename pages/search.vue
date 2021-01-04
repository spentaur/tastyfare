<template>
  <div class="w-full max-w-6xl">
    <transition name="fade" mode="out-in">
      <Items v-if="query && items.length > 0" :items="items" />
      <div
        v-else-if="query && items.length === 0 && loading === false"
        class="flex items-center justify-center mt-8 text-2xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
      >
        No matching items
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    }
  },
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
      this.loading = true
      const items = await this.$content('menu').limit(12).search(query).fetch()
      this.$store.commit('search/addItems', items)
      this.loading = false
    },
  },
  middleware({ store }) {
    store.commit('search/showSearch')
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
