import * as state from './state'
import * as actions from './actions'

export const useCounterStore = defineStore('counter', () => {
  return {
    ...state,
    ...actions
  }
})