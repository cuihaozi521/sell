import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods.vue'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {App},
  router
}).$mount('#app')
