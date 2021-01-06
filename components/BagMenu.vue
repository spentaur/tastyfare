<template>
  <Menu name="bag">
    <div class="main">
      <div
        class="text-xl font-semibold text-gray-900 dark:text-gray-200 text-shadow-sm"
      >
        Your order
      </div>
      <div class="text-gray-900 dark:text-gray-200">
        <div>{{ $store.state.bag.items }}</div>
        <button
          type="button"
          class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full dark:text-gray-300 dark:bg-gray-700 shadow-logo dark:shadow-logo-dark text-pink-50 sm:dark:hover:bg-gray-600 hover:bg-indigo-600"
          @click.prevent="$store.commit('bag/empty')"
        >
          Empty Cart
        </button>
      </div>
    </div>
  </Menu>
</template>
