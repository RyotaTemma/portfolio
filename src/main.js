import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const app = createApp(App)
console.log('Vue app created')

app.mount('#app')
console.log('App mounted')
