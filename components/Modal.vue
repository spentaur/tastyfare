<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <transition duration="500">
      <div v-show="open" ref="modal" class="fixed inset-0 z-50 overflow-y-auto">
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
              <div class="absolute inset-0 bg-gray-500 opacity-90"></div>
            </div>
          </transition>

          <transition name="modal">
            <div
              v-show="open"
              class="relative flex flex-col flex-1 w-full px-3 pt-4 pb-6 bg-white rounded-md sm:shadow-2xl dark:bg-gray-700 sm:max-w-xl"
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
                <div class="">
                  <transition name="fade" mode="out-in">
                    <div
                      v-if="menuItem"
                      class="flex-grow text-2xl font-semibold text-center text-gray-900 dark:text-gray-200 text-shadow-sm"
                    >
                      {{ menuItem.name }}
                    </div>
                    <div
                      v-else
                      class="h-6 mx-auto bg-indigo-200 rounded-xl w-36 animate-pulse"
                    ></div>
                  </transition>
                  <div class="mt-4">
                    <img
                      v-if="menuItem"
                      class="object-cover w-full mx-auto transition-all duration-500 bg-transparent shadow-md rounded-xl sm:w-auto h-60"
                      :src="menuItem.imgUrl"
                      alt=""
                    />
                  </div>
                  <div v-if="menuItem.name === 'Salads'">
                    <div class="w-full my-3 bg-red-200 h-96">test</div>
                    <div class="w-full my-3 bg-green-200 h-96">test</div>
                  </div>
                  <div v-else>stuff</div>
                </div>
                <div class="mt-5 sm:mt-6">
                  <button
                    type="button"
                    :class="{
                      'animate-pulse bg-indigo-200': !menuItem,
                      'bg-indigo-500': menuItem,
                    }"
                    class="inline-flex items-center justify-center w-full h-12 px-6 py-2 text-lg font-semibold text-center transition-all duration-300 rounded-full shadow text-pink-50 hover:bg-indigo-600"
                    @click="addToBag"
                  >
                    {{ menuItem ? 'Add to order' : '' }}
                  </button>
                </div>
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
      setTimeout(() => (this.$refs.modal.scrollTop = 0), 0)
    })
    this.$nuxt.$on('close-modal', () => {
      this.open = false
      setTimeout(() => (this.menuItem = false), 500)
    })
  },
  beforeDestroy() {
    this.$nuxt.$off('open-modal')
    this.$nuxt.$off('close-modal')
    this.menuItem = false
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
#modal {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  @apply px-2 pt-2 sm:pt-4 pb-12;
}
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
  @apply transition duration-500 ease-in-out transform-gpu;
}

.modal-enter,
.modal-leave-to {
  @apply opacity-0;
}

.modal-leave-to {
  @apply scale-110;
}

.modal-enter {
  @apply scale-75;
}

.modal-enter-to,
.modal-leave {
  @apply opacity-100 scale-100;
}
</style>
