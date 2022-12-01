<template>
  <div class="product-container">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div id="product-photos"></div>
        <div id="product-details">
          <ProductTitle class="mb-4">Test</ProductTitle>
          <ProductDescription
            :description="product.description"
          ></ProductDescription>
          <span class="product-price text-2xl block mt-4 mb-4 text-black"
            >{{ currency }}{{ product.pricing.regularPrice.toFixed(2) }}</span
          >
          <div class="my-4 color-variations inline-flex flex-wrap">
            <ColorVarient class="mr-2"></ColorVarient>
            <ColorVarient class="mr-2"></ColorVarient>
          </div>
          <span class="font-bold block my-4"
            >Order before 5pm PST & we’ll ship the next day.</span
          >

          <div id="add-to-cart-container" class="flex flex-row gap-4 my-4">
            <div
              class="border border-lime py-0 flex flex-row justify-between quantity-input"
            >
              <button
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

          <div
            class="flex flex-row justify-between border-y-2 border-lime py-5"
          >
            <button class="text-bold">Find a Store</button>
            <button class="text-bold">Lifetime Warranty</button>
            <button class="text-bold">30 Day Return</button>
          </div>
          <ExpansionPanel title="Specs" :specs="product.specs"></ExpansionPanel>
          <ExpansionPanel
            title="Materials"
            :content="product.materials"
          ></ExpansionPanel>
        </div>
      </div>
    </div>

    <div id="faq">
      <FaqSection :faqs="product.faq"></FaqSection>
    </div>
    <div id="test-component"></div>
  </div>
</template>

<script>
import ProductTitle from "@/components/atoms/ProductTitle.vue";
import ProductDescription from "@/components/atoms/ProductDescription.vue";
import ExpansionPanel from "@/components/atoms/ExpansionPanel.vue";
import ColorVarient from "@/components/atoms/ColorVarient.vue";
import FaqSection from "@/components/FaqSection.vue";
export default {
  name: "ProductView",
  components: {
    ProductTitle,
    ProductDescription,
    ExpansionPanel,
    ColorVarient,
    FaqSection,
  },
  data() {
    return {
      currency: "$",
      quantity: 1,
      product: {
        productName: "RUX 70L",
        images: [
          {
            url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP_800x.webp?v=1668708460",
            alt: "Test",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP_800x.webp?v=1668708460",
            alt: "Test",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP_800x.webp?v=1668708460",
            alt: "Test",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP_800x.webp?v=1668708460",
            alt: "Test",
          },
          {
            url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP_800x.webp?v=1668708460",
            alt: "Test",
          },
        ],
        rating: {
          count: 105,
          score: 5,
        },
        description:
          "<p>RUX is the new all-in-one system to pack, move, and use your valuable gear. Garage to the beach. Truck to the trailhead. Ready when you need it.</p><ul><li>Fully collapsible design</li><li>Multiple carry configurations<br></li><li>Waterproof materials</li><li>Easy access tri-fold lid</li><li>Lifetime Warranty!&nbsp;</li></ul>",
        pricing: {
          regularPrice: 265,
          isOnSale: false,
          salePrice: null,
        },
        variations: {
          colors: [
            {
              colorName: "Tan",
              colorCode: "rgb(202, 190, 150)",
            },
            {
              colorName: "Green",
              colorCode: "rgb(73, 85, 35)",
            },
            {
              colorName: "Black",
              colorCode: "rgb(0, 0, 0);",
            },
            {
              colorName: "Grey",
              colorCode: "rgb(224, 224, 224);",
            },
          ],
          sizes: ["S", "M", "L", "XL", "XXL"],
        },
        specs: [
          {
            spec: "Volume",
            value: "70L",
          },
          {
            spec: "Empty weight",
            value: "5.3 lbs / 2.4 kg",
          },
          {
            spec: "Dimensions (W x L x H)",
            value: "15.7 x 19.5 x 13.8 inches / 40 x 50 x 35 cm",
          },
          {
            spec: "Load Limit",
            value: "50 lbs / 22.6 kg",
          },
        ],
        materials:
          "High tenacity 840D TPU coated waterproof nylon bag, PU coated compressed EVA foam base, nylon webbing straps & composite nylon frame.",
        faq: [
          {
            question: "Is it waterproof?",
            answer:
              "<p><strong>The RUX 70L is highly weatherproof,</strong>&nbsp;built for all-weather adventure - moving gear in a truck bed, on racks, on a camping trip, boating and more. The bag is a waterproof tub made by RF welding TPU coated high tenacity 840D nylon and a molded EVA bottom. The bottom and lid are both laminated with PU for added durability. The lid is also molded EVA foam and has an overhanging perimeter to help keep it on and weather out. RUX is not submersible or watertight.</p>",
          },
          {
            question: "What size is the RUX 70L?",
            answer:
              "<p>RUX has 70L of volume, with a box-like shape that optimizes that spapce for efficient packing. When upright it’s 40cm wide x 50cm long x 35cm deep (15.7 x 19.5 x 13.8 inches). RUX 70 is large enough to go big with day-trip gear, great for loading up your vehicle for bigger excursions, and still small enough to be maneuverable so you can take advantage of RUX’s carrying and storing benefits. When you don’t need it, save space. RUX packs flat to only 8cm (3.1 inches) deep.</p>",
          },
          {
            question: "Is it waterproof?",
            answer:
              "<p><strong>The RUX 70L is highly weatherproof,</strong>&nbsp;built for all-weather adventure - moving gear in a truck bed, on racks, on a camping trip, boating and more. The bag is a waterproof tub made by RF welding TPU coated high tenacity 840D nylon and a molded EVA bottom. The bottom and lid are both laminated with PU for added durability. The lid is also molded EVA foam and has an overhanging perimeter to help keep it on and weather out. RUX is not submersible or watertight.</p>",
          },
          {
            question: "Is it waterproof?",
            answer:
              "<p><strong>The RUX 70L is highly weatherproof,</strong>&nbsp;built for all-weather adventure - moving gear in a truck bed, on racks, on a camping trip, boating and more. The bag is a waterproof tub made by RF welding TPU coated high tenacity 840D nylon and a molded EVA bottom. The bottom and lid are both laminated with PU for added durability. The lid is also molded EVA foam and has an overhanging perimeter to help keep it on and weather out. RUX is not submersible or watertight.</p>",
          },
        ],
      },
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
}
</style>
