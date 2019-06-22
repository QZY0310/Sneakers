// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/iconfont.css'
import Bmob from 'hydrogen-js-sdk'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Bmob.initialize('86d27f2878f916e31f38c9bcfbde7910', 'bd43de4667eb11d67939aa2f0174ea67')
Vue.prototype.Bmob = Bmob
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
