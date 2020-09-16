// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "../static/default.css"



import 'swiper/css/swiper.min.css'  // 根据实际路径和文件修改

import animated from 'animate.css'


// import 'babel-polyfill'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
Vue.use(animated)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,

  components: { App },
  template: '<App/>'
})
