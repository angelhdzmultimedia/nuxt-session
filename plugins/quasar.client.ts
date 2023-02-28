import * as components from 'quasar'
const {Quasar, Dialog, Notify, Dark} = components

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components,
    plugins: {
      Dialog, 
      Notify, 
      Dark
    }
  })
})