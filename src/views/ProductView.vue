<template>
  <div class="product-container">
    <ProductTitle>Test</ProductTitle>
    <ProductDescription></ProductDescription>
    <ExpansionPanel></ExpansionPanel>
    <ExpansionPanel></ExpansionPanel>
  </div>
</template>

<script>
import ProductTitle from "@/components/atoms/ProductTitle.vue";
import ProductDescription from "@/components/atoms/ProductDescription.vue";
import ExpansionPanel from "@/components/atoms/ExpansionPanel.vue";
export default {
  name: "ProductView",
  components: { ProductTitle, ProductDescription, ExpansionPanel },
  data() {
    return {
      productDetails: {
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
