import { createApp } from 'vue'
import App from './App'
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) // $route, $router
  .use(store) // $store
  .use(loadImage) // $loadImage
  .mount('#app')
