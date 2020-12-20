<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <div class="max-w-screen-2xl mx-auto lg:flex lg:flex-row-reverse w-full">
      <div class="lg:border-l border-gray-200 w-1/4 px-2 sm:px-6 lg:px-8">
        side
      </div>
      <div class="max-w-6xl px-2 sm:px-6 lg:px-8 w-full">
        <div class="mt-4 mb-12">
          <label for="search" class="sr-only">Search</label>
          <input
            id="search"
            type="search"
            name="search"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Search for Your Favorite Dish"
          />
        </div>
        <hr
          class="border-gray-200 my-12 text-center md:text-2xl"
          data-hr-content="Or Explore Our Menu"
          style="--trans-x: -50%; --trans-y: -50%"
        />
        <ul
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Smoothies</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1314&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Pizzas</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Sandwiches</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1598908314732-07113901949e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Coffees</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1585703900468-13c7a978ad86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Chicken Wings</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1594500449280-cd9ab7cb33db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1873&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Salads</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Burritos</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1568051243851-f9b136146e97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Breakfast</a
              >
            </div>
          </li>

          <li
            class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div class="flex-1 flex flex-col p-8">
              <img
                class="w-full sm:w-48 h-48 object-cover flex-shrink-0 mx-auto bg-black rounded-md"
                src="https://images.unsplash.com/photo-1535923054316-5f75572def8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <a
                href="#"
                class="mt-6 text-indigo-500 hover:underline text-gray-900 text-sm font-medium"
                >Noodles</a
              >
            </div>
          </li>
        </ul>
        <hr
          class="border-gray-200 my-12 text-center md:text-2xl"
          data-hr-content="Feeling Lucky?"
          style="--trans-x: -50%; --trans-y: -50%"
        />
        <div class="flex justify-center">
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
hr::after {
  @apply bg-gray-50;
  @apply text-gray-600;
  @apply px-2;
  @apply sm:px-4;
  @apply absolute;
  content: attr(data-hr-content);
  transform: translate(var(--trans-x), var(--trans-y));
}
</style>
