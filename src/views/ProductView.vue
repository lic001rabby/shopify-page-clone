<template>
  <div class="page-container">
    <AnnouncementBar></AnnouncementBar>
    <NavBar></NavBar>

    <div class="product-container container mx-auto">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div id="product-photos">
            <ProductGallery :images="shopifyProduct.images"></ProductGallery>
          </div>
          <div id="product-details">
            <ProductTitle class="mb-4">Test</ProductTitle>
            <ProductDescription
              :description="product.description"
            ></ProductDescription>
            <span class="product-price text-2xl block mt-4 mb-4 text-black"
              >{{ currency }}{{ product.pricing.regularPrice.toFixed(2) }}</span
            >
            <VariationSelector
              :variations="product.variations.colors"
            ></VariationSelector>
            <span class="font-bold block my-4"
              >Order before 5pm PST & we’ll ship the next day.</span
            >
            <AddToCart></AddToCart>

            <div
              class="flex flex-row justify-between border-y-2 border-lime py-5"
            >
              <button class="text-bold flex items-center">
                <img
                  class="inline w-[30px] mr-2"
                  src="images/location.png"
                  alt=""
                />
                Find a Store
              </button>
              <button class="text-bold flex items-center mr-2">
                <img
                  class="inline w-[30px] mr-2"
                  src="images/secure.png"
                  alt=""
                />Lifetime Warranty
              </button>
              <button class="text-bold flex items-center">
                <img
                  class="inline w-[30px] mr-2"
                  src="images/calendar.png"
                  alt=""
                />30 Day Return
              </button>
            </div>
            <ExpansionPanel
              title="Specs"
              :specs="product.specs"
            ></ExpansionPanel>
            <ExpansionPanel
              title="Materials"
              :content="product.materials"
            ></ExpansionPanel>
          </div>
        </div>
      </div>
      <div id="top-section">
        <CustomBlock
          :background="'#f5f5ed'"
          :content="topSection"
        ></CustomBlock>
      </div>
      <div id="video-section">
        <VideoSection></VideoSection>
      </div>
      <div id="review-slider">
        <ReviewSlider :slides="reviewSlides"></ReviewSlider>
      </div>

      <div id="image-slider">
        <ImageSlider :images="imageSlides"></ImageSlider>
      </div>
      <div id="featured">
        <CustomBlock :content="featuredBlock"></CustomBlock>
      </div>
      <div id="cs1">
        <CustomBlock
          class="container px-12 mx-auto"
          :content="contentSectionOne"
          :background="'#f5f5ed'"
        ></CustomBlock>
      </div>
      <div id="chart" class="px-12">
        <ChartSection></ChartSection>
      </div>
      <div id="faq" class="px-12">
        <FaqSection :faqs="product.faq"></FaqSection>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTitle from "@/components/atoms/ProductTitle.vue";
