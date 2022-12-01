<template>
  <div @click="$emit('click')" class="tooltip">
    <div class="top">
      {{ name }}
      <i></i>
    </div>
    <div
      class="flex justify-center items-center relative swatch-item-body"
      :class="{ 'sf_variant-selected': selected }"
    >
      <!-- <span class="tooltip capitalize absolute top-[-20px] bg-black">Tan</span> -->
      <div
        class="flex items-center justify-center cursor-pointer text-white h-[40px] w-[40px] swatch-item top-0"
        :style="`background-color: ${color}`"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorVarient",
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "rgb(202, 190, 150)",
    },
    name: {
      type: String,
      default: "Tan",
    },
  },
};
</script>

<style lang="scss" scoped>
.swatch-item-body {
  padding: 0;
  border: none;
  transition: all 0.2s ease-out;

  :hover {
    background-color: #fff;
    border: 1px solid black;
    padding: 5px;
  }
  .swatch-item {
    padding: 0px;
    border: none;
    transition: all 0.2s ease-out;
    :hover {
      transform: scale(0.2);
    }
  }
}

.tooltip {
  display: inline-block;
  position: relative;
  border-bottom: 1px dotted #666;
  text-align: left;
}

.tooltip .top {
  min-width: 30px;
  top: -15px;
  left: 50%;
  transform: translate(-50%, -100%);
  padding: 5px 10px;
  color: #fff;
  background-color: #000;
  font-weight: normal;
  font-size: 13px;
  border-radius: 8px;
  position: absolute;
  z-index: 99999999;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.8s;
}

.tooltip:hover .top {
  visibility: visible;
  opacity: 1;
}

.tooltip .top i {
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 10px;
  overflow: hidden;
}

.tooltip .top i::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #000;
}
</style>
