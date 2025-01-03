<script lang="ts" setup>
import { ref } from 'vue'
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
const {days, times} = useTimeframeContent()
// const days = [
//   {
//     key: 'mon',
//     label: 'M',
//   },
//   {
//     key: 'tue',
//     label: 'T',
//   },
//   {
//     key: 'wed',
//     label: 'W',
//   },
//   {
//     key: 'thu',
//     label: 'T',
//   },
//   {
//     key: 'fri',
//     label: 'F',
//   },
//   {
//     key: 'sat',
//     label: 'S',
//   },
//   {
//     key: 'sun',
//     label: 'S',
//   },
// ]
// const times = [
//         {key: '00:00', label: '00:00 AM'},
//         {key: '01:00', label: '01:00 AM'},
//         {key: '02:00', label: '02:00 AM'},
//         {key: '03:00', label: '03:00 AM'},
//         {key: '04:00', label: '04:00 AM'},
//         {key: '05:00', label: '05:00 AM'},
//         {key: '06:00', label: '06:00 AM'},
//         {key: '07:00', label: '07:00 AM'},
//         {key: '08:00', label: '08:00 AM'},
//         {key: '09:00', label: '09:00 AM'},
//         {key: '10:00', label: '10:00 AM'},
//         {key: '11:00', label: '11:00 AM'},
//         {key: '12:00', label: '12:00 PM'},
//         {key: '13:00', label: '01:00 PM'},
//         {key: '14:00', label: '02:00 PM'},
//         {key: '15:00', label: '03:00 PM'},
//         {key: '16:00', label: '04:00 PM'},
//         {key: '17:00', label: '05:00 PM'},
//         {key: '18:00', label: '06:00 PM'},
//         {key: '19:00', label: '07:00 PM'},
//         {key: '20:00', label: '08:00 PM'},
//         {key: '21:00', label: '09:00 PM'},
//         {key: '22:00', label: '10:00 PM'},
//         {key: '23:00', label: '11:00 PM'},
// ]
const operationalDays = ref<string[]>([])
const toggleOperationalDays = (day: string) => {
  if (operationalDays.value.includes(day)) {
    operationalDays.value = operationalDays.value.filter((d) => d !== day)
  } else {
    operationalDays.value.push(day)
  }
}

</script>
<template>
  <div class="flex flex-col gap-3">
    <div>
      <h4 class="text-md font-medium text-gray-700">Operating days</h4>
      <p class="text-sm text-gray-500">Mark the days this service operates.</p>
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
      <div class="flex items-center flex-wrap gap-2 mt-2 w-full">
        <Select>
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Set start time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
               <SelectItem v-for="time in times" :key="time.key" :value="time.key"> {{time.label}} </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        to
        <Select>
          <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Set end time" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
               <SelectItem v-for="time in times" :key="time.key" :value="time.key"> {{time.label}} </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
</template>
