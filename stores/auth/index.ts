import * as state from './state'
import * as actions from './actions'

export const useAuthStore = defineStore('auth', () => {
  return {
    ...state,
    ...actions
  }
})