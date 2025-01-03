<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
import Button from './ui/button/Button.vue';
import { useAlertContent } from '@/stores/shared';
const { showAlertContent } = useAlertContent()
</script>
<template>
  <header class="flex justify-between text-sm my-3">
    <div>
      Tip distribution <ChevronRight class="inline w-4 h-4" /> Oakville
      <ChevronRight class="inline w-4 h-4" /> <span class="text-black">New Service</span>
    </div>
    <div>
      <Button @click="showAlertContent()" class="rounded-full bg-gray-500 font-bold h-6 w-4 p-3">?</Button>
    </div>
  </header>
</template>
