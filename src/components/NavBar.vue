<template>
  <div class="navbar container mx-auto px-8">
    <div class="flex -mx-4 items-center">
      <div class="px-4 flex-1 justify-start has-logo-img">
        <img
          class="inline-block logo-img"
          src="//cdn.shopify.com/s/files/1/0313/2532/3401/files/rsz_3black_2048x2048.png?v=1651694115"
          alt="RUX"
        />
      </div>
      <div class="flex-grow-[2] shrink flex justify-end items-center">
        <ul class="flex text-base font-medium whitespace-nowrap">
          <li
            v-for="(item, index) in menu"
            :key="index"
            class="list-none mx-2 leading-[23px] text-l text-black uppercase font-medium"
          >
            <a :href="item.item_link">{{ item.item_name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    menu: {
      type: Array,
      default: () => [
        {
          item_name: "Test",
          item_link: "#",
        },
        {
          item_name: "Test",
          item_link: "#",
        },
      ],
    },
  },
};
</script>

<style>
.navbar {
  margin-bottom: 40px;
  background-color: #f5f5ed;
}
.logo-img {
  max-width: 150px;
  padding: 10px 10px;
}
</style>
