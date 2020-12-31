<template>
  <div>
    <transition duration="300">
      <div
        v-show="$store.state.menu.open && $store.state.menu.name === name"
        class="fixed inset-0 z-10 flex sm:z-20"
        :class="{ 'flex-row-reverse': $store.state.menu.direction === 'right' }"
      >
        <transition name="overlay">
          <div
            v-show="$store.state.menu.open && $store.state.menu.name === name"
            class="fixed inset-0"
            aria-hidden="true"
            @click="$store.commit('menu/close')"
          >
            <div
              class="absolute inset-0 hidden bg-gray-500 opacity-75 sm:block dark:bg-gray-800"
            ></div>
          </div>
        </transition>
        <transition :name="`slide-${$store.state.menu.direction}`">
          <div
            v-show="$store.state.menu.open && $store.state.menu.name === name"
            class="relative flex flex-col flex-1 w-full px-3 pt-4 pb-6 bg-white sm:shadow-2xl dark:bg-gray-800 sm:max-w-xs"
            @mousemove="touchMove"
            @touchmove="touchMove"
          >
            <div class="">
              <!-- <div
                :class="{
                  'right-0 -mr-16': $store.state.menu.direction === 'left',
                  'left-0 -ml-16': $store.state.menu.direction === 'right',
                }"
                class="absolute top-0 hidden pt-2 sm:block"
              >
                <button
                  class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span class="sr-only">Close sidebar</span>
                  Heroicon name: x
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
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div> -->
              <div class="p-2">
                {{ touchX }}
                <slot></slot>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'right',
    },
  },
  data() {
    return {
      touchX: 0,
      touchY: 0,
    }
  },
  methods: {
    touchMove(e) {
      this.touchX = e.clientX
      this.touchY = e.clientY
    },
  },
}
</script>

<style lang="postcss" scoped>
.overlay-enter-active,
.overlay-leave-active {
  @apply transition-opacity duration-300;
}

.overlay-leave-to,
.overlay-enter {
  @apply opacity-0;
}

.overlay-enter-to,
.overlay-leave {
  @apply opacity-100;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-leave-active,
.slide-left-enter-active {
  @apply transition duration-300 ease-in-out transform-gpu;
}

.slide-right-enter,
.slide-right-leave-to {
  @apply translate-x-full;
}

.slide-right-enter-to,
.slide-right-leave {
  @apply translate-x-0;
}

.slide-left-enter,
.slide-left-leave-to {
  @apply -translate-x-full;
}

.slide-left-enter-to,
.slide-left-leave {
  @apply -translate-x-0;
}
</style>
