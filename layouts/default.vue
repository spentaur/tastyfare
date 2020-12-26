<template>
  <div
    v-show="$store.state.dark.status"
    class=""
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <div
      class="transition-all duration-300 bg-black sm:dark:bg-gray-800 sm:bg-gray-50"
    >
      <!-- :class="[
        $store.state.menu.open
          ? 'bg-black sm:dark:bg-gray-800 sm:bg-gray-50'
          : 'dark:bg-gray-800 bg-gray-50',
      ]" -->
      <Nuxt />
    </div>
  </div>
</template>
