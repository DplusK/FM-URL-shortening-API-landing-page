<template>
  <div>
    <div
      class="flex max-w-6xl mx-auto h-80 items-center font-bold text-gray-500 text-sm px-6 md:px-2 z-20"
    >
      <div class="flex">
        <img class="mr-12 h-35" src="/images/logo.svg" alt="Shortly Logo" />
        <nuxt-link to="#" class="py-2 md:block hidden mr-8">Features</nuxt-link>
        <nuxt-link to="#" class="py-2 md:block hidden mr-8">Pricing</nuxt-link>
        <nuxt-link to="#" class="py-2 md:block hidden">Resources</nuxt-link>
      </div>
      <div class="flex ml-auto">
        <nuxt-link to="#" class="hidden md:block py-2 mr-10">Login</nuxt-link>
        <nuxt-link
          to="#"
          class="hidden md:block bg-theme text-white rounded-full px-5 py-2"
          >Sign Up</nuxt-link
        >
      </div>
      <div
        class="group md:hidden block cursor-pointer"
        @click="toggleMenu"
        ref="menu"
      >
        <div
          class="h-1 w-6 mb-1 transition-transform duration-300 ease-out bg-gray-700 rounded-full group-hover:bg-theme"
        ></div>
        <div
          class="h-1 w-6 mb-1 transition-opacity duration-300 bg-gray-700 rounded-full group-hover:bg-theme"
        ></div>
        <div
          class="h-1 w-6 mb-1 transition-transform duration-300 ease-out bg-gray-700 rounded-full group-hover:bg-theme"
        ></div>
      </div>
    </div>
    <div
      v-if="menu"
      class="fixed w-full h-full z-10 bg-theme top-0 left-0"
    ></div>
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
      this.$refs.menu.children[0].classList.toggle("top-line");
      this.$refs.menu.children[1].classList.toggle("mid-line");
      this.$refs.menu.children[2].classList.toggle("bot-line");
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