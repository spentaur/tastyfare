<template>
  <div class="flex items-center justify-center w-full h-full bg-green-100">
    {{ section.title }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    const section = await $content('sections', params.section.toLowerCase())
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Section not found' })
      })
    const items = await $content('menu')
      .where({ section: section.slug })
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Items not found' })
      })

    return {
      items,
      section,
    }
  },
  transition: {
    name: 'page-slide-left',
  },
}
</script>
