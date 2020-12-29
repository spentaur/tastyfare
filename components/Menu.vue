<template>
  <div>
    <transition duration="300">
      <div
        v-show="$store.state.menu.open && $store.state.menu.name === name"
        class="fixed inset-0 z-40 flex"
        :class="{ 'flex-row-reverse': $store.state.menu.direction === 'right' }"
      >
        <transition name="overlay">
          <div
            v-show="$store.state.menu.open && $store.state.menu.name === name"
            class="fixed inset-0"
            aria-hidden="true"
            @click="$store.commit('menu/toggle')"
          >
            <div
              class="absolute inset-0 bg-black sm:bg-gray-500 sm:opacity-75"
            ></div>
          </div>
        </transition>
        <transition :name="`slide-${$store.state.menu.direction}`">
          <div
            v-show="$store.state.menu.open && $store.state.menu.name === name"
            class="relative flex flex-col flex-1 w-full pt-2 pb-4 bg-white rounded-t-3xl sm:rounded-none sm:shadow-2xl dark:bg-gray-700 sm:max-w-xs"
          >
            <div
              v-show="$store.state.menu.open && $store.state.menu.name === name"
              class="px-1 sm:px-3"
            >
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
              <div class="p-2">
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

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-leave-active,
.slide-left-enter-active {
  @apply transition duration-300 ease-in-out transform;
}

.slide-left-enter,
.slide-left-leave-to {
  @apply translate-y-full sm:translate-y-0 sm:-translate-x-full;
}

.slide-right-enter,
.slide-right-leave-to {
  @apply translate-y-full sm:translate-y-0 sm:translate-x-full;
}

.slide-right-enter-to,
.slide-right-leave {
  @apply -translate-y-0 sm:translate-x-0;
}
</style>
