<template>
  <div
    v-show="$store.state.dark.status"
    :class="{
      dark: $store.state.dark.enabled,
    }"
  >
    <div
      class="flex flex-col min-h-screen transition-all duration-200 bg-white select-none dark:bg-gray-800"
    >
      <Modal />
      <LeftMenu />
      <BagMenu />
      <Navbar />
      <Nuxt
        v-touch:swipe.right="
          () => {
            $store.commit('menu/open', ['left', 'main'])
          }
        "
        v-touch:swipe.left="
          () => {
            $store.commit('menu/open', ['right', 'bag'])
          }
        "
        :class="{
          'translate-x-80 transform-gpu':
            $store.state.menu.open && $store.state.menu.direction === 'left',
          '-translate-x-80 transform-gpu':
            $store.state.menu.open && $store.state.menu.direction === 'right',
        }"
        class="flex-grow pt-6 pb-32 transition-all duration-300 bg-white dark:bg-gray-800 sm:pb-12 sm:pt-22"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    }
  },
  computed: {
    opened() {
      return this.$store.state.menu.open || this.modalOpen
    },
  },
  created() {
    this.$nuxt.$on('open-modal', () => {
      this.modalOpen = true
    })
    this.$nuxt.$on('close-modal', () => {
      this.modalOpen = false
    })
  },
  methods: {
    close() {
      if (this.modalOpen) {
        this.$nuxt.$emit('close-modal')
      }
      if (this.$store.state.menu.open) {
        this.$store.commit('menu/close')
      }
    },
  },
  head() {
    return {
      bodyAttrs: {
        class: this.opened ? 'overflow-hidden h-full' : '',
      },
    }
  },
}
</script>
