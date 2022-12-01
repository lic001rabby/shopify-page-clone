<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="30"
    navigation
    :loop="true"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(image, index) in images" :key="index"
      ><img :src="image.url" alt=""
    /></swiper-slide>
  </swiper>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "ProductGallery",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Thumbs],
    };
  },
  methods: {
    onSwiper() {
      console.log("onswiper");
    },
    onSlideChange() {
      console.log("onSlideChange");
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 600px;
  overflow: hidden;
}
</style>
