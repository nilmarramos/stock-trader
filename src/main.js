import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.filter('currency', (value) => {
  return 'R$' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
