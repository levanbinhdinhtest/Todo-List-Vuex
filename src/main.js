import { createApp } from 'vue'
import App from './App.vue'
import store from './index';
// Create a new store instance.
const app = createApp(App)

  app.use(store);
app.mount("#app");