<template>
  <hr
    class="border-white sm:border-gray-100 sm:border-2 my-16 text-center text-xl"
    :data-hr-content="text"
    style="--trans-x: -50%; --trans-y: -50%"
  />
</template>

<style scoped lang="postcss">
hr::after {
  @apply font-bold bg-white sm:bg-gray-100 text-gray-600 py-1 sm:px-4 absolute w-max-content sm:w-auto;
  content: attr(data-hr-content);
  transform: translate(var(--trans-x), var(--trans-y));
}
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Break',
    },
  },
}
</script>
