<template>
  <div
    v-show="$store.state.dark.status"
    :class="{ dark: $store.state.dark.enabled }"
  >
    <div class="transition-all duration-300 bg-gray-50 dark:bg-black">
      <Nuxt />
    </div>
  </div>
</template>
