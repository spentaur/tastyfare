<template>
  <nav
    class="fixed bottom-0 z-10 w-full border-t-2 border-gray-200 dark:border-gray-800 dark:bg-gray-700 bg-gray-50 sm:border-t-0 sm:border-b sm:shadow-md sm:bottom-auto"
  >
    <!-- menu on mobile? -->
    <div :class="{ block: open, hidden: !open }" class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <a
          href="#"
          class="block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
          >Dashboard</a
        >
      </div>
    </div>
    <!-- end of mobile menu? -->
    <div class="mx-auto max-w-screen-2xl">
      <div class="relative flex justify-between h-12 sm:h-14">
        <div
          class="flex items-center justify-center flex-grow sm:justify-start"
        >
          <div class="flex items-center h-full px-2 sm:px-6">
            <button
              id="side-menu"
              class="p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-haspopup="true"
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
        <div class="flex items-center justify-center flex-grow sm:flex-grow-0">
          <div class="flex items-center h-full px-2 sm:px-6">
            <span class="relative inline-block">
              <button
                class="p-1 text-indigo-500 rounded-full dark:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      open: false,
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
