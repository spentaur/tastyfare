<template>
  <div class="flex flex-col w-full mx-auto lg:flex-row max-w-screen-2xl">
    <div
      class="hidden w-full p-4 text-white bg-indigo-500 border-8 border-indigo-300 lg:block lg:shadow-2xl lg:ml-4 lg:w-1/3 dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl xl:w-1/4"
    >
      - allergen info needs to go somewhere
      <br />
      - recent orders
      <br />
      - tracker
      <br />
      - refresh on update
      <br />
      - theme color
      <br />
      - start working on drilling down pages
      <br />
      - this side is going to be recent orders, ads, tracker? news?
      <br />
      - i kinda wanna split this up.. into like food and drinks maybe or dinner,
      breakfast, lunch, drinks, sides, dessert
      <br />
      - i need to get a full menu written up
      <br />
      - uhhh
      <br />
      - i think i like this layout, but i might make it more like door dash,
      like instead of entrees - sides ++ i'll do like sandwiches -> view all
      pizza -> view all smoothies -> view all etc
      <br />
      - ^ so in order to do that, i need to have a menu fully fleshed out
      <br />
      - make buttons more consistent?
      <br />
      - i need some way to display locations? or have some feed back based on
      locations
    </div>
    <div class="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          name="search"
          class="block w-full py-2 pl-10 pr-3 font-semibold text-gray-400 placeholder-gray-400 transition-colors duration-300 bg-gray-200 border border-gray-200 rounded-full shadow focus:text-gray-800 dark:border-transparent dark:bg-gray-700 dark:focus:ring-gray-600 focus:ring-indigo-500 dark:focus:bg-white focus:bg-gray-50"
          placeholder="Search for Your Favorites"
          type="search"
        />
      </div>
      <div v-for="section in sections" :key="section.name">
        <div class="flex items-center mt-10">
          <div
            class="flex-grow text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
          >
            {{ section.name }}
          </div>
          <nuxt-link
            v-if="section.name != 'Desserts 🍪'"
            to="#"
            class="flex items-center justify-center font-bold text-gray-900 transition-all duration-300 bg-gray-300 rounded-full shadow dark:text-gray-300 dark:bg-gray-700 w-9 h-9 sm:hover:bg-indigo-600 sm:dark:bg-gray-700 sm:dark:hover:bg-gray-600 sm:bg-indigo-500 sm:px-3 sm:py-2 sm:h-auto sm:w-auto sm:text-pink-50"
          >
            <div class="hidden sm:block">See all</div>
            <svg
              class="w-4 h-4 sm:ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </nuxt-link>
        </div>
        <ul class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
          <li
            v-for="menuItem in section.data"
            :key="menuItem.name"
            class="flex flex-col col-span-1 text-center transition-all duration-300 card"
          >
            <button
              class="text-gray-900 transition duration-100 transform dark:text-gray-200"
              @click.prevent="$nuxt.$emit('open-modal', { menuItem })"
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
            </button>
          </li>
        </ul>
      </div>
      <div
        class="w-full mt-12 mb-2 text-lg font-bold text-center text-indigo-500 dark:text-indigo-400"
      >
        Feeling Lucky?
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="inline-flex items-center px-6 py-2 font-semibold transition-all duration-300 bg-indigo-500 rounded-full shadow text-pink-50 hover:bg-indigo-600"
        >
          Random Meal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bag: false,
      animated: false,
      clicked: '',
      sections: [
        {
          name: 'Drinks 🥤',
          data: [
            {
              imgUrl:
                'https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
              name: 'Smoothies',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              name: 'Coffees',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1527960392543-80cd0fa46382?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80',
              name: 'Soft Drinks',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80',
              name: 'Lemonade',
            },
          ],
        },
        {
          name: 'Entrées 🍽',
          data: [
            {
              imgUrl:
                'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
              name: 'Sandwiches',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              name: 'Burritos',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80',
              name: 'Pizzas',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              name: 'Burgers',
            },
          ],
        },
        {
          name: 'Sides 🍟',
          data: [
            {
              imgUrl:
                'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              name: 'Chicken Wings',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1594500449280-cd9ab7cb33db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80',
              name: 'Salads',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              name: 'French Fries',
            },
            {
              imgUrl:
                'https://www.thespruceeats.com/thmb/EjjrKgHSMofkEU7UCYbexw8goTY=/1500x844/smart/filters:no_upscale()/air-fryer-onion-rings-4771524-12-7434d703a21b47d28ebc88bca3c55498.jpg',
              name: 'Onion Rings',
            },
          ],
        },
        {
          name: 'Desserts 🍪',
          data: [
            {
              imgUrl:
                'https://images.unsplash.com/photo-1590080962330-747c6aba8028?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
              name: 'Ice Cream',
            },
            {
              imgUrl:
                'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
              name: 'Cookies',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.card:hover {
  img {
    @apply sm:shadow-xl scale-105;
  }
}
</style>
