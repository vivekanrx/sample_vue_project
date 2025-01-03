<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="p-2 md:p-6 max-w-xl mx-auto text-gray-600">
    <Navbar/>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
