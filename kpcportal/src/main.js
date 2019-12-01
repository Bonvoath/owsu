import Vue from 'vue'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import App from './App.vue'
import router from './routers'
import Core from './shared/core'
Vue.use(Core);
import store from './shared/store'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')