<template>
  <div class="bg-bg-light pb-24 md:pb-32">
    <div class="text-center pt-56 pb-10 md:pb-20">
      <h2 class="font-bold text-4xl mb-4">Advanced Statistic</h2>
      <p class="text-gray-500 max-w-md mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
    </div>
    <div
      class="flex max-w-6xl mx-auto relative md:flex-row flex-col px-6 xl:px-4"
    >
      <Card
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :index="index"
        class="z-10 mt-16"
        :class="'md:mt-' + index * 12"
      />
      <div
        class="h-2 absolute hidden md:block top-1/2 pr-8 overflow-hidden w-10/12 bg-theme z-0"
      ></div>
      <div
        class="w-1 absolute left-1/2 h-10/12 top-40 bg-theme z-0 md:hidden"
      ></div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  data() {
    return {
      cards: [
        {
          id: "1",
          title: "Brand Recognition",
          desc:
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confident in your content",
          image: "/images/icon-brand-recognition.svg",
        },
        {
          id: "2",
          title: "Detailed Records",
          desc:
            "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
          image: "/images/icon-detailed-records.svg",
        },
        {
          id: "3",
          title: "Fully Customizable",
          desc:
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
          image: "/images/icon-fully-customizable.svg",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>