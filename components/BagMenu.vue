<template>
  <Menu name="bag">
    <div class="text-gray-900 dark:text-gray-200">
      <div>{{ $store.state.bag.items }}</div>
      <button
        type="button"
        class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full shadow focus:outline-none text-pink-50 hover:bg-indigo-600"
        @click.prevent="$store.commit('bag/empty')"
      >
        Empty Cart
      </button>
    </div>
  </Menu>
</template>
