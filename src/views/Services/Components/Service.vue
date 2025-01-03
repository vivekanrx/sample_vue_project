<script lang="ts" setup>
import { Sunrise, Moon, Plus } from 'lucide-vue-next'
import { Separator } from '@/components/ui/separator'
import Details from './serviceForms/Details.vue';
import TimeFrames from './serviceForms/TimeFrames.vue';
import Button from '@/components/ui/button/Button.vue';
import { ChevronDown, ChevronUp } from 'lucide-vue-next';
import { ref } from 'vue';
const detailsVisible = ref(true)
type DetailsData = {
  name: string
  time: 'day' | 'night' | undefined
}
const settingDetailsData = (data: DetailsData) => {
//   console.log(data)
}

</script>
<template>
  <div class="space-y-4 rounded-lg shadow-lg py-4 px-6 border border-gray-200">
    <div class="flex justify-between">
      <h3 class="font-medium text-gray-700">Service details</h3>
      <Button @click="detailsVisible = true" stroke-width="3" variant="outline" class="p-3 rounded-full border-none hover:none" v-show="!detailsVisible"><ChevronDown/></Button>
      <Button @click="detailsVisible = false" stroke-width="3" variant="outline" class="p-3 rounded-full border-none hover:none" v-show="detailsVisible"><ChevronUp/></Button>
    </div>

    <div v-show="detailsVisible" class="flex flex-col gap-3 mt-2 space-y-3">
      <!-- Name & Icon -->
        <Details @send-details="settingDetailsData"/>
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
