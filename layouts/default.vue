<template>
  <div
    v-show="$store.state.dark.status"
    class="bg-black select-none"
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <Menu />
    <Nuxt
      :class="{
        'scale-90 -translate-y-1/25 sm:translate-y-0 rounded-xl sm:rounded-t-xl':
          $store.state.menu.open,
      }"
      class="flex flex-col-reverse h-screen overflow-hidden transition-all duration-300 transform rounded-t-xl sm:rounded-t-none sm:flex-col"
    />
  </div>
</template>
