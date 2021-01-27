<template>
  <div class="flex items-center">
    <a :href="url.original_link" class="py-2">
      {{ url.original_link }}
    </a>
    <div class="ml-auto flex">
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
        <p v-if="!copied">Copy</p>
        <p v-else>Copied!</p>
      </button>
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