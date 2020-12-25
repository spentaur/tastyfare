<template>
  <div
    v-show="$store.state.dark.status"
    class=""
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <div
      :class="[
        $store.state.menu.open
          ? 'bg-black sm:dark:bg-gray-800 sm:bg-gray-50'
          : 'dark:bg-gray-800',
      ]"
      class="transition-all duration-300"
    >
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: 'bg-gray-50 dark:bg-gray-700',
      },
    }
  },
}
</script>
