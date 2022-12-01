<template>
  <div class="my-4 color-variations inline-flex flex-wrap">
    <ColorVarient class="mr-2"></ColorVarient>
    <ColorVarient class="mr-2"></ColorVarient>
  </div>
</template>

<script>
import ColorVarient from "@/components/atoms/ColorVarient.vue";
export default {
  name: "VariationSelector",
  props: {
    variations: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    ColorVarient,
  },
};
</script>
