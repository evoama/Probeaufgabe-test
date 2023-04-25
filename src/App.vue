<template>
  <div class="w-full bg-white shadow-sm sticky top-0">
    <div class="w-full px-4 sm:px-6 lg:px-8 py-1 md:py-4">
      <div class="flex items-center justify-between md:justify-start">
        <a href="/" class="font-bold text-gray-700 text-2xl">Shop.</a>
      </div>
    </div>
  </div>
  <div class="container justify-center">
    <nav aria-label="breadcrumb">
      <ol class="flex space-x-2">
        <li><a href="/" class="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700">Home</a></li>
        <li><a href="/" class="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700">Products</a></li>
        <li class="text-purple-700" aria-current="page">Overview</li>
      </ol>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>
<style>
#app {
  @apply antialiased flex flex-col items-center mt-4;
}
</style>
