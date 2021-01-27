<template>
  <div
    class="max-w-6xl mx-auto bg-white w-full rounded-md py-3 px-6 md:py-6 md:px-4 mt-4"
  >
    <div class="flex items-center md:flex-no-wrap flex-wrap justify-start">
      <a
        :href="url.original_link"
        class="py-2 w-full text-left md:w-auto border-b border-gray-400 mb-2 md:mb-0 md:border-b-0"
      >
        {{ url.original_link }}
      </a>
      <div class="ml-0 flex md:ml-auto">
        <a
          class="mr-5 text-theme py-2"
          target="_blank"
          :href="url.full_short_link"
          >{{ url.short_link }}</a
        >
        <button
          v-clipboard:copy="url.short_link"
          v-clipboard:success="onCopy"
          class="bg-theme text-white px-4 py-2 rounded-md hover:bg-opacity-50"
          :class="!copied ? '' : 'bg-bg  hover:bg-opacity-100'"
        >
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "clipboard";

export default {
  props: ["url"],
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    onCopy: function (e) {
      this.copied = true;
    },
  },
};
</script>