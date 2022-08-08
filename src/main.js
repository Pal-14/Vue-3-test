import { createApp} from 'vue'
import App from './App.vue'


// import bootstrap 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export const bus = createApp()

createApp(App).mount('#app')
