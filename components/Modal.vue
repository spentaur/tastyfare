<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <transition duration="300" @after-leave="menuItem = {}">
      <div
        v-show="open"
        ref="modal"
        tabindex="0"
        class="fixed inset-0 z-20 overflow-y-auto"
        @keydown.esc="$nuxt.$emit('close-modal')"
      >
        <div
          id="modal"
          class="flex items-center justify-center min-h-screen text-center sm:p-0"
        >
          <transition name="overlay">
            <div
              v-show="open"
              class="fixed inset-0 transition-opacity"
              aria-hidden="true"
              @click="$nuxt.$emit('close-modal')"
            >
              <div
                class="absolute inset-0 bg-gray-500 opacity-75 dark:bg-gray-800"
              ></div>
            </div>
          </transition>

          <transition name="modal">
            <div
              v-show="open"
              class="relative flex flex-col flex-1 w-full px-3 pt-4 pb-6 bg-white rounded-xl sm:shadow-2xl dark:bg-gray-700 sm:max-w-xl"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div>
                <div>
                  <button
                    class="flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="$nuxt.$emit('close-modal')"
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
                <MenuItem :item="menuItem" />
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
      menuItem: {},
    }
  },
  created() {
    this.$nuxt.$on('open-modal', (menuItem) => {
      this.open = true
      this.menuItem = menuItem
      setTimeout(() => {
        this.$refs.modal.scrollTop = 0
        this.$refs.modal.focus()
      }, 100)
    })
    this.$nuxt.$on('close-modal', () => this.closeModal())
  },
  beforeDestroy() {
    this.$nuxt.$off('open-modal')
    this.$nuxt.$off('close-modal')
    this.menuItem = {}
  },
  methods: {
    closeModal() {
      this.open = false
      window.history.pushState({}, null, this.$route.path)
    },
  },
}
</script>

<style lang="postcss" scoped>
#modal {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  @apply px-2 pt-2 sm:pt-4 pb-12;
}
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
  @apply transition duration-300 ease-in-out transform-gpu;
}

.modal-enter,
.modal-leave-to {
  @apply opacity-0;
}

.modal-leave-to {
  @apply scale-125;
}

.modal-enter {
  @apply scale-75;
}

.modal-enter-to,
.modal-leave {
  @apply opacity-100 scale-100;
}
</style>
