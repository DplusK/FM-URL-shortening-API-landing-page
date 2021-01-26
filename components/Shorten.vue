<template>
  <div class="w-full h-0 transform -translate-y-16 px-6 xl:px-4">
    <div
      class="max-w-6xl mx-auto bg-bg w-full rounded-md flex overflow-hidden py-12 flex-col"
    >
      <div
        class="bg-url w-full px-8 lg:px-20 flex items-center bg-no-repeat bg-cover lg:flex-row flex-col"
      >
        <input
          name="Shorten URL"
          title="Shorten URL"
          v-model="inputUrl"
          v-on:keyup.enter="fetchSomething"
          placeholder="Shoten a link here..."
          class="bg-white rounded-md placeholder-gray-500 pl-4 text-lg h-42 min-h-42 lg:h-70 flex-1 w-full mb-5 lg:mb-0"
        />
        <button
          @click="fetchSomething"
          class="bg-theme cursor-pointer rounded-md text-white h-42 min-h-42 lg:h-70 px-5 lg:ml-8 w-full lg:w-auto hover:text-theme hover:bg-white border-theme border transistion-color duration-200"
        >
          <p v-if="!loading">Shorten it!</p>
          <p v-else>Processing</p>
        </button>
      </div>
      <div class="px-8 lg:px-20 text-red-600 mt-5" v-show="error">
        Please enter a correct URL
      </div>
    </div>

    <Individual />
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      inputUrl: "",
      urlList: [],
      loading: false,
    };
  },
  methods: {
    async fetchSomething() {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      if (!!pattern.test(this.inputUrl)) {
        this.error = false;
        this.loading = true;
        const path = `shorten?url=${this.inputUrl}`;
        await this.$axios.$get(`/api/${path}`).then((res) => {
          this.urlList.push(res.result);
        });
        console.log(this.urlList);
        this.loading = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>