// css
import './assets/css/main.scss'
import 'remixicon/fonts/remixicon.css'

// utils
import './assets/js/utils.js'

// vue
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
