<template>
  <div>
    <div v-for="(section, index) in sections" :key="section.title">
      <ul
        v-if="index === 1"
        class="grid grid-cols-1 gap-4 my-10 mt-4 sm:grid-cols-3"
      >
        <li
          class="flex flex-col justify-center w-full col-span-1 p-2 mx-auto transition-all duration-300 border-8 border-indigo-200 shadow sm:shadow-2xl dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1606788075765-42f69501a452?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            class="object-cover object-center rounded-lg h-44"
            alt=""
          />
          <div class="flex items-center mt-2 mb-1">
            <img
              class="inline-block w-8 h-8 mr-2 rounded-full"
              src="https://images.unsplash.com/profile-1600897570640-2237a383bacdimage?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
              alt=""
            />
            <div class="flex-grow text-lg font-extrabold text-shadow-sm">
              Jimmy Dean
            </div>
            <div
              class="flex items-center text-sm text-gray-400 dark:text-gray-600"
            >
              Ad
            </div>
          </div>
          <nuxt-link
            to="https://ad.doubleclick.net/ddm/trackclk/N470801.3286893UNSPLASH/B25023030.288613513;dc_trk_aid=481873727;dc_trk_cid=131547872;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
            class="text-gray-500 dark:text-gray-400"
          >
            Today’s Your Day to Shine On
          </nuxt-link>
        </li>
        <li
          class="flex flex-col justify-center w-full col-span-1 p-2 mx-auto transition-all duration-300 border-8 border-indigo-200 shadow sm:shadow-2xl dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl"
        >
          <img
            src="https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/800x450/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2019/12/26025833/rivian-r1t-proto-blue-tofino.jpg"
            class="object-cover object-center rounded-lg h-44"
            alt=""
          />
          <div class="flex items-center mt-2 mb-1">
            <img
              class="inline-block w-8 h-8 mr-2 rounded-full"
              src="https://pbs.twimg.com/profile_images/1199724774613606402/ZTAmKeoe_400x400.jpg"
              alt=""
            />
            <div class="flex-grow text-lg font-extrabold text-shadow-sm">
              Rivian
            </div>
            <div
              class="flex items-center text-sm text-gray-400 dark:text-gray-600"
            >
              Ad
            </div>
          </div>
          <nuxt-link
            to="https://t.co/9CoF88T80b?amp=1"
            class="text-gray-500 dark:text-gray-400"
          >
            Keep the world adventurous forever.
          </nuxt-link>
        </li>
        <li
          class="flex flex-col justify-center w-full col-span-1 p-2 mx-auto transition-all duration-300 border-8 border-indigo-200 shadow sm:shadow-2xl dark:text-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-2xl"
        >
          <img
            src="https://photos5.appleinsider.com/gallery/33342-58359-191025-iPhonePrivacy-xl.jpg"
            class="object-cover object-center rounded-lg h-44"
            alt=""
          />
          <div class="flex items-center mt-2 mb-1">
            <img
              class="inline-block w-8 h-8 mr-2 rounded-full"
              src="https://pbs.twimg.com/profile_images/1283958620359516160/p7zz5dxZ_400x400.jpg"
              alt=""
            />
            <div class="flex-grow text-lg font-extrabold text-shadow-sm">
              Apple
            </div>
            <div
              class="flex items-center text-sm text-gray-400 dark:text-gray-600"
            >
              Ad
            </div>
          </div>
          <nuxt-link
            to="https://ad.doubleclick.net/ddm/trackclk/N470801.3286893UNSPLASH/B25023030.288613513;dc_trk_aid=481873727;dc_trk_cid=131547872;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
            class="text-gray-500 dark:text-gray-400"
          >
            Privacy. That's iPhone.
          </nuxt-link>
        </li>
      </ul>
      <div class="flex items-center mt-10">
        <div
          class="flex-grow text-3xl font-extrabold text-gray-900 dark:text-gray-200 text-shadow-sm"
        >
          {{ section.title }} {{ section.emoji }}
        </div>
        <nuxt-link
          v-if="section.title != 'Desserts'"
          :to="{
            name: 'section',
            params: { section: section.slug },
          }"
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
      <Items :items="section.items" :section="section" />
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
</template>

<script>
export default {
  middleware({ store }) {
    setTimeout(() => store.commit('search/showSearch'), 150)
  },
  async asyncData({ $content, route, error }) {
    const sections = await $content('sections')
      .sortBy('position')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    sections.forEach(async (section) => {
      section.items = await $content('menu')
        .where({ section: { $contains: section.slug } })
        .limit(5)
        .fetch()
    })
    return {
      sections,
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
