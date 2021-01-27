<template>
  <div class="w-full transform -translate-y-16 -mb-40 px-6 xl:px-4">
    <div
      class="max-w-6xl mx-auto bg-bg w-full rounded-md flex overflow-hidden py-6 md:py-12 flex-col"
    >
      <div
        class="bg-url w-full px-6 md:px-20 flex items-center bg-no-repeat bg-cover md:flex-row flex-col"
      >
        <input
          name="Shorten URL"
          title="Shorten URL"
          v-model="inputUrl"
          v-on:keyup.enter="fetchSomething"
          placeholder="Shoten a link here..."
          class="bg-white rounded-md placeholder-gray-500 pl-4 text-lg h-42 min-h-42 md:h-70 flex-1 w-full mb-5 md:mb-0"
          :class="[
            error ? 'border-4 border-red-600 ' : '',
            loading ? 'bg-gray-200' : '',
          ]"
          ref="input"
        />
        <button
          @click="fetchSomething"
          class="bg-theme cursor-pointer rounded-md text-white h-42 min-h-42 md:h-70 px-5 md:ml-8 w-full md:w-auto hover:text-theme hover:bg-white border-theme border transistion-color duration-200"
        >
          <span v-if="!loading">Shorten it!</span>
          <span v-else class="animate-pulse">Processing</span>
        </button>
      </div>
      <div class="px-8 md:px-20 text-red-600 mt-5" v-show="error">
        Please add a link
      </div>
    </div>
    <Individual :url="url" v-for="url in urlList" :key="url.code" />
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
        this.$refs.input.disabled = true;
        const path = `shorten?url=${this.inputUrl}`;
        await this.$axios.$get(`/api/${path}`).then((res) => {
          this.urlList.push(res.result);
        });
        console.log(this.urlList);
        this.loading = false;
        this.$refs.input.disabled = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>