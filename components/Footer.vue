<template>
  <div class="w-full bg-dark text-white">
    <div
      class="max-w-6xl mx-auto pt-70 flex flex-col lg:items-start items-center lg:flex-row pb-100 text-center lg:text-left px-6 xl:px-4"
    >
      <img
        class="logo h-35 mb-8 lg:mb-0"
        src="/images/logo.svg"
        alt="Shortly Logo"
      />
      <div class="flex flex-col mb-8 lg:mb-0 lg:ml-auto">
        <h3 class="font-bold text-lg mb-8 lg:mb-2">Features</h3>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Link Shortening
        </p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Branded Links
        </p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Analytics
        </p>
      </div>
      <div class="flex flex-col mb-8 lg:mb-0 lg:ml-20">
        <h3 class="font-bold text-lg mb-8 lg:mb-2">Resources</h3>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">Blog</p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Developers
        </p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Support
        </p>
      </div>
      <div class="flex flex-col mb-8 lg:mb-0 lg:ml-20">
        <h3 class="font-bold text-lg mb-8 lg:mb-2">Company</h3>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">About</p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Our Team
        </p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Careers
        </p>
        <p class="cursor-pointer hover:text-theme text-gray-300 mb-4">
          Contacts
        </p>
      </div>
      <div class="flex lg:ml-20">
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center bg-facebook hover:bg-facebook-hover"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-twitter hover:bg-twitter-hover"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-pinterest hover:bg-pinterest-hover"
        ></div>
        <div
          class="w-25 h-25 cursor-pointer bg-no-repeat bg-cotain bg-center ml-4 bg-instagram hover:bg-instagram-hover"
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