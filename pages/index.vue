<template>
  <div class="flex flex-col min-h-screen">
    <Navbar :bag="bag" />
    <div class="max-w-screen-2xl sm:pt-22 mx-auto lg:flex lg:flex-row w-full">
      <!-- left side -->
      <div
        class="lg:ml-4 mb-8 w-full hidden lg:block border-8 shadow-2xl border-indigo-300 text-white sm:rounded-2xl bg-indigo-500 lg:w-1/3 xl:w-1/4 p-4"
      >
        - alergen info needs to go somewhere
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
        - i kinda wanna split this up.. into like food and drinks maybe or
        dinner, breakfast, lunch, drinks, sides, dessert
        <!-- <svg
          class="rounded border-2 border-dashed border-gray-300 bg-white h-full w-full text-gray-200"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vector-effect="non-scaling-stroke"
            stroke-width="4"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg> -->
      </div>
      <!-- left side -->
      <div class="max-w-6xl mt-6 mb-6 sm:mt-0 px-2 sm:px-6 lg:px-8 w-full">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
          >
            <!-- Heroicon name: search -->
            <svg
              class="h-5 w-5 text-gray-400"
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
            class="focus:ring-indigo-500 bg-gray-100 border border-transparent focus:bg-white sm:bg-white shadow rounded-full block w-full font-semibold border-gray-200 py-2 pl-10 pr-3"
            placeholder="Search for Your Favorites"
            type="search"
          />
        </div>
        <div class="mt-6 flex items-center">
          <div
            class="flex-grow text-shadow-sm font-extrabold text-gray-900 text-3xl"
          >
            Drinks 🥤
          </div>
          <nuxt-link
            to="#"
            class="text-indigo-500 flex text-lg items-center font-bold"
          >
            View all
            <svg
              class="h-4 w-4 ml-2"
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
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 mt-2">
          <li
            v-for="menuItem in drinks"
            :key="menuItem.name"
            class="border border-transparent col-span-1 sm:shadow flex flex-col text-center sm:bg-white rounded"
          >
            <a href="#" class="text-gray-900" @click.prevent="bag = !bag">
              <div class="flex-1 flex flex-col sm:p-4">
                <img
                  class="w-full h-28 sm:w-44 sm:h-44 shadow-md sm:ring-2 ring-gray-100 object-cover bg-indigo-50 flex-shrink-0 mx-auto rounded"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <span href="#" class="mt-4 font-extrabold text-shadow">{{
                  menuItem.name
                }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="mt-10 flex items-center">
          <div
            class="flex-grow text-shadow-sm font-extrabold text-gray-900 text-3xl"
          >
            Entrées 🍽
          </div>
          <nuxt-link
            to="test"
            class="text-indigo-500 flex text-lg items-center font-bold"
          >
            View all
            <svg
              class="h-4 w-4 ml-2"
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
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 mt-2">
          <li
            v-for="menuItem in meals"
            :key="menuItem.name"
            class="border border-transparent col-span-1 sm:shadow flex flex-col text-center sm:bg-white rounded"
          >
            <a href="#" class="text-gray-900" @click.prevent="bag = !bag">
              <div class="flex-1 flex flex-col sm:p-4">
                <img
                  class="w-full h-28 sm:w-44 sm:h-44 shadow-md sm:ring-2 ring-gray-100 object-cover bg-indigo-50 flex-shrink-0 mx-auto rounded"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <span href="#" class="mt-4 font-extrabold text-shadow">{{
                  menuItem.name
                }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="mt-6 flex items-center">
          <div
            class="flex-grow text-shadow-sm font-extrabold text-gray-900 text-3xl"
          >
            Sides 🍟
          </div>
          <nuxt-link
            to="#"
            class="text-indigo-500 text-lg flex items-center font-bold"
          >
            View all
            <svg
              class="h-4 w-4 ml-2"
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
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 mt-2">
          <li
            v-for="menuItem in sides"
            :key="menuItem.name"
            class="border border-transparent col-span-1 sm:shadow flex flex-col text-center sm:bg-white rounded"
          >
            <a href="#" class="text-gray-900" @click.prevent="bag = !bag">
              <div class="flex-1 flex flex-col sm:p-4">
                <img
                  class="w-full h-28 sm:w-44 sm:h-44 shadow-md sm:ring-2 ring-gray-100 object-cover bg-indigo-50 flex-shrink-0 mx-auto rounded"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <span href="#" class="mt-4 font-extrabold text-shadow">{{
                  menuItem.name
                }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div class="mt-6 flex items-center">
          <div
            class="flex-grow text-shadow-sm font-extrabold text-gray-900 text-3xl"
          >
            Desserts 🍪
          </div>
        </div>
        <ul class="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 mt-2">
          <li
            v-for="menuItem in desserts"
            :key="menuItem.name"
            class="border border-transparent col-span-1 sm:shadow flex flex-col text-center sm:bg-white rounded"
          >
            <a href="#" class="text-gray-900" @click.prevent="bag = !bag">
              <div class="flex-1 flex flex-col sm:p-4">
                <img
                  class="w-full h-28 sm:w-44 sm:h-44 shadow-md sm:ring-2 ring-gray-100 object-cover bg-indigo-50 flex-shrink-0 mx-auto rounded"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <span href="#" class="mt-4 font-extrabold text-shadow">{{
                  menuItem.name
                }}</span>
              </div>
            </a>
          </li>
        </ul>
        <div
          class="text-indigo-500 mt-12 mb-2 w-full font-bold text-lg text-center"
        >
          Feeling Lucky?
        </div>
        <div class="flex justify-center">
          <button
            type="button"
            class="inline-flex items-center px-6 py-2 border-4 border-indigo-300 shadow-md text-base font-semibold rounded-full text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Random Meal
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bag: false,
      drinks: [
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
      meals: [
        {
          imgUrl:
            'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          name: 'Sandwiches',
        },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1594500449280-cd9ab7cb33db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80',
        //   name: 'Salads',
        // },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Burritos',
        },
        // {
        //   imgUrl:
        //     'https://www.christinascucina.com/wp-content/uploads/2019/08/fullsizeoutput_c00f.jpeg',
        //   name: 'Gyros',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
        //   name: 'Vegan',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1469307517101-0b99d8fb0c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Soups',
        // },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80',
          name: 'Pizzas',
        },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        //   name: 'Breakfast',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1535923054316-5f75572def8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Noodles',
        // },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Burgers',
        },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Chicken Strips',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1518830686998-b8847466b372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80',
        //   name: 'Tacos',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Pastas',
        // },
      ],
      sides: [
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
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
        //   name: 'Vegan',
        // },
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
      desserts: [
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
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1604337153691-65d6e238df68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1944&q=80',
        //   name: 'Desserts',
        // },
      ],
      menuItems: [
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        //   name: 'Smoothies',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80',
        //   name: 'Pizzas',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        //   name: 'Sandwiches',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Coffees',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Chicken Wings',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1594500449280-cd9ab7cb33db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80',
        //   name: 'Salads',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Burritos',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
        //   name: 'Breakfast',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1535923054316-5f75572def8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Noodles',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Burgers',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Sides',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80',
        //   name: 'Drinks',
        // },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1604337153691-65d6e238df68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1944&q=80',
          name: 'Desserts',
        },
        // {
        //   imgUrl:
        //     'https://www.christinascucina.com/wp-content/uploads/2019/08/fullsizeoutput_c00f.jpeg',
        //   name: 'Gyros',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Chicken Strips',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1518830686998-b8847466b372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80',
        //   name: 'Tacos',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1469307517101-0b99d8fb0c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Soups',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
        //   name: 'Vegan',
        // },
        // {
        //   imgUrl:
        //     'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        //   name: 'Pastas',
        // },
      ],
    }
  },
}
</script>

<style scoped>
.lazyLoad img {
  opacity: 0;
  transition: opacity 400ms;
}

.lazyLoad.isLoaded img {
  opacity: 1;
}
</style>
