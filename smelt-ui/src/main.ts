import { createApp } from 'vue'

import { Quasar, Notify } from 'quasar'
import 'quasar/src/css/index.sass'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'

// Material icons are needed for some components default icons (arrows and such)
import '@quasar/extras/material-icons/material-icons.css'

// todo: do we want to use EOS icons? FAS? Are we fine with just material icons? or other?

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify }
})

app.use(router)

app.mount('#app')
