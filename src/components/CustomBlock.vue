<template>
  <div
    class="prose max-w-none py-8"
    :style="`background-color:${background}`"
    v-html="content"
  ></div>
</template>

<script>
export default {
  name: "CustomBlock",
  props: {
    content: {
      type: String,
      default: "<h3>test</h3>",
    },
    background: {
      type: String,
      default: "white",
    },
  },
};
</script>
