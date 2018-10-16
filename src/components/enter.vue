<template>
  <div class="view-page">
    <mt-header :title="msg">
      <a   slot="left">
        <a class="back-icon">1</a>
      </a>
      <!--这个头部导航栏关键的是mt-header父标签,而该标签内的内容是根据需求写的哦-->
    </mt-header>
    <ul>
      <li v-for="(item,index) in page" @click="itemClick(item,index)">{{ item.page }}</li>
      <li>{{ $store.state.count}}</li>
      <li @click="$store.commit('add')">+</li>
      <li @click="$store.commit('reduce')">-</li>
    </ul>

    <!--<div @click="close">通过url传参数</div>-->
    <!--<input type="file"/>-->
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import {joinProject} from '@/api/request'
export default {
  name: 'enter',
  data () {
    return {
      msg: ' 入口页面',
      page:[
        {page:'页面1',path:'/page1'}
      ]
    }
  },
  store,
  mounted(){
    this.$toast('Hello world!')
    let requestData={token:'4MskjSMoBcSBRPFWFYg6PnelhJ6RQuZd',code:'PRO201809060373',mobile:'18566205263'}
    joinProject(requestData).then(res => {
      alert('啦啦啦德玛西亚')
    }).catch(error => {
      console.log(error.description)
    })
  },
  methods:{
    itemClick(item,index){
      this.$router.push({
        path:item.path,
        query:{
          index:index
        }
      })
    },
    close(){
      alert(window.location.href)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1{
    text-align: center;
    height:1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #5270ff;
    background: #5495FF;
  }
  li{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-bottom: 1px solid #5495FF;
  }
</style>
