<template>
  <div id="shopify-section-annoucement" class="shopify-section">
    <section
      data-section-id="annoucement"
      data-section-type="announcement"
      class="announcement-bar relative"
    >
      <a
        href="https://rux.life/products/rux-essentials-set"
        class="announcement-bar__link"
        ><div class="announcement-bar__content md:text-center py-2.5 text-base">
          <div
            class="announcement-bar__message announcement-bar__message--desktop hidden md:block"
          >
            FREE SHIPPING ON RUX ESSENTIALS SETS - SHOP NOW
          </div>
          <div
            class="announcement-bar__message announcement-bar__message--mobile block md:hidden"
          >
            FREE SHIPPING ON ESSENTIALS SETS
          </div>
        </div></a
      >
    </section>
  </div>
</template>

<script>
export default {
  name: "AnnouncementBar",
};
</script>
<style data-shopify="">
.announcement-bar {
  background-color: #d9dd08;
}
.announcement-bar__content,
.sf-topbar__close {
  color: #161d25;
  font-weight: bold;
}
.announcement-bar a:hover {
  opacity: 0.6;
}
.announcement-bar__message a,
.announcement-bar__message span {
  position: relative;
  margin: 0 10px;
}
.announcement-bar__message a:after,
.announcement-bar__message span::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #161d25;
}
</style>
