<template>
  <div class="flex items-center justify-center w-full h-full bg-green-100">
    {{ $route.params.item }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content, route, error }) {
    const items = await $content('drinks')
      .where({ 'items.slug': 'coffees' })
      .fetch()
    return {
      items,
    }
  },
}
</script>
