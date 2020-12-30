<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div>
    <transition duration="500">
      <div v-show="open" class="fixed inset-0 z-50 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen text-center sm:px-4 sm:pt-4 sm:pb-20 sm:block sm:p-0"
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
              ref="modal"
              class="inline-block w-full px-3 pt-4 pb-6 overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl rounded-t-3xl sm:rounded-lg sm:my-2 sm:align-middle sm:max-w-lg sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div id="modal">
                <div>
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
                        class="object-cover w-full mx-auto transition-all duration-500 bg-transparent shadow-md rounded-xl transform-none sm:transform-gpu sm:w-44 h-44"
                        :src="menuItem.imgUrl"
                        alt=""
                      />
                      <!-- <transition name="fade" mode="out-in">
                        <img
                          v-if="menuItem"
                          class="object-cover w-full mx-auto transition-all duration-500 bg-transparent shadow-md rounded-xl transform-none sm:transform-gpu sm:w-44 h-44"
                          :src="menuItem.imgUrl"
                          alt=""
                        />
                        <div
                          v-else
                          class="mx-auto bg-indigo-200 w-44 animate-pulse h-44 rounded-xl"
                        ></div>
                      </transition> -->
                    </div>
                    <div>stuff</div>
                  </div>
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
      this.$refs.modal.scrollIntoView()
      this.menuItem = menuItem
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
#modal {
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
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
