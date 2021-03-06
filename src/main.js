// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/app-style.css'
import './assets/module-css/show-style.css'

require('es6-promise').polyfill()
const axios = require('axios')

Vue.config.productionTip = false
Vue.use(elementUI);
Vue.mixin({
  created : function () {
    this.axios = axios
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
