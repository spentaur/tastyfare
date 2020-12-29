<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <transition duration="300">
      <div v-show="open" class="fixed inset-0 z-50 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen text-center sm:px-4 sm:pt-4 sm:pb-20 sm:block sm:p-0"
        >
          <transition name="overlay">
            <div
              v-show="open"
              class="fixed inset-0 transition-opacity"
              aria-hidden="true"
              @click="open = !open"
            >
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
          </transition>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <transition name="modal">
            <div
              v-show="open"
              class="inline-block px-3 pt-4 pb-3 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-t-3xl sm:rounded-lg sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div class="flex flex-row-reverse items-center justify-end">
                  <div
                    class="flex-grow text-xl font-semibold text-center text-gray-900 dark:text-gray-200 text-shadow-sm"
                  >
                    Your order
                  </div>
                  <button
                    class="absolute flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="open = !open"
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
                <div class="mt-3 text-center sm:mt-5">
                  <h3
                    id="modal-headline"
                    class="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur amet labore.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-full shadow-sm text-shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Checkout
                </button>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  created() {
    this.$nuxt.$on('open-modal', () => {
      this.open = !this.open
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('open-modal')
  },
  head() {
    return {
      bodyAttrs: {
        class: this.open ? 'overflow-hidden h-full' : '',
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
.overlay-enter-active,
.overlay-leave-active {
  @apply transition duration-300 ease-in-out;
}

.overlay-leave-to,
.overlay-enter {
  @apply opacity-0;
}

.overlay-enter-to,
.overlay-leave {
  @apply opacity-100;
}

.modal-enter-active,
.modal-leave-active {
  @apply ease-out duration-300;
}

.modal-leave-to,
.modal-enter {
  @apply opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95;
}

.modal-enter-to,
.modal-leave {
  @apply opacity-100 translate-y-0 sm:scale-100;
}
</style>
