import Vue from 'vue'
import Router from 'vue-router'
import enter from '@/components/enter'

Vue.use(Router)

// Router.prototype.goBack = function () {
//   this.isBack = true
//   window.history.go(-1)
// }
Router.prototype.isBack = false
Router.prototype.goBack = function () {
  this.isBack = true
  // window.history.go(-1)
}

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
  ]
})
