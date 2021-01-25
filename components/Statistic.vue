<template>
  <div class="bg-bg-light pb-32">
    <div class="text-center pt-56 pb-20">
      <h2 class="font-bold text-4xl mb-4">Advanced Statistic</h2>
      <p class="text-gray-500 max-w-md mx-auto">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
    </div>
    <div class="flex max-w-6xl mx-auto relative">
      <Card
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :index="index"
        class="z-10"
        :class="'mt-' + index * 12"
      />
      <div class="h-2 absolute top-1/2 px-5 w-full bg-theme z-0"></div>
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