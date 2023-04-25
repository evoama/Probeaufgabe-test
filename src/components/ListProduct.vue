<template>
  <div class="flex md:flex-row flex-col md:w-[30%] w-full bg-white shadow-lg border-2 rounded-lg"
    @click="showModal = true">
    <div class="md:w-1/4  w-full max-w-sm">
      <img :src="product.imageURL" class="w-full  h-full flex justify-between" />
    </div>
    <div class="w-3/4 p-4 h-30">
      <h1 class="text-gray-900 font-bold text-xl">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
          {{ product.name }}
        </router-link>
      </h1>
      <p class="mt-2 text-gray-600 text-sm truncate ...">{{ product.description }}</p>
      <Rating :rating="product.rating" />
      <div class="flex item-center justify-between mt-3">
        <h1 class="text-gray-700 font-bold text-xl">€{{ product.price.value }}</h1>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { Product } from '../services/ProductService';
import Rating from "./Rating.vue";

defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
})

</script>
