import {quasar} from '@quasar/vite-plugin'

function generateQuasarCss(path: string) {
  return `@quasar/extras/${path}/${path}.css`
}

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt'
  ],
  imports: {
    dirs: [
      'stores/**'
    ],
    imports: [
      {from: 'quasar', name: 'Dark'},
      {from: 'quasar', name: 'Notify'},
      {from: 'quasar', name: 'Dialog'},
      {from: 'pinia', name: 'defineStore'},
      {from: 'pinia', name: 'storeToRefs'},
    ]
  },
  ssr: false,
  css: [
    generateQuasarCss('roboto-font'),
    generateQuasarCss('material-icons'),
    generateQuasarCss('fontawesome-v6'),
    'quasar/src/css/index.sass'
  ],
  build: {
    transpile: [
      'quasar'
    ]
  },
  vite: {
    plugins: [
      quasar()
    ]
  }
})
