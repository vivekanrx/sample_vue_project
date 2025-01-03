<script lang="ts" setup>
import { Sunrise, Moon, Plus } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import Details from './serviceForms/Details.vue';
import TimeFrames from './serviceForms/TimeFrames.vue';
</script>
<template>
  <div class="space-y-4 rounded-lg shadow-lg py-4 px-6 border border-gray-200">
    <div>
      <h3 class="font-medium text-gray-700">Service details</h3>
    </div>

    <div class="flex flex-col gap-3 mt-2 space-y-3">
      <!-- Name & Icon -->
      
        <Details/>
      <div class="relative">
        <span
          class="absolute bg-white font-bold z-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500"
          >TIMEFRAME</span
        >
        <Separator />
      </div>
      <TimeFrames/>
    </div>
  </div>
</template>
