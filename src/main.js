import { createApp } from 'vue'
import Login from './views/Login/Login.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(Login)
  .use(vuetify)
  .mount('#app')
