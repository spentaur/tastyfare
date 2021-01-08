<template>
  <div>
    <transition duration="300">
      <div
        v-show="$store.state.menu.open && $store.state.menu.name === name"
        ref="menu"
        tabindex="0"
        class="fixed inset-0 z-10 flex sm:z-20"
        :class="{ 'flex-row-reverse': $store.state.menu.direction === 'right' }"
        @keydown.esc="$store.commit('menu/close')"
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
          >
            <div class="">
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
  computed: {
    open() {
      return this.$store.state.menu.open
    },
  },
  watch: {
    open(newValue, oldValue) {
      if (this.$store.state.menu.name === this.name) {
        setTimeout(() => {
          this.$refs.menu.scrollTop = 0
          this.$refs.menu.focus()
        }, 100)
      }
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
  @apply sm:transition sm:duration-300 sm:ease-in-out sm:transform-gpu;
}

.slide-right-enter,
.slide-right-leave-to {
  @apply sm:translate-x-full;
}

.slide-right-enter-to,
.slide-right-leave {
  @apply sm:translate-x-0;
}

.slide-left-enter,
.slide-left-leave-to {
  @apply sm:-translate-x-full;
}

.slide-left-enter-to,
.slide-left-leave {
  @apply sm:-translate-x-0;
}
</style>
