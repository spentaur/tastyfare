<template>
  <hr
    class="border-indigo-200 border-2 border-dashed my-16 text-center text-lg md:text-xl"
    :data-hr-content="text"
    style="--trans-x: -50%; --trans-y: -50%"
  />
</template>

<style scoped lang="postcss">
hr::after {
  @apply font-bold bg-indigo-500 shadow text-white border text-shadow-sep rounded-md border-gray-200 py-1 px-4 absolute;
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
