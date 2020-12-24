<template>
  <nav
    class="fixed bottom-0 z-10 w-full border-t-2 border-gray-200 bg-gray-50 sm:border-t-0 sm:border-b sm:shadow sm:bottom-auto"
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
    <div class="px-2 mx-auto max-w-screen-2xl poof sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-12 sm:h-14">
        <div class="flex items-center justify-center flex-grow sm:hidden">
          <button
            class="p-1 text-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-expanded="false"
            @click="open = !open"
          >
            <span class="sr-only">Open user menu</span>
            <svg
              class="h-7 w-7 sm:h-6 sm:w-6 filter-logo"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex items-center justify-center sm:flex-grow sm:items-stretch sm:justify-start"
        >
          <div class="flex items-center pt-1">
            <nuxt-link to="/">
              <Logo />
            </nuxt-link>
          </div>
        </div>
        <div
          class="flex items-center justify-center flex-grow sm:flex-grow-0 sm:ml-6 sm:pr-0"
        >
          <span class="relative inline-block">
            <button
              class="p-1 text-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View shopping bag</span>
              <svg
                class="h-7 w-7 sm:h-6 sm:w-6 filter-logo"
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
            </button>
            <span
              :class="{ hidden: !bag, block: bag }"
              class="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full ring-2 ring-white"
            ></span>
          </span>

          <div class="relative hidden ml-3 sm:block">
            <div>
              <button
                id="user-menu"
                class="p-1 text-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <svg
                  class="h-7 w-7 sm:h-6 sm:w-6 filter-logo"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
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
.poof {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
