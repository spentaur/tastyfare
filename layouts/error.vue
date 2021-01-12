<template>
  <div class="w-full max-w-lg trans">
    <div class="flex flex-col mx-auto">
      <span
        class="mb-12 text-4xl font-hairline leading-none text-center text-gray-700"
      >
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  head() {
    return {
      title: 'Error',
    }
  },
  layout: 'default', // you can set a custom layout for the error page
}
</script>