import ProductDescription from "@/components/atoms/ProductDescription.vue";
import ExpansionPanel from "@/components/atoms/ExpansionPanel.vue";
import AddToCart from "@/components/AddToCart.vue";
import FaqSection from "@/components/FaqSection.vue";
import ProductGallery from "@/components/ProductGallery.vue";
import VariationSelector from "@/components/VariationSelector.vue";
import ReviewSlider from "@/components/ReviewSlider.vue";
import ImageSlider from "@/components/ImageSlider.vue";
import CustomBlock from "@/components/CustomBlock.vue";
import AnnouncementBar from "@/components/AnnouncementBar.vue";
import NavBar from "@/components/NavBar.vue";
import VideoSection from "@/components/VideoSection.vue";
import ChartSection from "@/components/ChartSection.vue";
export default {
  name: "ProductView",
  components: {
    ProductTitle,
    ProductDescription,
    ExpansionPanel,
    AddToCart,
    FaqSection,
    ProductGallery,
    VariationSelector,
    ReviewSlider,
    ImageSlider,
    CustomBlock,
    AnnouncementBar,
    NavBar,
    VideoSection,
    ChartSection,
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
      shopifyProduct: {
        has_3d_model: false,
        id: 7340623331566,
        title: "RUX 70L",
        available: true,
        handle: "rux-70l",
        variants: [
          {
            id: 41903983657198,
            title: "Tan",
            option1: "Tan",
            option2: null,
            option3: null,
            sku: "PK0122-70T",
            requires_shipping: true,
            taxable: true,
            featured_image: {
              id: 38422454403310,
              product_id: 7340623331566,
              position: 1,
              created_at: "2022-11-17T10:04:54-08:00",
              updated_at: "2022-11-17T10:07:40-08:00",
              alt: null,
              width: 1500,
              height: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
              variant_ids: [41903983657198],
            },
            available: true,
            name: "RUX 70L - Tan",
            public_title: "Tan",
            options: ["Tan"],
            price: 26500,
            weight: 2210,
            compare_at_price: null,
            inventory_management: "shopify",
            barcode: "628634392102",
            featured_media: {
              alt: null,
              id: 31022222999790,
              position: 1,
              preview_image: {
                aspect_ratio: 1.0,
                height: 1500,
                width: 1500,
                src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
              },
            },
            requires_selling_plan: false,
            selling_plan_allocations: [],
          },
          {
            id: 41903983689966,
            title: "Green",
            option1: "Green",
            option2: null,
            option3: null,
            sku: "PK0122-70G",
            requires_shipping: true,
            taxable: true,
            featured_image: {
              id: 38466898133230,
              product_id: 7340623331566,
              position: 11,
              created_at: "2022-11-25T09:38:04-08:00",
              updated_at: "2022-11-25T09:38:20-08:00",
              alt: null,
              width: 1500,
              height: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-3.jpg?v=1669397900",
              variant_ids: [41903983689966],
            },
            available: true,
            name: "RUX 70L - Green",
            public_title: "Green",
            options: ["Green"],
            price: 26500,
            weight: 2210,
            compare_at_price: null,
            inventory_management: "shopify",
            barcode: "628634392119",
            featured_media: {
              alt: null,
              id: 31067438547182,
              position: 11,
              preview_image: {
                aspect_ratio: 1.0,
                height: 1500,
                width: 1500,
                src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-3.jpg?v=1669397900",
              },
            },
            requires_selling_plan: false,
            selling_plan_allocations: [],
          },
          {
            id: 41978502316270,
            title: "Black",
            option1: "Black",
            option2: null,
            option3: null,
            sku: "PK0122-70B",
            requires_shipping: true,
            taxable: true,
            featured_image: {
              id: 38466896330990,
              product_id: 7340623331566,
              position: 23,
              created_at: "2022-11-25T09:37:20-08:00",
              updated_at: "2022-11-25T09:38:20-08:00",
              alt: null,
              width: 1500,
              height: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-7-1.jpg?v=1669397900",
              variant_ids: [41978502316270],
            },
            available: true,
            name: "RUX 70L - Black",
            public_title: "Black",
            options: ["Black"],
            price: 26500,
            weight: 2210,
            compare_at_price: 0,
            inventory_management: "shopify",
            barcode: "",
            featured_media: {
              alt: null,
              id: 31067436810478,
              position: 23,
              preview_image: {
                aspect_ratio: 1.0,
                height: 1500,
                width: 1500,
                src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-7-1.jpg?v=1669397900",
              },
            },
            requires_selling_plan: false,
            selling_plan_allocations: [],
          },
          {
            id: 43440037298414,
            title: "Grey",
            option1: "Grey",
            option2: null,
            option3: null,
            sku: "PK0122-70GRY",
            requires_shipping: true,
            taxable: true,
            featured_image: {
              id: 38466896363758,
              product_id: 7340623331566,
              position: 24,
              created_at: "2022-11-25T09:37:20-08:00",
              updated_at: "2022-11-25T09:38:20-08:00",
              alt: null,
              width: 1500,
              height: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-3.jpg?v=1669397900",
              variant_ids: [43440037298414],
            },
            available: true,
            name: "RUX 70L - Grey",
            public_title: "Grey",
            options: ["Grey"],
            price: 26500,
            weight: 2210,
            compare_at_price: 0,
            inventory_management: "shopify",
            barcode: "628634392201",
            featured_media: {
              alt: null,
              id: 31067436777710,
              position: 24,
              preview_image: {
                aspect_ratio: 1.0,
                height: 1500,
                width: 1500,
                src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-3.jpg?v=1669397900",
              },
            },
            requires_selling_plan: false,
            selling_plan_allocations: [],
          },
        ],
        options: [
          {
            name: "Color",
            position: 1,
            values: ["Tan", "Green", "Black", "Grey"],
          },
        ],
        selected_or_first_available_variant: {
          id: 41903983657198,
          title: "Tan",
          option1: "Tan",
          option2: null,
          option3: null,
          sku: "PK0122-70T",
          requires_shipping: true,
          taxable: true,
          featured_image: {
            id: 38422454403310,
            product_id: 7340623331566,
            position: 1,
            created_at: "2022-11-17T10:04:54-08:00",
            updated_at: "2022-11-17T10:07:40-08:00",
            alt: null,
            width: 1500,
            height: 1500,
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            variant_ids: [41903983657198],
          },
          available: true,
          name: "RUX 70L - Tan",
          public_title: "Tan",
          options: ["Tan"],
          price: 26500,
          weight: 2210,
          compare_at_price: null,
          inventory_management: "shopify",
          barcode: "628634392102",
          featured_media: {
            alt: null,
            id: 31022222999790,
            position: 1,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            },
          },
          requires_selling_plan: false,
          selling_plan_allocations: [],
        },
        selected_variant: {
          id: 41903983657198,
          title: "Tan",
          option1: "Tan",
          option2: null,
          option3: null,
          sku: "PK0122-70T",
          requires_shipping: true,
          taxable: true,
          featured_image: {
            id: 38422454403310,
            product_id: 7340623331566,
            position: 1,
            created_at: "2022-11-17T10:04:54-08:00",
            updated_at: "2022-11-17T10:07:40-08:00",
            alt: null,
            width: 1500,
            height: 1500,
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            variant_ids: [41903983657198],
          },
          available: true,
          name: "RUX 70L - Tan",
          public_title: "Tan",
          options: ["Tan"],
          price: 26500,
          weight: 2210,
          compare_at_price: null,
          inventory_management: "shopify",
          barcode: "628634392102",
          featured_media: {
            alt: null,
            id: 31022222999790,
            position: 1,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            },
          },
          requires_selling_plan: false,
          selling_plan_allocations: [],
        },
        media: [
          {
            alt: null,
            id: 31022222999790,
            position: 1,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 1500,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
            width: 1500,
          },
          {
            alt: null,
            id: 31022223032558,
            position: 2,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-2_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-2_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223589614,
            position: 3,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Features-1_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Features-1_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223196398,
            position: 4,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-2_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-2_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223065326,
            position: 5,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-3_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-3_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022222835950,
            position: 6,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-6_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-6_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223098094,
            position: 7,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-1_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-1_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022222868718,
            position: 8,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-5_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-5_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223556846,
            position: 9,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-2_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-2_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223130862,
            position: 10,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-5_WebP.webp?v=1668708460",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-5_WebP.webp?v=1668708460",
            width: 2000,
          },
          {
            alt: null,
            id: 31067438547182,
            position: 11,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-3.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1500,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-3.jpg?v=1669397900",
            width: 1500,
          },
          {
            alt: null,
            id: 31022223163630,
            position: 12,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-4_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-4_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223261934,
            position: 13,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-1_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-1_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022222901486,
            position: 14,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-3_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-3_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223229166,
            position: 15,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-3_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-3_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 25342939234542,
            position: 16,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1200,
              width: 1200,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_CampGear_1200x1200_1_3b2609a8-789f-4b6b-b169-9fcbc397e6d5.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1200,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_CampGear_1200x1200_1_3b2609a8-789f-4b6b-b169-9fcbc397e6d5.jpg?v=1669397900",
            width: 1200,
          },
          {
            alt: null,
            id: 31022222967022,
            position: 17,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-2_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-2_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 25342939267310,
            position: 18,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1200,
              width: 1200,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_Camera_1200x1200_f60f01e6-6dda-49ac-8404-2753c9843bde.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1200,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_Camera_1200x1200_f60f01e6-6dda-49ac-8404-2753c9843bde.jpg?v=1669397900",
            width: 1200,
          },
          {
            alt: null,
            id: 31022222934254,
            position: 19,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-4_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-4_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223327470,
            position: 20,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-6_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-6_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223458542,
            position: 21,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-1_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-1_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223393006,
            position: 22,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-2_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-2_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31067436810478,
            position: 23,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-7-1.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1500,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-7-1.jpg?v=1669397900",
            width: 1500,
          },
          {
            alt: null,
            id: 31067436777710,
            position: 24,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-3.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1500,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-3.jpg?v=1669397900",
            width: 1500,
          },
          {
            alt: null,
            id: 31022223425774,
            position: 25,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-3_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-3_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223524078,
            position: 26,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-2_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-2_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223360238,
            position: 27,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-4_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-4_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223622382,
            position: 28,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-1_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-1_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223687918,
            position: 29,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-5_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-5_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223720686,
            position: 30,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-3_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-3_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223753454,
            position: 31,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-2_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-2_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31022223786222,
            position: 32,
            preview_image: {
              aspect_ratio: 1.0,
              height: 2000,
              width: 2000,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-1_WebP.webp?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 2000,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-1_WebP.webp?v=1669397900",
            width: 2000,
          },
          {
            alt: null,
            id: 31043786473710,
            position: 33,
            preview_image: {
              aspect_ratio: 1.0,
              height: 1500,
              width: 1500,
              src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70-Grey.jpg?v=1669397900",
            },
            aspect_ratio: 1.0,
            height: 1500,
            media_type: "image",
            src: "https://cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70-Grey.jpg?v=1669397900",
            width: 1500,
          },
        ],
        featured_image:
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
        aspect_ratio: 1.0,
        images: [
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-1_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-2_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Features-1_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-2_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-3_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-6_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Quote-1_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-5_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-2_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-5_WebP.webp?v=1668708460",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-3.jpg?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-4_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-1_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-3_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Holding-3_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_CampGear_1200x1200_1_3b2609a8-789f-4b6b-b169-9fcbc397e6d5.jpg?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-2_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX_70L_Birdseye_Camera_1200x1200_f60f01e6-6dda-49ac-8404-2753c9843bde.jpg?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Tan-4_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-6_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-1_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-2_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-7-1.jpg?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-3.jpg?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-3_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Grey-2_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Group-4_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Green-1_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-5_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-3_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-2_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70L-PDP-Image-Black-1_WebP.webp?v=1669397900",
          "//cdn.shopify.com/s/files/1/0313/2532/3401/products/RUX-70-Grey.jpg?v=1669397900",
        ],
        price: 26500,
      },
      reviewSlides: [
        {
          logo: "https://cdn.shopify.com/s/files/1/0313/2532/3401/files/blister_black_slider.png?v=1652335016",
          content:
            "If you’re looking for a technical carryall, be sure to check out the RUX system.",
        },
        {
          logo: "https://cdn.shopify.com/s/files/1/0313/2532/3401/files/blister_black_slider.png?v=1652335016",
          content:
            "If you’re looking for a technical carryall, be sure to check out the RUX system.",
        },
        {
          logo: "https://cdn.shopify.com/s/files/1/0313/2532/3401/files/blister_black_slider.png?v=1652335016",
          content:
            "If you’re looking for a technical carryall, be sure to check out the RUX system.",
        },
      ],
      imageSlides: [
        {
          alt: "Test",
          url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/files/home-6_1512x.jpg",
        },
        {
          alt: "Test",
          url: "https://cdn.shopify.com/s/files/1/0313/2532/3401/files/home-5_1512x.jpg",
        },
      ],
      featuredBlock:
        '<div class="text-center" style="--text-color: black;"><h3 style="font-weight: 600;" class="content__heading text-2xl text-black lg:text-5xl sm:text-4xl">Featured In</h3></div><div class="sf-custom__block-inner w-full"><div><div style="margin: auto;" data-image-id="29896732934382" class="sf-image " data-image-wrapper=""><img class="lazyautosizes lazyloaded" data-widths="[180,360,540,720,900,1080,1296,1512,1728,1920]" data-aspectratio="3.3275563258232235" data-sizes="auto" width="1920" height="577" alt="" data-image="" data-srcset="//cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_180x.jpg?v=1652589077 180w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_360x.jpg?v=1652589077 360w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_540x.jpg?v=1652589077 540w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_720x.jpg?v=1652589077 720w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_900x.jpg?v=1652589077 900w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1080x.jpg?v=1652589077 1080w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1296x.jpg?v=1652589077 1296w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1512x.jpg?v=1652589077 1512w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1728x.jpg?v=1652589077 1728w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1920x.jpg?v=1652589077 1920w" sizes="1110px" srcset="//cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_180x.jpg?v=1652589077 180w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_360x.jpg?v=1652589077 360w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_540x.jpg?v=1652589077 540w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_720x.jpg?v=1652589077 720w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_900x.jpg?v=1652589077 900w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1080x.jpg?v=1652589077 1080w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1296x.jpg?v=1652589077 1296w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1512x.jpg?v=1652589077 1512w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1728x.jpg?v=1652589077 1728w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_1920x.jpg?v=1652589077 1920w"><noscript><img class="" src="//cdn.shopify.com/s/files/1/0313/2532/3401/files/media-logos-1920_2048x2048.jpg?v=1652589077" alt=""></noscript></div></div></div>',
      topSection:
        '<div class="text-center" style="--text-color: black;"><h3 style="font-weight: 600;" class="content__heading text-2xl text-black lg:text-5xl sm:text-4xl">One System. Here to Anywhere.</h3><div class="prose max-w-none rte mt-4 text-black"><p>Packs like a box, carries like a bag, stores like a case, and travels like a boss. Ready when you are.</p><p><strong>Weatherproof</strong> &nbsp;| <strong>Collapsible</strong> &nbsp;| &nbsp;<strong>Lifetime Warranty</strong></p></div></div>',
      contentSectionOne:
        '<div class="container-fluid section-my" style="--column-gap: 100px; --row-gap: 50px; --column-gap-mobile: 30px;"><div class="sf-custom__grid flex flex-wrap  flex-row-reverse "><div class="sf-custom__block img__box-template--16687476801774__165204972199d08fce sf w-full lg:w-5/12"><div class="image__box relative"><div style="margin: auto;" data-image-id="29833117270254" class="sf-image " data-image-wrapper=""><img class="w-full h-full lazyautosizes ls-is-cached lazyloaded" data-widths="[180,360,540,720,900,1080,1200]" data-aspectratio="1.0" data-sizes="auto" width="1200" height="1200" alt="" data-image="" data-srcset="//cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_180x.jpg?v=1651616294 180w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_360x.jpg?v=1651616294 360w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_540x.jpg?v=1651616294 540w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_720x.jpg?v=1651616294 720w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_900x.jpg?v=1651616294 900w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1080x.jpg?v=1651616294 1080w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1200x.jpg?v=1651616294 1200w" sizes="405px" srcset="//cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_180x.jpg?v=1651616294 180w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_360x.jpg?v=1651616294 360w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_540x.jpg?v=1651616294 540w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_720x.jpg?v=1651616294 720w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_900x.jpg?v=1651616294 900w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1080x.jpg?v=1651616294 1080w, //cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_1200x.jpg?v=1651616294 1200w"><noscript><img class="w-full h-full" src="//cdn.shopify.com/s/files/1/0313/2532/3401/files/IMG_0461_1200x1200_2fc8925b-2134-4dea-be53-6b943a2d2800_2048x2048.jpg?v=1651616294" alt=""></noscript></div></div></div><div class="sf-custom__block content__box-template--16687476801774__165204972199d08fce flex items-center w-full lg:w-7/12 px-0"><div class="content__box w-full text-left"><h3 class="content__heading rte text-2xl md:text-5xl lg:text-5xl  mb-4 lg:mb-6">Tight Gear. Loose Plans.</h3><div class="mb-6 lg:mb-8 text-color-subtext rte prose"><p>RUX is the new all-in-one system to pack, move, and use your valuable gear. Garage to the beach. Truck to the trailhead. Ready when you need it. <strong>Just pack, grab ‘n go.</strong></p></div></div></div></div></div>',
    };
  },
};
</script>
