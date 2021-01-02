<template>
  <div class="flex items-center justify-center text-center sm:p-0">
    <div
      class="relative flex flex-col flex-1 w-full px-3 pt-4 pb-6 bg-white dark:bg-gray-700 sm:max-w-xl"
    >
      <MenuItem :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const item = await $content(
      params.section.toLowerCase(),
      params.item.toLowerCase()
    )
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Item not found' })
      })

    return {
      item,
    }
  },
}
</script>
