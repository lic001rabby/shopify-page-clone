<template>
  <div class="product-description-container">
    <div
      class="product-description prose max-w-none"
      v-html="description"
    ></div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription",
  props: {
    description: {
      type: String,
      default: "No description passed as prop",
    },
  },
};
</script>
