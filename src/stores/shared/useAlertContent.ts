import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useAlertContent = defineStore('alertContent', () => {
  const alertContent = ref<boolean>(true)
  const hideAlertContent = () => {
    alertContent.value = false
  }
  const showAlertContent = () => {
    alertContent.value = true
  }
  return {
    alertContent,
    hideAlertContent,
    showAlertContent,
  }
})
