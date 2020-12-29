<template>
  <div>
    <LeftMenu />
    <BagMenu />
    <nav
      class="fixed bottom-0 z-10 w-screen bg-white border-t-2 border-gray-200 sm:top-0 dark:border-gray-700 sm:bottom-auto dark:bg-gray-700 sm:border-t-0 sm:border-b sm:shadow-md"
    >
      <div
        :class="{
          'sm:translate-x-80 transform':
            $store.state.menu.open && $store.state.menu.direction === 'left',
          'sm:-translate-x-80 transform':
            $store.state.menu.open && $store.state.menu.direction === 'right',
        }"
        class="mx-auto transition-all duration-300 max-w-screen-2xl"
      >
        <div class="relative flex justify-between h-12 sm:h-14">
          <div
            class="flex items-center justify-center flex-grow sm:justify-start"
          >
            <div class="flex items-center h-full px-2 sm:px-6">
              <button
                id="side-menu"
                class="p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none"
                aria-haspopup="true"
                @click="$store.commit('menu/toggle', ['left', 'main'])"
              >
                <span class="sr-only">Open side menu</span>
                <svg
                  class="w-7 h-7 sm:h-6 sm:w-6 dark:filter-logo-dark filter-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            class="flex items-center justify-center sm:flex-grow sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center pt-1">
              <nuxt-link class="focus:outline-none" to="/">
                <Logo />
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex items-center justify-center flex-grow sm:flex-grow-0"
          >
            <div class="flex items-center h-full px-2 sm:px-6">
              <span class="relative inline-block">
                <nuxt-link
                  class="block p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none"
                  to="bag"
                >
                  <span class="sr-only">View shopping bag</span>
                  <svg
                    class="w-7 h-7 sm:h-6 sm:w-6 dark:filter-logo-dark filter-logo"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span
                    v-show="$store.state.bag.status"
                    :class="{
                      'opacity-0': bag.items.length == 0,
                      'opacity-100': bag.items.length > 0,
                    }"
                    class="absolute w-2 h-2 transition-all duration-300 bg-red-400 rounded-full animate-bounce top-1 right-1 ring-2 ring-pink-200"
                  ></span>
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
  computed: {
    bag() {
      return this.$store.state.bag
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$store.state.menu.open ? 'overflow-hidden h-full' : '',
      },
    }
  },
}
</script>

<style scoped>
/* TODO I need to find a better way to handle this stupid notch */
nav {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}
</style>
