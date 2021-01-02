<template>
  <div>
    <div class="">
      <transition name="fade" mode="out-in">
        <div
          v-if="item"
          class="flex-grow text-2xl font-semibold text-center text-gray-900 dark:text-gray-200 text-shadow-sm"
        >
          {{ item.name }}
        </div>
        <div
          v-else
          class="h-6 mx-auto bg-indigo-200 rounded-xl w-36 animate-pulse"
        ></div>
      </transition>
      <div class="mt-4">
        <img
          v-if="item"
          class="object-cover w-full mx-auto transition-all duration-300 bg-transparent shadow-md rounded-xl sm:w-auto h-60"
          :src="item.imgUrl"
          alt=""
        />
      </div>
      <div v-if="item.name === 'Salads'">
        <div class="w-full my-3 bg-red-200 h-96">test</div>
        <div class="w-full my-3 bg-green-200 h-96">test</div>
      </div>
      <div v-else>stuff</div>
    </div>
    <div class="mt-5 sm:mt-6">
      <button
        type="button"
        :class="{
          'animate-pulse bg-indigo-200': !item,
          'bg-indigo-500': item,
        }"
        class="inline-flex items-center justify-center w-full h-12 px-6 py-2 text-lg font-semibold text-center transition-all duration-300 rounded-full shadow text-pink-50 hover:bg-indigo-600"
        @click="addToBag"
      >
        {{ item ? 'Add to order' : '' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToBag() {
      this.$store.commit('bag/add', this.item.name)
      this.$store.commit('modal/close')
    },
  },
}
</script>
