<template>
  <ul
    class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5"
  >
    <li
      v-for="menuItem in items"
      :key="menuItem.name"
      class="flex flex-col col-span-1 text-center transition-all duration-300 card"
    >
      <nuxt-link
        :to="{
          name: 'section-item',
          params: {
            section: section.slug || menuItem.section[0],
            item: menuItem.slug,
          },
        }"
        class="text-gray-900 transition duration-100 transform dark:text-gray-200"
      >
        <div class="flex flex-col flex-1 sm:p-4">
          <img
            class="object-cover w-full mx-auto transition duration-100 bg-transparent shadow-md rounded-xl transform-gpu sm:w-44 h-44"
            :src="menuItem.imgUrl"
            alt=""
          />
          <span href="#" class="mt-4 font-extrabold text-shadow">{{
            menuItem.name
          }}</span>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return []
      },
    },
    section: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>
