<template>
  <div class="review-slider-conteiner max-w-[560px] mx-auto">
    <VueSlickCarousel :arrows="true">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="text-center px-12"
      >
        <div class="review-logo">
          <img class="max-w-[250px] mx-auto" :src="slide.logo" alt="" />
        </div>
        <div class="review-content">
          <p class="font-bolder text-[22px] text-black">{{ slide.content }}</p>
        </div>
      </div>
      <template #prevArrow>
        <div class="custom-arrow">
          <img src="images/prev.svg" alt="" />
        </div>
      </template>
      <template #nextArrow>
        <div class="custom-arrow">
          <img src="images/next.svg" alt="" />
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ReviewSlider",
  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
  components: { VueSlickCarousel },
};
</script>

<style lang="scss" scoped>
.slick-prev:before {
  content: "" !important;
}
.slick-next:before {
  content: "" !important;
}
.review-slider-conteiner {
  padding: 150px 20px;
}
</style>
