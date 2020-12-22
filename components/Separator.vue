<template>
  <hr
    class="border-indigo-100 border-2 border-dashed my-16 text-center md:text-xl"
    :data-hr-content="text"
    style="--trans-x: -50%; --trans-y: -50%"
  />
</template>

<style scoped lang="postcss">
hr::after {
  @apply font-bold bg-indigo-500 shadow-lg text-gray-100 rounded-md py-1 px-4 absolute;
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
