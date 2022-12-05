<template>
  <div class="gallery-container">
    <!-- Slider main container -->
    <div ref="slider" class="swiper gallery-main">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide bg-cover"
          v-for="(img, index) in images"
          :key="index"
        >
          <img :src="img.url" alt="" />
        </div>
      </div>
      <!-- If we need pagination -->
      <!-- <div class="swiper-pagination"></div> -->

      <!-- If we need navigation buttons -->
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>

    <!-- Slider thumbs container -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default {
  name: "ImageSlider",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      galleryMain: null,
    };
  },
  mounted() {
    this.galleryMain = new Swiper(this.$refs.slider, {
      loop: true,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      slidesPerView: "auto",
      speed: 1000,
    });
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-next,
.swiper-button-prev {
  color: #231f20;
}
.gallery-container {
  position: relative;
  width: 100%;
}
.gallery-main {
  width: 100%;
  height: auto;
}
</style>
