import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '../static/reset.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible'
import common from './plugins/common';
Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(common);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
