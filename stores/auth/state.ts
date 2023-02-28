import { AuthUser } from '~~/types/auth-user'

export const isAuth = ref<boolean>(false)
export const isLoading = ref<boolean>(false)
export const user = ref<AuthUser | undefined>(undefined)
