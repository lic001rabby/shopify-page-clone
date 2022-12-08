<template>
  <div class="my-4 color-variations inline-flex flex-wrap">
    <ColorVarient
      v-for="(item, index) in variations"
      :key="index"
      class="mr-2"
      :name="item.colorName"
      :color="item.colorCode"
    ></ColorVarient>
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
