import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useTimeframeContent = defineStore('timeframeContent', () => {
//     const count = ref(0)
    const days = [
      {
        key: 'mon',
        label: 'M',
      },
      {
        key: 'tue',
        label: 'T',
      },
      {
        key: 'wed',
        label: 'W',
      },
      {
        key: 'thu',
        label: 'T',
      },
      {
        key: 'fri',
        label: 'F',
      },
      {
        key: 'sat',
        label: 'S',
      },
      {
        key: 'sun',
        label: 'S',
      },
    ]
    const times = [
      { key: '00:00', label: '00:00 AM' },
      { key: '01:00', label: '01:00 AM' },
      { key: '02:00', label: '02:00 AM' },
      { key: '03:00', label: '03:00 AM' },
      { key: '04:00', label: '04:00 AM' },
      { key: '05:00', label: '05:00 AM' },
      { key: '06:00', label: '06:00 AM' },
      { key: '07:00', label: '07:00 AM' },
      { key: '08:00', label: '08:00 AM' },
      { key: '09:00', label: '09:00 AM' },
      { key: '10:00', label: '10:00 AM' },
      { key: '11:00', label: '11:00 AM' },
      { key: '12:00', label: '12:00 PM' },
      { key: '13:00', label: '01:00 PM' },
      { key: '14:00', label: '02:00 PM' },
      { key: '15:00', label: '03:00 PM' },
      { key: '16:00', label: '04:00 PM' },
      { key: '17:00', label: '05:00 PM' },
      { key: '18:00', label: '06:00 PM' },
      { key: '19:00', label: '07:00 PM' },
      { key: '20:00', label: '08:00 PM' },
      { key: '21:00', label: '09:00 PM' },
      { key: '22:00', label: '10:00 PM' },
      { key: '23:00', label: '11:00 PM' },
    ]
    return { days, times }
  })


//   import { defineStore } from 'pinia'
// import { ref, reactive } from 'vue'

// export const useAlertContent = defineStore('alertContent', () => {
//   const alertContent = ref<boolean>(true)
//   const hideAlertContent = () => {
//     alertContent.value = false
//   }
//   const showAlertContent = () => {
//     alertContent.value = true
//   }
//   return {
//     alertContent,
//     hideAlertContent,
//     showAlertContent
// }
// })
