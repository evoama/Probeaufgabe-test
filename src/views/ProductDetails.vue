<template>
  <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
    <div class="md:flex items-center -mx-10">
      <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
        <div class="relative">
          <img :src="product?.imageURL" class="w-full relative z-10" alt="">
          <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-10">
        <div class="mb-1">
          <h1 class="font-bold uppercase text-2xl mb-5">{{ product?.name }}</h1>
          <p class="text-sm">{{ product?.description }}</p>
        </div>
        <div class="mb-10">
          <div class="inline-block align-bottom mr-5">
            <Rating :rating="product?.rating" />
          </div>
        </div>
        <div class="mb-10">
          <div class="inline-block align-bottom mr-5">
            <span class="text-2xl leading-none align-baseline">€</span>
            <span class="font-bold text-5xl leading-none align-baseline">{{ product?.price.value }}</span>
            <span class="text-2xl leading-none align-baseline">{{ product?.price.value }}</span>
          </div>
          <div class="inline-block align-bottom">
            <button
              class="bg-blue-300 opacity-75 hover:opacity-100 text-blue-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i
                class="mdi mdi-heart -ml-2 mr-2"></i> Vormerken</button>
          </div>
        </div>
        <div class="mb-1">
          <p class="text-sm">{{ product?.longDescription }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="flex md:flex-row flex-col md:w-[30%] w-full bg-white shadow-lg border-2 rounded-lg">
    <div class="md:w-1/4  w-full max-w-sm">
      <img :src="product?.imageURL" class="w-full  h-full flex justify-between" />
    </div>
    <div class="w-3/4 p-4 h-30">
      <h1 class="text-gray-900 font-bold text-xl">{{ product?.name }}</h1>
      <p class="mt-2 text-gray-600 text-sm truncate ...">{{ product?.description }}</p>
      <Rating :rating="product?.rating" />
      <div class="flex item-center justify-between mt-3">
        <h1 class="text-gray-700 font-bold text-xl">€{{ product?.price.value }}</h1>
      </div>
    </div>
  </div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Product } from '../services/ProductService';
import { useRoute } from 'vue-router';
import Rating from "../components/Rating.vue";
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

const product = ref<Product>();

onMounted(async () => {
  let id = useRoute().params.id;
  let lproduct = await productService.getById(id);
  product.value = lproduct;
});

</script>
<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
