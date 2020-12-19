<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="w-full flex items-center align-center justify-center flex-grow mx-auto pb-44 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-2xl flex flex-grow">
        <div class="flex-grow">
          <label for="search" class="sr-only">Address</label>
          <input
            id="search"
            name="search"
            class="block h-full w-full bg-white border border-r-0 border-indigo-200 rounded-l-md p-3 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-indigo-200 focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
            placeholder="Delivery Address"
            type="search"
          />
        </div>
        <div>
          <button
            type="button"
            class="inline-flex h-full items-center p-3 border border-transparent rounded-r-md text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
          >
            Find Food
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
