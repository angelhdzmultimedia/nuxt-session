import { AuthUser } from '~~/types/auth-user'
import { LoginData } from '~~/types/login-data'
import { RegisterData } from '~~/types/register-data'
import { useCounterStore } from '../counter'

export async function loadProfile(): Promise<void> {
  isLoading.value = true
  try {
    const data: AuthUser | undefined = await $fetch('/api/auth/user')
    isAuth.value = true
    user.value = data
    await useCounterStore().findCount()
  } catch (error: unknown) {

  } finally {
    isLoading.value = false
  }
}

export function logout(): Promise<boolean> {
  return $fetch('/api/auth/logout')
}

type LoginParameters = [LoginData] | [string, string]

export async function login(email: string, password: string): Promise<void> 
export async function login(loginData: LoginData): Promise<void>
export async function login(...args: LoginParameters): Promise<void> {
  const loginData: LoginData = {email: '', password: ''}
  
  if (typeof args[0] == typeof loginData) {
    const _loginData: LoginData = args[0] as LoginData
    loginData.email = _loginData.email 
    loginData.password = _loginData.password
  } 

  const email: string = args[0] as string
  const password: string = args[1] as string
  
  if ((email) && (password)) {
    loginData.email = email
    loginData.password = password
  }

  const data = await $fetch('/api/auth/login', {
    method: 'post',
    body: loginData
  })

  user.value = {...data}
  isAuth.value = true
}

export async function register(registerData: RegisterData): Promise<void> {
  return $fetch('/api/auth/register', {
    method: 'post',
    body: registerData
  })
}