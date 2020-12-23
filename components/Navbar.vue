<template>
  <nav
    class="fixed w-full bg-gray-50 z-10 border-gray-200 border-t-2 sm:border-t-0 sm:border-b sm:shadow bottom-0 sm:bottom-auto"
  >
    <div :class="{ block: open, hidden: !open }" class="sm:hidden">
      <div class="pt-2 pb-4 space-y-1">
        <a
          href="#"
          class="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >Dashboard</a
        >
      </div>
    </div>
    <div class="max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-12 sm:h-14">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="p-1 rounded-full text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-expanded="false"
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
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
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center pt-1">
            <Logo class="h-6 lg:h-7 w-auto" />
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <span class="inline-block relative">
            <button
              class="p-1 rounded-full text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View shopping bag</span>
              <svg
                class="h-6 w-6"
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
              class="absolute top-0 right-0 h-2 w-2 rounded-full ring-2 ring-white bg-red-400"
            ></span>
          </span>

          <div class="hidden sm:block ml-3 relative">
            <div>
              <button
                id="user-menu"
                class="p-1 rounded-full text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-haspopup="true"
              >
                <span class="sr-only">Open user menu</span>
                <svg
                  class="h-6 w-6"
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
nav {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
}
</style>
