import { UserCount } from '~~/types/user-count'
import { count } from './state'

export async function add(): Promise<void> {
  const auth = useAuthStore()
  const data: UserCount = await $fetch(`/api/counter/add/${auth.user?.id}`)
  
  count.value = data.count
}

export async function reset(): Promise<void> {
  const auth = useAuthStore()
  const data: UserCount = await $fetch(`/api/counter/reset/${auth.user?.id}`)
  
  count.value = data.count
}

export async function findCount(): Promise<void> {
  const auth = useAuthStore()
  const data: UserCount = await $fetch(`/api/counter/find/${auth.user?.id}`)
  
  count.value = data.count
}