<template>
    <div class="flex flex-col md:flex-row flex-wrap p-4 gap-2">
      <ListedProduct v-for="(product, index) in state.products" :key="index" :product="product"/>
    </div>
</template>

<script setup lang="ts">
import ListedProduct from "./ListProduct.vue";
import { reactive, onMounted } from "vue";
import { ProductService, Product } from "../services/ProductService";

const productService = new ProductService();

const state = reactive({ products: [] as Product[] });

onMounted(async () => {
  state.products = await productService.getProducts();
});
</script>
