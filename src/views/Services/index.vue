<script setup lang="ts">
import InfoAlert from './Components/InfoAlert.vue'
import Service from './Components/Service.vue'
import Button from '@/components/ui/button/Button.vue'
import { Plus, MoveRight } from 'lucide-vue-next'
import { useAlertContent } from '@/stores/shared'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { h } from 'vue'
import { ToastAction } from '@/components/ui/toast'

const { alertContent } = storeToRefs(useAlertContent())
const services = ref([1])
const { toast } = useToast()
const addingNewServices = () => {
  services.value.push(services.value.length + 1)
}
const servicesCreated = () => {
  toast({
    title: 'Success',
    description: 'Service has been created successfully',
  })
  services.value = []
}
onMounted(() => {
  // console.log(alertContent.value)
})
// export default {
//   name: "ServiceSetup",
// };
</script>
<template>
  <div class="mx-auto bg-white rounded-lg space-y-6 py-2">
    <h2 class="font-bold text-2xl my-3">Service setup</h2>
    <!-- Header -->
    <InfoAlert v-if="alertContent" />
    <!-- Service Setup -->
    <div v-for="service in services" :key="service">
      <Service />
    </div>

    <!-- Create Service Button -->
    <Button variant="outline" class="border-2" @click="addingNewServices()"
      ><Plus class="mb-1" /> Add another service</Button
    >
    <Button @click="servicesCreated()" class="w-full">
      Create service <MoveRight class="inline h-5" />
    </Button>
  </div>
</template>
<style scoped></style>
