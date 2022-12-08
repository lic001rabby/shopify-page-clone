<template>
  <div class="gallery-container">
    <!-- Slider main container -->
    <div ref="swiper" class="swiper gallery-main">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(img, index) in images" :key="index">
          <img :src="img" alt="" />
        </div>
      </div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div
      ref="swiperThumbs"
      class="swiper-thumbs swiper-container gallery-thumbs"
    >
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          class="swiper-slide"
          v-for="(img, index) in images"
          :key="index"
          @click="thumbClicked(index)"
        >
          <div class="thumb-container">
            <img :src="img" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- Slider thumbs container -->
  </div>
</template>
<script>
import Swiper, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default {
  name: "ProductGallery",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      galleryThumbs: null,
      galleryMain: null,
    };
  },
  methods: {
    thumbClicked(index) {
      this.galleryMain.slideTo(index);
    },
  },
  mounted() {
    this.galleryThumbs = new Swiper(this.$refs.swiperThumbs, {
      // configure Swiper to use modules
      modules: [Thumbs],
      // Optional parameters
      slidesPerView: 6,
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: "vertical",
      thumbs: {
        el: ".swiper-thumbs",
      },
    });
    this.galleryMain = new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: this.galleryThumbs,
      },
    });

    this.galleryMain.on("slideChangeTransitionStart", () => {
      this.galleryThumbs.slideTo(this.galleryMain.activeIndex);
    });

    this.galleryThumbs.on("transitionStart", () => {
      this.galleryMain.slideTo(this.galleryThumbs.activeIndex);
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
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.gallery-main {
  width: 85%;
  height: auto;
}
.gallery-thumbs {
  order: -1;
  width: 15%;
  height: 500px;
  margin-right: 15px;
  padding-left: 15px;
  @media (max-width: 768px) {
    display: none;
  }

  .swiper-slide {
    .thumb-container {
      border: 1px solid white;
      padding: 5px;
      cursor: pointer;
      img {
        transition: 0.3s;
      }
    }

    &-active {
      .thumb-container {
        border: 1px solid black;
      }
    }

    &-thumb-active {
      opacity: 1;

      img {
        margin-left: -15px;
      }
    }
  }
}
</style>
