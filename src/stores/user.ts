import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserRole } from '@/types'

export const useUserStore = defineStore('user', () => {
  const role = ref<UserRole>('artist')
  const name = ref('Demo User')

  function setRole(r: UserRole) {
    role.value = r
  }

  return { role, name, setRole }
})
