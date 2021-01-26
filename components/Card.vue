<template>
  <div
    class="card p-8 bg-white rounded-lg relative"
    :class="index != 0 ? 'md:ml-4' : ''"
  >
    <img
      :src="card.image"
      :alt="card.title"
      class="absolute -top-2 rounded-full bg-bg p-4 left-circle md:left-auto"
    />
    <h3 class="text-2xl font-bold mb-2 mt-8">{{ card.title }}</h3>
    <div class="text-gray-500">{{ card.desc }}</div>
  </div>
</template>

<script>
export default {
  props: ["card", "index"],
};
</script>

<style lang="css" scoped>
.card {
  height: max-content;
}
</style>