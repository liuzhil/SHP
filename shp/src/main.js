import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav';
import api from '@/api';
import store from './store';

import router from '@/router'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
