<template>
  <div class="page-container">
    <AnnouncementBar></AnnouncementBar>
    <NavBar></NavBar>

    <div class="product-container container mx-auto">
      <div class="container mx-auto px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div id="product-photos">
            <ProductGallery :images="product.images"></ProductGallery>
          </div>
          <div id="product-details">
            <ProductTitle class="mb-4">Test</ProductTitle>
            <ProductDescription
              :description="product.description"
            ></ProductDescription>
            <span class="product-price text-2xl block mt-4 mb-4 text-black"
              >{{ currency }}{{ product.pricing.regularPrice.toFixed(2) }}</span
            >
            <VariationSelector></VariationSelector>
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
        <CustomBlock :content="topSection"></CustomBlock>
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
      <div id="faq" class="px-12">
        <FaqSection :faqs="product.faq"></FaqSection>
      </div>
      <div id="test-component"></div>
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
    };
  },
};
</script>
