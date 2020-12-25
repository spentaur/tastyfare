<template>
  <div
    v-show="$store.state.dark.status"
    :class="{ dark: $store.state.dark.enabled }"
  >
    <div class="bg-gray-50 dark:bg-gray-800">
      <Nuxt />
    </div>
  </div>
</template>
