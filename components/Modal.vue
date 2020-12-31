<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <transition duration="500">
      <div v-show="open" class="fixed inset-0 z-50 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <transition name="overlay">
            <div
              v-show="open"
              class="fixed inset-0 transition-opacity"
              aria-hidden="true"
              @click="$nuxt.$emit('close-modal')"
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
              class="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div
                  class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
                >
                  <!-- Heroicon name: check -->
                  <svg
                    class="w-6 h-6 text-green-600"
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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
                  class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Go back to dashboard
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
      menuItem: false,
    }
  },
  created() {
    this.$nuxt.$on('open-modal', ({ menuItem }) => {
      this.open = true
      this.menuItem = menuItem
      // setTimeout(() => (this.$refs.modal.scrollTop = 0), 0)
    })
    this.$nuxt.$on('close-modal', () => {
      this.open = false
      setTimeout(() => (this.menuItem = false), 600)
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('open-modal')
    this.$nuxt.$off('close-modal')
    this.menuItem = {}
  },
  methods: {
    addToBag() {
      this.$store.commit('bag/add', this.menuItem.name)
      this.$nuxt.$emit('close-modal', this.menuItem)
    },
  },
}
</script>

<style lang="postcss" scoped>
.overlay-enter-active,
.overlay-leave-active {
  @apply transition duration-500 ease-in-out;
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
  @apply transition duration-500 ease-in-out transform;
}

.modal-leave-to,
.modal-enter {
  @apply sm:opacity-0 translate-y-full sm:translate-y-0 sm:scale-95;
}

.modal-enter-to,
.modal-leave {
  @apply sm:opacity-100 translate-y-0 sm:scale-100;
}
</style>
