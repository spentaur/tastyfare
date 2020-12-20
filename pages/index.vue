<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="max-w-screen-2xl mx-auto lg:flex lg:flex-row-reverse w-full">
      <div
        class="w-full lg:border-l lg:border-t lg:border-b rounded-l-md bg-indigo-50 border-gray-200 lg:w-1/3 xl:w-1/4 py-2 px-2"
      >
        <svg
          class="rounded-md border-2 border-dashed border-gray-300 bg-white h-full w-full text-gray-200"
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
        </svg>
      </div>
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
            class="shadow-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2 border-indigo-400 rounded-md py-2 pl-10 pr-3 text-sm"
            placeholder="Search for Your Favorite Dish"
            type="search"
          />
        </div>
        <Separator text="Or Explore Our Menu" />
        <ul
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.name"
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow hover:underline hover:shadow-lg divide-y divide-gray-200"
          >
            <a href="#">
              <div class="flex-1 flex flex-col p-8">
                <img
                  class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                  :src="menuItem.imgUrl"
                  alt=""
                />
                <a
                  href="#"
                  class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                  >{{ menuItem.name }}</a
                >
              </div>
            </a>
          </li>
        </ul>
        <Separator text="Feeling Lucky?" />
        <div class="flex justify-center">
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to cart
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
      ],
    }
  },
}
</script>
