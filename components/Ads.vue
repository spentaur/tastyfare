<template>
  <ul class="grid grid-cols-1 gap-4 mt-10 mb-16 sm:grid-cols-3">
    <li
      v-for="ad in ads"
      :key="ad.name"
      class="flex flex-col justify-center w-full col-span-1 p-2 mx-auto transition-all duration-300 border-8 border-indigo-200 shadow-md sm:shadow-lg dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl"
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
      <a :href="ad.link" class="text-gray-500 dark:text-gray-400">
        {{ ad.description }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    ads: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>
