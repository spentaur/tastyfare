<template>
  <div
    v-show="$store.state.dark.status"
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <Menu />
    <div
      class="h-screen transition-all duration-200 bg-white select-none dark:bg-gray-800"
    >
      <Navbar />
      <Nuxt
        :class="{
          'translate-y-full sm:-translate-y-0 sm:translate-x-80 transform':
            $store.state.menu.open,
        }"
        class="pt-6 transition-all duration-300 bg-white sm:duration-300 dark:bg-gray-800 pb-22 sm:pb-12 sm:pt-22"
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
