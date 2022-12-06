<template>
  <div>
    <LazyYoutube
      class="mx-auto"
      ref="youtubeLazyVideo"
      aspect-ratio="16:9"
      :src="videoLink"
      thumbnail-quality="maxres"
      max-width="1280px"
    />
  </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";
export default {
  name: "VideoSection",
  props: {
    videoLink: {
      type: String,
      default: "https://www.youtube.com/watch?v=IF64kBeqgX8",
    },
  },
  components: { LazyYoutube },
};
</script>
