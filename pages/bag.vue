<template>
  <div>
    {{ $store.state.bag.items }}
    <div>
      <button
        type="button"
        class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full shadow text-pink-50 hover:bg-indigo-600"
        @click.prevent="$store.commit('bag/empty')"
      >
        Empty Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'slide-right',
    mode: 'out-in',
  },
}
</script>
