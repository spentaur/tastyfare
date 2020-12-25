<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="pb-12 bg-indigo-500 dark:bg-gray-900 sm:pb-0">
    <div class="px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav
        class="flex flex-wrap justify-center -mx-5 -my-2"
        aria-label="Footer"
      >
        <div class="px-5 py-2">
          <a href="#" class="text-base text-indigo-200 hover:text-gray-100">
            About
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-indigo-200 hover:text-gray-100">
            Blog
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-indigo-200 hover:text-gray-100">
            Jobs
          </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-indigo-200 hover:text-gray-100">
            Press
          </a>
        </div>
        <div class="px-5 py-2">
          <button
            class="text-indigo-200 hover:text-indigo-100 focus:outline-none"
            @click.prevent="$store.commit('dark/toggle')"
          >
            <span class="sr-only">Dark Mode</span>
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </button>
        </div>
      </nav>
      <p class="mt-8 text-base text-center text-indigo-400">
        &copy; 2020 tastyfare, Inc. All rights reserved.
      </p>
    </div>
  </footer>
</template>
