// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/vuex/store'

//按需引入部分组件
import { Toast, Header} from 'mint-ui'
Vue.prototype.$toast = Toast;
Vue.component(Header.name, Header);

//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
let mv = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  data(){
    return{
      hash:this.$store.state.hash
    }
  },
  mounted() {
    //监听全局路由，判断页面的前进跟后退
    router.beforeEach((to, from, next) => {
      if(this.hash.indexOf(to.path) === -1) {
        this.$store.commit('forward',to.path)
      } else {
        this.$store.commit('back',to.path)
        // this.$destroy()
        this.$router.isBack = true
      }
      next()
    })
  },
})

