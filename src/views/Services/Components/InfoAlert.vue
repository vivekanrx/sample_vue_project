<script setup lang="ts">
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, X } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue';
import { useAlertContent } from '@/stores/shared';
const { hideAlertContent } = useAlertContent()
</script>

<template>
  <Alert class="relative bg-blue-50 text-[#1D4ED8] p-5">
    <Button @click="hideAlertContent()" class="absolute top-0 right-0 w-5 h-6 bg-inherit hover:bg-inherit shadow-none"><X :stroke-width="3" class="text-gray-500"/></Button>
    <AlertCircle class="w-5 h-5 text-blue-600 my-1"/>
    <AlertTitle>What are services?</AlertTitle>
    <AlertDescription class="text-sm text-[#1D4ED8]">
        Services are specific periods, like lunch or dinner shifts, when your staff earns tips. Set up services according to your location's operation hours.
    </AlertDescription>
  </Alert>
</template>