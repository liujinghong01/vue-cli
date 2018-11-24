<template>
  <div class="view-page">
    <h3> <span style="float: left;"  @click="$router.go(-1)">返回</span>你好,这是页面1</h3>
    <p style="line-height: 2rem" @click="itemClick">  前往页面2</p>
    <p>{{$store.state.count}}</p>
    <p @click="$store.commit('add')">+</p>
    <p @click="$store.commit('reduce')">-</p>
    <img src="http://bpic.588ku.com/back_pic/05/77/13/045bee353edc1d7.jpg!r850/fw/800" preview="0" preview-text="美景">
    <img src="http://bpic.588ku.com/back_pic/05/77/13/225bee38f0b9dc9.jpg!r850/fw/800" preview="0" preview-text="美女">
  </div>
</template>

<script>

  import store from '@/vuex/store'
  import {joinProject} from '@/api/request'
  export default {
    name: 'page1',
    data(){
      return{

      }
    },
    mounted(){
      this.$toast('Hello world!')
      let requestData={token:'4MskjSMoBcSBRPFWFYg6PnelhJ6RQuZd',code:'PRO201809060373',mobile:'18566205263'}
      joinProject(requestData).then(res => {
        alert('啦啦啦德玛西亚')
        console.log(res)
      }).catch(error => {
        alert('啦啦啦德玛西亚2')
        console.log(error)
      })
    },
    methods:{
      itemClick(item,index){
        this.$router.push({
          path:'/page2',

        })
      }
    }
  }
</script>

<style lang="less">
  h3{
    text-align: center;
    height:1.5rem;
    line-height: 1.5rem;
    border-bottom: 1px solid #5270ff;
    background: #5495FF;
  }
  p{
    text-align: center;
    border-bottom: 1px solid #5495FF;
  }
</style>
