<template>
  <div class="prod__title flex justify-between items-start pt-0.5 relative">
    <h1 class="text-2xl md:text-3xl md:leading-[42px] pr-2"><slot></slot></h1>
  </div>
</template>

<script>
export default {
  name: "ProductTitle",
};
</script>
