<script lang="ts" setup>
import TimeFrame from './TimeFrame.vue'
import { ref } from 'vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { Plus } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
const timeFrames = ref([1])
const addingNewTimeFrame = () => {
  timeFrames.value.push(timeFrames.value.length + 1)
}
const deletingTimeFrame = (index: number) => {
  timeFrames.value = timeFrames.value.filter((_, i) => i !== index)
}
</script>
<template>
  <div v-for="(frame, index) in timeFrames" :key="index">
    <TimeFrame @send-timeframe="() => {}" :timeframeIndex="index" @delete-timeframe="deletingTimeFrame(index)"/>
    <!-- Add Timeframe -->
    <Separator class="mt-4"/>
  </div>

  <Button
    @click="addingNewTimeFrame()"
    variant="link"
    class="text-blue-500 my-0 px-0 font-medium hover:underline w-fit cursor-pointer"
  >
    <Plus class="inline h-5 mb-1" /> Add another timeframe
  </Button>
</template>
