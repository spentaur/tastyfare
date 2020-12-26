<template>
  <div
    tabindex="0"
    class="flex h-screen overflow-hidden bg-white"
    @keyup.esc="menu = false"
  >
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <transition duration="300">
      <div v-show="menu">
        <div class="fixed inset-0 z-40 flex">
          <!--
          Off-canvas menu overlay, show/hide based on off-canvas menu state.
          -->
          <transition
            enter-active-class="transition-opacity duration-300 ease-linear"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300 ease-linear"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div
              v-show="menu"
              class="fixed inset-0"
              aria-hidden="true"
              @click="menu = fale"
            >
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
          </transition>
          <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
          <transition
            enter-active-class="transition duration-300 ease-in-out transform"
            enter-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition duration-300 ease-in-out transform"
            leave-class="translate-x-0"
            leave-to-class="-translate-x-full"
          >
            <div
              v-show="menu"
              class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white"
            >
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <transition
                  enter-active-class="transition-opacity duration-100 ease-linear"
                  enter-class="opacity-0"
                  enter-to-class="opacity-100"
                  leave-active-class="transition-opacity duration-100 ease-linear"
                  leave-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <button
                    v-show="menu"
                    class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="menu = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <!-- Heroicon name: x -->
                    <svg
                      class="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </transition>
              </div>
              <div class="flex items-center flex-shrink-0 px-4">
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/workflow-logo-purple-500-mark-gray-700-text.svg"
                  alt="Workflow"
                />
              </div>
            </div>
          </transition>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </div>
    </transition>
    <!-- Main column -->
    <div class="flex flex-col flex-1 w-0 overflow-hidden">
      <!-- Search header -->
      <div
        class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200"
      >
        <!-- Sidebar toggle, controls the 'sidebarOpen' sidebar state. -->
        <button
          class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
          @click="menu = true"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: menu-alt-1 -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    }
  },
}
</script>
