import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import './components/script.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(bootstrap).mount('#app')
