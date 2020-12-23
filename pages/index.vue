<template>
  <div class="flex flex-col min-h-screen">
    <Navbar :bag="bag" />
    <div
      class="max-w-screen-2xl sm:pt-20 mx-auto lg:flex lg:flex-row-reverse w-full"
    >
      <!-- right side -->
      <div
        class="lg:mr-4 mb-6 lg:mb-0 w-full lg:border rounded bg-indigo-100 border-gray-200 lg:w-1/3 xl:w-1/4 py-2 px-2"
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
            stroke-width="2"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg> -->
      </div>
      <!-- left side -->
      <div class="max-w-6xl px-2 sm:px-6 lg:px-8 w-full">
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
            class="focus:ring-indigo-500 bg-gray-100 border border-transparent focus:bg-white sm:bg-white shadow rounded-full block w-full font-semibold border-gray-200 py-2 pl-10 pr-3 sm:text-sm"
            placeholder="Search for Your Favorite Dish"
            type="search"
          />
        </div>
        <ul class="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4 mt-6">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            class="border border-transparent col-span-1 sm:shadow flex flex-col text-center sm:bg-white rounded"
          >
            <a
              href="#"
              class="text-gray-600 hover:text-gray-600 sm:text-gray-500"
              @click.prevent="bag = !bag"
            >
              <div class="flex-1 flex flex-col sm:p-4">
                <img
                  class="w-full sm:w-40 h-40 shadow-md sm:ring-2 ring-gray-100 object-cover bg-indigo-50 flex-shrink-0 mx-auto rounded"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <span
                  href="#"
                  class="mt-4 font-extrabold sm:text-sm text-shadow"
                  >{{ menuItem.name }}</span
                >
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
            class="inline-flex items-center px-6 py-2 border border-indigo-300 shadow-md text-base font-semibold rounded-full text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      menuItems: [
        {
          imgUrl:
            'https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          name: 'Smoothies',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80',
          name: 'Pizzas',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
          name: 'Sandwiches',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Coffees',
        },
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
            'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Burritos',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
          name: 'Breakfast',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1535923054316-5f75572def8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Noodles',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1575980726530-4e673bfa0ad8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Burgers',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Sides',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1606943932434-2f21e1c54ef2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1288&q=80',
          name: 'Drinks',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1604337153691-65d6e238df68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1944&q=80',
          name: 'Desserts',
        },
        {
          imgUrl:
            'https://www.christinascucina.com/wp-content/uploads/2019/08/fullsizeoutput_c00f.jpeg',
          name: 'Gyros',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1605291581926-df4bf7ee3e89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Chicken Strips',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1518830686998-b8847466b372?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2168&q=80',
          name: 'Tacos',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1469307517101-0b99d8fb0c33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Soups',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80',
          name: 'Vegan',
        },
        {
          imgUrl:
            'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
          name: 'Pastas',
        },
      ],
    }
  },
}
</script>
