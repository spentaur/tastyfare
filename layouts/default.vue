<template>
  <div
    v-show="$store.state.dark.status"
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <Menu />
    <div
      class="transition-all duration-200 bg-white select-none dark:bg-gray-800"
    >
      <Navbar />
      <Nuxt
        :class="{
          'scale-90 translate-y-0 sm:scale-95 transform':
            $store.state.menu.open,
        }"
        class="pt-6 transition-all duration-300 bg-white dark:bg-gray-800 pb-22 sm:pb-12 sm:pt-22"
      />
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
