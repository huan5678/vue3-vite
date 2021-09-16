import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import axios from 'axios'

const app = createApp(App).mount('#app')
app.provide('$axios', axios)
