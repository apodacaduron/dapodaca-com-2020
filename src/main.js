import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/router';
import VueTilt from 'vue-tilt.js'

Vue.use(VueTilt)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes
}).$mount('#app')
