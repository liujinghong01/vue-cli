// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import comm from './api/common'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
  console.log(from)
  console.log(to)
  next()
})

router.afterEach(route => {

})
// Vue.mixin({
//   beforeRouteLeave(to,from,next){
//     //注册全局混合方法，由于所有页面都进行了缓存，页面返回时将当前页面销毁
//     // alert(1)
//     next()
//   }
// })
