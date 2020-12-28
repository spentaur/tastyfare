<template>
  <div class="bg-black">
    <Menu />
    <div
      :class="{
        'scale-90 -translate-y-1/25 sm:translate-y-0 rounded-xl':
          $store.state.menu.open,
      }"
      class="flex flex-col-reverse h-screen overflow-hidden transition-all duration-300 transform sm:flex-col"
    >
      <div class="w-full bg-white border border-gray-400">
        <div class="h-16">
          <button
            class="border border-blue-600"
            @click="$store.commit('menu/toggle')"
          >
            click me
          </button>
        </div>
      </div>
      <div class="flex-grow overflow-scroll bg-red-100">
        <div class="bg-white">
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
          <div class="w-full my-4 bg-blue-200 h-14"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'test',
}
</script>
