<template>
  <li
    class="flex flex-col justify-center w-full col-span-1 p-2 mx-auto transition-all duration-300 border-8 border-indigo-200 shadow sm:shadow-2xl dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl"
  >
    <img
      :src="ad.img"
      class="object-cover object-center rounded-lg h-44"
      alt=""
    />
    <div class="flex items-center mt-2 mb-1">
      <img
        class="inline-block w-8 h-8 mr-2 rounded-full"
        :src="ad.avatar"
        alt=""
      />
      <div class="flex-grow text-lg font-extrabold text-shadow-sm">
        {{ ad.name }}
      </div>
      <div class="flex items-center text-sm text-gray-400 dark:text-gray-600">
        Ad
      </div>
    </div>
    <nuxt-link :to="ad.link" class="text-gray-500 dark:text-gray-400">
      {{ ad.description }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    ad: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
