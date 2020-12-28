<template>
  <div>
    <transition duration="300">
      <div v-show="$store.state.menu.open">
        <div class="fixed inset-0 z-40 flex">
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
                class="absolute inset-0 bg-gray-800 opacity-0 sm:opacity-75"
              ></div>
            </div>
          </transition>
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
              class="relative flex flex-col flex-1 w-full pt-2 pb-4 bg-gray-50 sm:shadow-2xl dark:bg-gray-700 sm:max-w-xs"
            >
              <transition
                enter-active-class="transition-opacity duration-300 ease-linear"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition-opacity duration-300 ease-linear"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div v-show="$store.state.menu.open" class="px-1 sm:px-3">
                  <div>
                    <button
                      class="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      @click="$store.commit('menu/toggle')"
                    >
                      <span class="sr-only">Close sidebar</span>
                      <!-- Heroicon name: x -->
                      <svg
                        class="w-6 h-6 text-gray-900 dark:text-gray-300"
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
                  <div class="px-5 py-2">
                    <button
                      class="text-indigo-200 hover:text-indigo-100 focus:outline-none"
                      @click.prevent="$store.commit('dark/toggle')"
                    >
                      <span class="sr-only">Dark Mode</span>
                      <svg
                        class="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </button>
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
  </div>
</template>
