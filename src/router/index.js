import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'

Vue.use(Router)

//isBack:判断页面返回执行后退的动画
Router.prototype.isBack = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enter',
      component: enter
    },
    {
      path: '/page1',
      name: 'page1',
      component: function (resolve) {
        require(['@/view/page1/index'], resolve)
      }
    },
    {
      path: '/page2',
      name: 'page2',
      component: function (resolve) {
        require(['@/view/page2/index'], resolve)
      }
    },
    {
      path: '/page3',
      name: 'page3',
      component: function (resolve) {
        require(['@/view/page3/index'], resolve)
      }
    },
  ]
})
