<template>
  <div
    v-show="$store.state.dark.status"
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <div
      class="flex flex-col min-h-screen transition-all duration-200 bg-white select-none dark:bg-gray-800"
    >
      <Navbar />
      <Nuxt
        :class="{
          'translate-y-3/4  sm:-translate-y-0 transform':
            $store.state.menu.open,
          'sm:translate-x-80': $store.state.menu.direction === 'left',
          'sm:-translate-x-80': $store.state.menu.direction === 'right',
        }"
        class="flex-grow pt-6 pb-32 transition-all duration-300 bg-white sm:duration-300 dark:bg-gray-800 sm:pb-12 sm:pt-22"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-black',
    },
  },
}
</script>
