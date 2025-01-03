<script lang="ts" setup>
import { ChevronRight } from 'lucide-vue-next'
import Button from './ui/button/Button.vue'
import { useAlertContent } from '@/stores/shared'
import { storeToRefs } from 'pinia'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
const { showAlertContent } = useAlertContent()
const { alertContent } = storeToRefs(useAlertContent())
</script>
<template>
  <header class="flex justify-between text-sm my-3 font-bold">
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <!-- <BreadcrumbLink href="/"> -->
          Tip distribution
          <!-- </BreadcrumbLink> -->
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <!-- <BreadcrumbLink href=""> -->
          Oakville
          <!-- </BreadcrumbLink> -->
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage class="font-bold">New Service</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
    <div>
      <Button
        @click="showAlertContent()"
        :class="alertContent ? 'bg-gray-500 text-white' : 'bg-white text-gray-500'"
        class="hover:text-white rounded-full border-2 font-bold h-6 w-4 p-3"
        >?</Button
      >
    </div>
  </header>
</template>
