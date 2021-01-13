<template>
  <div>
    <nav class="fixed bottom-0 z-10 w-screen portrait sm:top-0 sm:bottom-auto">
      <div
        :class="{
          'sm:translate-x-80 sm:transform':
            $store.state.menu.open && $store.state.menu.direction === 'left',
          'sm:-translate-x-80 sm:transform':
            $store.state.menu.open && $store.state.menu.direction === 'right',
        }"
        class="mx-auto transition-all duration-300 max-w-screen-2xl"
      >
        <div class="relative flex justify-between h-12 sm:h-14">
          <div
            class="flex items-center justify-center flex-grow sm:justify-start"
          >
            <div class="flex items-center h-full px-2 sm:px-6">
              <nuxt-link
                id="side-menu"
                :to="{ name: 'menu' }"
                event
                class="block p-2 text-indigo-500 transition-opacity duration-300 rounded-full nav-button dark:text-indigo-200 focus:outline-none"
                aria-haspopup="true"
                @click.native="$store.commit('menu/open', ['left', 'main'])"
              >
                <span class="sr-only">Open side menu</span>
                <svg
                  :class="[
                    ($store.state.menu.name != 'bag') &
                      $store.state.menu.open || $route.name === 'menu'
                      ? 'opacity-100'
                      : 'opacity-50',
                  ]"
                  class="w-7 h-7 sm:h-6 sm:opacity-100 sm:w-6 dark:filter-logo-dark filter-logo"
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
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex items-center justify-center sm:flex-grow sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center pt-1">
              <nuxt-link
                :to="{ name: 'index' }"
                event
                class="p-2 nav-button focus:outline-none sm:opacity-100"
                :class="[
                  $store.state.menu.open ||
                  $route.name === 'bag' ||
                  $route.name === 'menu'
                    ? 'opacity-50'
                    : 'opacity-100',
                ]"
                @click.native="homeClick"
              >
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
                  id="bag"
                  :to="{ name: 'bag' }"
                  event
                  class="block p-2 text-indigo-500 transition-opacity duration-300 rounded-full nav-button dark:text-indigo-200 focus:outline-none"
                  aria-haspopup="true"
                  @click.native="$store.commit('menu/open', ['right', 'bag'])"
                >
                  <span class="sr-only">View shopping bag</span>
                  <svg
                    :class="[
                      ($store.state.menu.name != 'main') &
                        $store.state.menu.open || $route.name === 'bag'
                        ? 'opacity-100'
                        : 'opacity-50',
                    ]"
                    class="w-7 h-7 sm:h-6 sm:opacity-100 sm:w-6 dark:filter-logo-dark filter-logo"
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
                    class="absolute top-1.5 right-1.5 w-2 h-2 transition-all duration-300 bg-red-400 rounded-full ring-2 ring-pink-200"
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
      portrait: true,
    }
  },
  computed: {
    bag() {
      return this.$store.state.bag
    },
  },
  methods: {
    homeClick() {
      if (!this.$store.state.menu.open) {
        this.$router.push('/')
      }
      this.$store.commit('menu/close')
    },
  },
}
</script>

<style scoped>
.portrait {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
/* TODO I need to find a better way to handle this stupid notch */
nav {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}
.dark nav {
  background-color: rgba(31, 41, 55, 0.9);
}
</style>
