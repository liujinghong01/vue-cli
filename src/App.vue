<template>
  <div id="app">
      <transition :name="transitionName">
        <keep-alive :include="includePageNames">
          <!--<component class="Router" ></component>-->
          <router-view class="Router"></router-view>
        </keep-alive>
　　　　</transition>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right' , // 默认动态路由变化为slide-right
      includePageNames:'enter'//入口页面默认需要缓存
    }
  },
  mounted() {

  },
  watch: {
    '$route' (to, from) {//  监听路由变化时的状态为前进还是后退
      this.includePageNames='enter'+this.$store.state.hash.toString().replace(/\//g, "")
      let isBack = this.$router.isBack
      if(isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  },

}
</script>

<style lang="less">
  @import "style/comm";
  #app{
    width: 100%;
    height: 100%;
  }
  .Router {
    position: absolute;
    width: 100%;
    transition: all .3s ease-out;
    top: 0px;
  }
  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transition: all .3s ease-in;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 1;
    /*transition: all .3s ease-out;*/
    transition: all .3s ease-in;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
