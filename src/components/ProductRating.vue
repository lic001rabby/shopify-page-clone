<template>
  <div
    class="rating-box flex items-center gap-2"
    :aria-label="`${rating.score} rating (${rating.count} votes)`"
  >
    <div><RatingStar v-for="i in roundedScore" :key="i"></RatingStar></div>
    <span class="pt-1"> ({{ rating.count }})</span>
  </div>
</template>

<script>
import RatingStar from "@/components/atoms/RatingStar.vue";
export default {
  name: "ProductRating",
  props: {
    rating: {
      type: Object,
      default: () => {},
    },
  },
  components: { RatingStar },
  computed: {
    roundedScore() {
      return Math.round(this.rating.score);
    },
  },
};
</script>

<style lang="scss">
.rating-box {
  position: relative;
  cursor: pointer;
}
.rating-box[aria-label]:focus:after,
.rating-box[aria-label]:hover:after {
  position: absolute;
  z-index: 1;
  top: -1em;
  left: 0;
  display: block;
  overflow: hidden;

  border-radius: 0.2em;
  padding: 0 0.7em;
  content: attr(aria-label);
  color: #fff;
  background: #000;
  font-size: 11px;
  line-height: 17px;
  text-align: left;
}
</style>
