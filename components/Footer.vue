<template>
  <div class="w-full bg-dark text-white">
    <div class="max-w-6xl mx-auto pt-70 flex flex-row pb-100">
      <img class="logo h-35" src="/images/logo.svg" alt="Shortly Logo" />
      <div class="flex flex-col ml-auto">
        <h3 class="font-bold text-lg mb-2">Features</h3>
        <p class="cursor-pointer hover:text-theme">Link Shortening</p>
        <p class="cursor-pointer hover:text-theme">Branded Links</p>
        <p class="cursor-pointer hover:text-theme">Analytics</p>
      </div>
      <div class="flex flex-col ml-20">
        <h3 class="font-bold text-lg mb-2">Resources</h3>
        <p class="cursor-pointer hover:text-theme">Blog</p>
        <p class="cursor-pointer hover:text-theme">Developers</p>
        <p class="cursor-pointer hover:text-theme">Support</p>
      </div>
      <div class="flex flex-col ml-20">
        <h3 class="font-bold text-lg mb-2">Company</h3>
        <p class="cursor-pointer hover:text-theme">About</p>
        <p class="cursor-pointer hover:text-theme">Our Team</p>
        <p class="cursor-pointer hover:text-theme">Careers</p>
        <p class="cursor-pointer hover:text-theme">Contacts</p>
      </div>
      <div class="flex ml-20">
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center bg-facebook hover:bg-facebook-hover"
          alt="facebook"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-twitter hover:bg-twitter-hover"
          alt="twitter"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-pinterest hover:bg-pinterest-hover"
          alt="pinterest"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-instagram hover:bg-instagram-hover"
          alt="instagram"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.logo {
  filter: brightness(1000%);
}
</style>