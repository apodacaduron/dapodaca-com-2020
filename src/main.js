import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/router';
import feather from 'vue-icon';
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);
Vue.use(feather, 'v-icon');
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes
}).$mount('#app')
