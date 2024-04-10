import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { useVuelidate } from '@vuelidate/core';



const vuetify = createVuetify({
  components,
  directives,
})

const myApp = createApp(App)
myApp.use(vuetify)
myApp.use(router)
myApp.use(useVuelidate)
myApp.mount('#app')
