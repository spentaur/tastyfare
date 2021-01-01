<template>
  <div class="flex items-center justify-center w-full h-full bg-green-100">
    {{ $route.params.section }}
  </div>
</template>

<script>
export default {
  transition: {
    name: 'page-slide-left',
  },
}
</script>
