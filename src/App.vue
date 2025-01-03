<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Toaster from './components/ui/toast/Toaster.vue';
</script>

<template>
  <div class="p-2 md:p-6 max-w-[1500px] mx-auto text-gray-600">
    <Navbar/>
    <RouterView />
    <Toaster/>
  </div>
</template>

<style scoped>
</style>
