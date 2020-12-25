<template>
  <div :class="{ dark: dark }">
    <div class="bg-gray-50 dark:bg-gray-800">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    dark() {
      return this.$store.state.dark.enabled
    },
  },
}
</script>
