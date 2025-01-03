<script setup lang="ts">
import InfoAlert from './Components/InfoAlert.vue'
import Service from './Components/Service.vue'
import Button from '@/components/ui/button/Button.vue'
import { Plus, MoveRight } from 'lucide-vue-next'
import { useAlertContent } from '@/stores/shared';
import { storeToRefs } from 'pinia';
import {onMounted} from 'vue'
const { alertContent } = storeToRefs(useAlertContent())

onMounted(() => {
        console.log(alertContent.value)
})
// export default {
//   name: "ServiceSetup",
// };
</script>
<template>
  <div class="max-w-xl mx-auto bg-white rounded-lg space-y-6 py-2">
    <h2 class="font-bold text-2xl my-3">Service setup</h2>
    <!-- Header -->
    <InfoAlert v-if="alertContent"/>
    <!-- Service Setup -->
    <Service />

    <!-- Create Service Button -->
    <Button class=""><Plus class="mb-1" /> Add another service</Button>
    <Button class="w-full"> Create service <MoveRight class="inline h-5" /> </Button>
  </div>
</template>
<style scoped></style>
