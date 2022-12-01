<template>
  <div id="add-to-cart-container" class="flex flex-row gap-4 my-4">
    <div
      class="border border-lime py-0 flex flex-row justify-between quantity-input"
    >
      <button
        @click="quantity > 1 ? quantity-- : ''"
        class="flex items-center justify-center h-[46px] w-[46px]"
      >
        <svg
          class="w-[12px] h-[12px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M376 232H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </button>
      <input
        class="quantity-input w-10 text-center flex-grow shrink appearance-none"
        type="number"
        name="quantity"
        v-model="quantity"
      />
      <button
        @click="quantity++"
        class="flex items-center justify-center h-[46px] w-[46px]"
      >
        <svg
          class="w-[12px] h-[12px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            d="M376 232H216V72c0-4.42-3.58-8-8-8h-32c-4.42 0-8 3.58-8 8v160H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h160v160c0 4.42 3.58 8 8 8h32c4.42 0 8-3.58 8-8V280h160c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </button>
    </div>
    <button
      class="bg-lime border border-black text-black uppercase w-full text-center font-bold text-l py-3 hover:border-lime hover:bg-white transition-all"
    >
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "AddToCart",
  data() {
    return {
      quantity: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.quantity-input {
  background-color: #f8f8f8;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
