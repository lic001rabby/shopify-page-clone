<template>
  <div class="prod__title flex justify-between items-start pt-0.5 relative">
    <h3
      style="font-weight: 600"
      class="content__heading text-2xl text-black lg:text-5xl sm:text-4xl"
    >
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ProductTitle",
};
</script>
