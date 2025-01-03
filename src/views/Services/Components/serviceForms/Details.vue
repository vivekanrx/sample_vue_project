<script lang="ts" setup>
import { Sunrise, Moon } from 'lucide-vue-next'
import Input from '@/components/ui/input/Input.vue'
import { ref, defineEmits, watch } from 'vue'
const name = ref<string>('')
const time = ref<'day' | 'night'>()
const setTime = (val: 'day' | 'night') => {
  time.value = val
  sendDetails()
}
const emit = defineEmits<{
  (
    event: 'sendDetails',
    payload: {
      name: string
      time: 'day' | 'night' | undefined
    },
  ): void
}>()
const sendDetails = () => {
  emit('sendDetails', {
    name: name.value,
    time: time.value,
  })
}
watch(name, () => {
  sendDetails()
})
</script>
<template>
  <div class="flex items-center gap-1">
    <Input
      type="text"
      v-model="name"
      class="focus:border-2"
      placeholder="Breakfast, Lunch, etc..."
    />
    <button
      @click="setTime('day')"
      :class="time === 'day' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500 '"
      class="w-12 h-10 flex border-2 border-gray-200 items-center justify-center rounded-lg"
    >
      <Sunrise class="h-5" />
    </button>
    <button
      @click="setTime('night')"
      :class="time === 'night' ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'"
      class="w-12 h-10 flex border-2 border-gray-200 items-center justify-center rounded-lg"
    >
      <Moon class="h-5" />
    </button>
  </div>
</template>
