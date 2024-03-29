import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap"
import store from './store'

createApp(App).use(store).use(router).mount('#app')
