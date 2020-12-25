<template>
  <!-- TODO no scroll when menu is open -->
  <div @keyup.esc="$store.commit('menu/toggle')">
    <transition duration="300">
      <div v-show="$store.state.menu.open" class="">
        <div class="fixed inset-0 z-40 flex">
          <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
          -->
          <transition
            enter-active-class="transition-opacity duration-300 ease-linear"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-linear"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="$store.state.menu.open"
              class="fixed inset-0"
              aria-hidden="true"
              @click="$store.commit('menu/toggle')"
            >
              <div
                class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-800 sm:bg-gray-600"
              ></div>
            </div>
          </transition>
          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
          <transition
            enter-active-class="transition duration-300 ease-in-out transform"
            enter-class="translate-y-full sm:translate-y-0 sm:-translate-x-full"
            enter-to-class="-translate-y-0 sm:translate-x-0"
            leave-active-class="transition duration-300 ease-in-out transform"
            leave-class="-translate-y-0 sm:translate-x-0"
            leave-to-class="translate-y-full sm:translate-y-0 sm:-translate-x-full"
          >
            <div
              v-show="$store.state.menu.open"
              class="relative flex flex-col flex-1 w-full pt-1 pb-4 mt-2 bg-white rounded-t-lg sm:mt-0 sm:pt-5 sm:rounded-none sm:max-w-xs"
            >
              <div class="absolute top-0 right-0 hidden pt-2 -mr-12 sm:block">
                <transition
                  enter-active-class="transition-opacity duration-100 ease-linear"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-opacity duration-100 ease-linear"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <button
                    v-show="$store.state.menu.open"
                    class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="$store.commit('menu/toggle')"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </transition>
              </div>
              <transition
                enter-active-class="transition-opacity duration-300 ease-linear"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300 ease-linear"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-show="$store.state.menu.open" class="sm:px-4">
                  <div class="sm:hidden">
                    <button
                      class="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      @click="$store.commit('menu/toggle')"
                    >
                      <span class="sr-only">Close sidebar</span>
                      <!-- Heroicon name: x -->
                      <svg
                        class="w-6 h-6 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    class="px-3 text-3xl font-extrabold text-gray-900 text-shadow"
                  >
                    Menu
                  </div>
                </div>
              </transition>
            </div>
          </transition>
          <div class="flex-shrink-0 hidden sm:block w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </transition>

    <nav
      class="fixed bottom-0 z-10 w-full border-t-2 border-gray-200 dark:border-gray-800 dark:bg-gray-700 bg-gray-50 sm:border-t-0 sm:border-b sm:shadow-md sm:bottom-auto"
    >
      <div class="mx-auto max-w-screen-2xl">
        <div class="relative flex justify-between h-12 sm:h-14">
          <div
            class="flex items-center justify-center flex-grow sm:justify-start"
          >
            <div class="flex items-center h-full px-2 sm:px-6">
              <button
                id="side-menu"
                class="p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none"
                aria-haspopup="true"
                @click="$store.commit('menu/toggle')"
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
                    d="M4 6h16M4 12h16M4 18h16"
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
                <button
                  class="p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none"
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
                    :class="{ 'opacity-0': !bag, 'opacity-100': bag }"
                    class="absolute w-2 h-2 transition-all duration-300 bg-red-400 rounded-full top-1 right-1 ring-2 ring-pink-200"
                  ></span>
                </button>
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
  props: {
    bag: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menu: false,
    }
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
