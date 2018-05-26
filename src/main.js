// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import {mapState} from 'vuex';
import comm from './api/common'





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // computed:mapState({
  //   count:state=>state.count
  // }),
  data(){
    return{
      hash:this.$store.state.hash
    }
  },
  mounted(){
    router.beforeEach((to, from, next) => {
      console.log(from.path+'》》'+ to.path )
      if(this.hash.indexOf(to.path)===-1){
        this.$store.commit('forward',to.path)
      }else{
        this.$store.commit('back',to.path)
        this.$router.goBack()
      }

      next()

    })
  },
})




router.afterEach(route => {

})
Vue.mixin({
//   beforeRouteLeave(to,from,next){
//     //注册全局混合方法，由于所有页面都进行了缓存，页面返回时将当前页面销毁
//     alert(1)
//     next()
//   },


})

