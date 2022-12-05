<template>
  <div class="container mx-auto mt-12">
    <h3
      style="font-weight: 600"
      class="content__heading text-center text-2xl text-black lg:text-5xl sm:text-4xl"
    >
      FAQ
    </h3>

    <ExpansionPanel
      v-for="(faq, index) in faqs"
      :key="index"
      :title="faq.question"
      :content="faq.answer"
    ></ExpansionPanel>
  </div>
</template>
<script>
import ExpansionPanel from "@/components/atoms/ExpansionPanel.vue";
export default {
  name: "FaqSection",
  props: {
    faqs: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ExpansionPanel,
  },
};
</script>
