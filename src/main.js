import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import router from './router/router.js'
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
