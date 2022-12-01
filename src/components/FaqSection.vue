<template>
  <div class="container mx-auto mt-12">
    <h2 class="section-title mx-auto text-center">FAQ</h2>

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
