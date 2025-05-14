import { createApp } from 'vue'
import router from './router'
import { createHead } from '@unhead/vue'
import './style.scss'
import App from './App.vue'
const head = createHead()
createApp(App).use(router).use(head).mount('#app')

