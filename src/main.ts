import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { maskito } from '@maskito/vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faBars,
  faBell,
  faFilter,
  faCompass,
  faHome,
  faSearch,
  faCar,
  faHeart,
  faUser,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faTimes,
  faBars,
  faBell,
  faFilter,
  faCompass,
  faHome,
  faSearch,
  faCar,
  faHeart,
  faUser,
  faInfoCircle
)

const app = createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .directive('maskito', maskito)

app.use(createPinia())
app.use(router)

app.mount('#app')
