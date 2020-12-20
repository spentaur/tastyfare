<template>
  <hr
    class="border-gray-200 my-12 text-center text-lg md:text-2xl"
    :data-hr-content="text"
    style="--trans-x: -50%; --trans-y: -50%"
  />
</template>

<style scoped lang="postcss">
hr::after {
  @apply font-bold bg-gray-50 text-indigo-500 text-shadow-sep px-4 absolute;
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
