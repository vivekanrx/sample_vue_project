<script lang="ts" setup>
import { ref, watch } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTimeframeContent } from '@/stores/shared/useTimeframeContent'
import { Trash2 } from 'lucide-vue-next'
const { days, times } = useTimeframeContent()
const operatingHours = ref<{ start_time: string; end_time: string }>({
  start_time: '',
  end_time: '',
})
const operationalDays = ref<string[]>([])
const emit = defineEmits<{
  (
    event: 'sendTimeframe',
    payload: {
      operational_days: string[]
      operational_time: { start_time: string; end_time: string }
    },
  ): void;
  (
    event: 'deleteTimeframe',
    payload: null,
  ): void;
}>()

const props = defineProps<{
        timeframeIndex:number
}>()

const sendTimeframe = () => {
  emit('sendTimeframe', {
    operational_days: operationalDays.value,
    operational_time: operatingHours.value,
  })
}

watch(operatingHours, () => {
  sendTimeframe()
})

const toggleOperationalDays = (day: string) => {
  console.log(operatingHours.value)
  if (operationalDays.value.includes(day)) {
    operationalDays.value = operationalDays.value.filter((d) => d !== day)
  } else {
    operationalDays.value.push(day)
  }
  sendTimeframe()
}
</script>
<template>
  <div class="flex flex-col gap-3">
    <div>
      <div class="flex justify-between items-center">
        <div>
          <h4 class="text-md font-medium text-gray-700">Operating days</h4>
          <p class="text-sm text-gray-500">Mark the days this service operates.</p>
        </div>
        <div>
          <Button @click="emit('deleteTimeframe', null)" v-show="props.timeframeIndex !== 0" variant="destructive" class="rounded-full p-3"><Trash2 /></Button>
        </div>
      </div>

      <div class="mt-2 flex gap-2">
        <button
          v-for="day in days"
          :key="day.key"
          @click="toggleOperationalDays(day.key)"
          :class="
            operationalDays.includes(day.key) ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'
          "
          class="w-10 h-10 font-bold text-sm flex border-2 border-gray-200 items-center justify-center rounded-full"
        >
          {{ day.label }}
        </button>
      </div>
    </div>
    <!-- Operating Hours -->
    <div>
      <h4 class="text-md font-medium text-gray-700">Operating hours</h4>
      <div>
        <div class="flex gap-2 items-center text-sm">
          <div>Set Start time:</div>
          <Select v-model="operatingHours.start_time">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="XX:XX" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem v-for="time in times" :key="time.key" :value="time.key">
                  {{ time.label }}
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div class="flex gap-2 items-center mt-2 text-sm">
          <div>Set End Time:</div>
          <div>
            <Select v-model="operatingHours.end_time">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="XX:XX" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="time in times" :key="time.key" :value="time.key">
                    {{ time.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
