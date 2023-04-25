<template>
  <div>
    <div class="flex justify-end my-2">
      <button class="px-4 py-2 bg-gray-200 rounded" @click="showAll">Show all</button>
      <button class="ml-2 px-4 py-2 bg-gray-200 rounded" @click="showAvailable">Available only</button>
    </div>

    <div class="flex flex-col md:flex-row flex-wrap p-4 gap-2">
      <ListedProduct v-for="(product, index) in state.filteredProducts" :key="index" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ListedProduct from "../components/ListProduct.vue";
import { reactive, onMounted } from "vue";
import { ProductService, Product } from "../services/ProductService";

const productService = new ProductService();

const state = reactive({
  products: [] as Product[],
  filteredProducts: [] as Product[],
  error: "",
});

const loadProducts = async () => {
  try {
    state.products = await productService.getProducts();
    state.filteredProducts = state.products;
  } catch (error) {
    state.error = "Failed to load products.";
    console.error(error);
  }
};

onMounted(loadProducts);

const showAll = () => {
  state.filteredProducts = state.products;
};

const showAvailable = () => {
  state.filteredProducts = state.products.filter((product) => product.available);
};

</script>
