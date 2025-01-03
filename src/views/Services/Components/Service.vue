<script lang="ts" setup>
import { Sunrise, Moon, Plus } from 'lucide-vue-next';
import { Separator } from '@/components/ui/separator'
</script>
<template>
  <div class="space-y-4 rounded-lg shadow-lg py-4 px-6 border border-gray-200">
        <div>
                <h3 class="font-medium text-gray-700">Service details</h3>
        </div>
    
    <div class="flex flex-col gap-3 mt-2 space-y-3">
      <!-- Name & Icon -->
      <div class="flex items-center gap-1">
        <input
          type="text"
          placeholder="Breakfast, Lunch, etc..."
          class="flex-1 p-2 h-10 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button class="w-10 h-10 flex border-2 border-gray-200 items-center justify-center rounded-lg">
          <Sunrise class="text-gray-500 h-5"/>
        </button>
        <button class="w-10 h-10 flex border-2 border-gray-200 items-center justify-center rounded-lg">
                <Moon class="text-gray-500 h-5"/>
        </button>
      </div>

      <div class="relative">
        <span class="absolute bg-white font-bold font-serif z-10 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">TIMEFRAME</span>
        <Separator/>
      </div>

      <!-- Operating Days -->
      <div>
        <h4 class="text-md font-medium text-gray-700">Operating days</h4>
        <p class="text-sm text-gray-500">Mark the days this service operates.</p>
        <div class="mt-2 flex gap-2">
          <button
            v-for="day in ['M', 'T', 'W', 'T', 'F', 'S', 'S']"
            :key="day"
            class="w-8 h-8 flex border-2 font-bold shadow-lg items-center justify-center rounded-full border-gray-300 text-gray-700 hover:bg-blue-100 text-sm hover:border-blue-500"
          >
            {{ day }}
          </button>
        </div>
      </div>

      <!-- Operating Hours -->
      <div>
        <h4 class="text-sm font-medium text-gray-700">Operating hours</h4>
        <div class="mt-2 flex items-center gap-4">
          <select
            class="p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>Set start time</option>
            <option>8:00 AM</option>
            <option>9:00 AM</option>
            <option>10:00 AM</option>
          </select>
          <span>to</span>
          <select
            class="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled selected>Set end time</option>
            <option>12:00 PM</option>
            <option>1:00 PM</option>
            <option>2:00 PM</option>
          </select>
        </div>
      </div>
      <Separator/>
      <!-- Add Timeframe -->
      <button class="text-blue-500 font-medium hover:underline w-fit"><Plus class="inline h-5 mb-1"/> Add another timeframe</button>
    </div>
  </div>
</template>
