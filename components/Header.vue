<template>
  <div class="z-30 mb-100 md:mb-0">
    <div
      class="flex max-w-6xl mx-auto h-80 items-center font-bold text-gray-500 text-sm px-6 xl:px-4 fixed top-0 md:relative w-full bg-white z-30 shadow-md md:shadow-none"
    >
      <div class="flex">
        <img class="mr-12 h-35" src="/images/logo.svg" alt="Shortly Logo" />
        <nuxt-link
          to="#"
          class="py-2 transition-colors duration-200 hover:text-theme md:block hidden mr-8"
          >Features</nuxt-link
        >
        <nuxt-link
          to="#"
          class="py-2 transition-colors duration-200 hover:text-theme md:block hidden mr-8"
          >Pricing</nuxt-link
        >
        <nuxt-link
          to="#"
          class="py-2 transition-colors duration-200 hover:text-theme md:block hidden"
          >Resources</nuxt-link
        >
      </div>
      <div class="flex ml-auto">
        <nuxt-link
          to="#"
          class="transition-colors duration-200 hover:text-theme hidden md:block py-2 mr-10"
          >Login</nuxt-link
        >
        <nuxt-link
          to="#"
          class="hidden md:block hover:bg-transparent border-theme border hover:text-theme transition-colors duration-200 bg-theme text-white rounded-full px-5 py-2"
          >Sign Up</nuxt-link
        >
      </div>
      <div
        class="group md:hidden block cursor-pointer z-50"
        @click="toggleMenu"
        ref="menu"
      >
        <div
          class="h-1 w-6 mb-1 transition-transform duration-300 ease-out bg-gray-700 rounded-full group-hover:bg-theme"
          :class="this.menu ? 'top-line' : ''"
        ></div>
        <div
          class="h-1 w-6 mb-1 transition-opacity duration-300 bg-gray-700 rounded-full group-hover:bg-theme"
          :class="this.menu ? 'mid-line' : ''"
        ></div>
        <div
          class="h-1 w-6 mb-1 transition-transform duration-300 ease-out bg-gray-700 rounded-full group-hover:bg-theme"
          :class="this.menu ? 'bot-line' : ''"
        ></div>
      </div>
    </div>
    <div v-if="menu" class="px-10 py-100 flex fixed w-full top-0 left-0 z-20">
      <div class="bg-bg w-full flex flex-col text-center rounded-lg p-10 z-30">
        <nuxt-link
          to="#"
          class="text-white transition-colors duration-200 hover:text-theme font-bold text-2xl mb-6"
          >Features</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-white transition-colors duration-200 hover:text-theme font-bold text-2xl mb-6"
          >Pricing</nuxt-link
        >
        <nuxt-link
          to="#"
          class="text-white transition-colors duration-200 hover:text-theme font-bold text-2xl mb-6"
          >Resources</nuxt-link
        >
        <div class="w-full h-1 mb-6 bg-white"></div>
        <nuxt-link
          to="#"
          class="text-white transition-colors duration-200 hover:text-theme font-bold text-2xl mb-6"
          >Login</nuxt-link
        >
        <nuxt-link
          to="#"
          class="transition-colors duration-200 hover:bg-transparent hover:text-theme text-white font-bold bg-theme rounded-full px-5 py-2 text-2xl mb-6 border-theme border-2"
          >Sign Up</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="css" scoped>
.top-line {
  @apply transform rotate-45 translate-y-2;
}
.mid-line {
  @apply opacity-0;
}
.bot-line {
  @apply transform -rotate-45 -translate-y-2;
}
</style>