<template>
  <div
    ref="main"
    tabindex="0"
    :class="{
      dark: dark,
    }"
    @keydown.prevent.191="$nuxt.$emit('focus-search')"
  >
    <div
      class="flex flex-col min-h-screen transition-all duration-200 bg-white select-none dark:bg-gray-800"
    >
      <Modal />
      <Menu name="main">
        <LeftMenu />
      </Menu>
      <BagMenu />
      <Navbar />
      <div
        :class="{
          'sm:translate-x-80 transform-gpu':
            $store.state.menu.open && $store.state.menu.direction === 'left',
          'sm:-translate-x-80 transform-gpu':
            $store.state.menu.open && $store.state.menu.direction === 'right',
        }"
        class="flex justify-center flex-grow w-full pt-6 pb-32 mx-auto transition-all duration-300 bg-white max-w-screen-2xl dark:bg-gray-800 sm:pb-12 sm:pt-18"
      >
        <div class="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="main">
            <transition name="search-slide">
              <Search v-if="showSearch" />
            </transition>
            <Nuxt />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    opened() {
      return this.$store.state.menu.open || this.$store.state.modal.open
    },
    dark() {
      return this.$store.state.dark.enabled
    },
    showSearch() {
      return this.$store.state.search.show
    },
  },
  mounted() {
    this.$refs.main.focus()
  },
  head() {
    return {
      bodyAttrs: {
        class: this.opened ? 'overflow-hidden h-screen w-screen' : '',
      },
    }
  },
}
</script>

<style scoped></style>
