<template>
  <div class="w-full max-w-6xl">
    <transition name="fade-fast" mode="out-in">
      <Items v-if="query && items.length > 0" class="mt-10" :items="items" />
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
  middleware({ store }) {
    store.commit('search/showSearch')
  },
  transition: {
    name: 'page-shrink',
  },
  data() {
    return {
      loading: false,
    }
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
}
</script>

<style lang="postcss" scoped>
.card:hover {
  img {
    @apply sm:shadow-xl scale-105;
  }
}
</style>
