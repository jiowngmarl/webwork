//import './assets/main.css'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'



const vuetify = createVuetify({
  components,
  directives,
})


const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
