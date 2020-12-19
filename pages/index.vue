<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="w-full flex items-center align-center justify-center flex-grow mx-auto pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-2xl flex flex-col sm:flex-row flex-grow">
        <div class="flex-grow">
          <label for="search" class="sr-only">Address</label>
          <input
            id="search"
            name="search"
            class="block h-full w-full bg-white border border-indigo-200 rounded-md p-3 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-indigo-200 focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
            placeholder="Delivery Address"
            type="search"
          />
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
