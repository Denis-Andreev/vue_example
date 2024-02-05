import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import "primevue/resources/themes/lara-light-green/theme.css";

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toast from "primevue/toast";

export const app = createApp(App)
  .use(createPinia())
  .use(router).component('fa-icon', FontAwesomeIcon)
  .use(PrimeVue)
  .use(ToastService)
  .component("Toast", Toast)
  .mount('#app')