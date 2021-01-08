<template>
  <div>
    <Bag />
  </div>
</template>

<script>
export default {
  middleware({ store }) {
    store.commit('search/hideSearch')
  },
  transition: {
    name: 'page-slide-right',
  },
}
</script>
