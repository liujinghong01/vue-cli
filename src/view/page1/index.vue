<template>
  <div class="view-page">
    <h3> <span style="float: left;"  @click="$router.go(-1)">返回</span>你好,这是页面1</h3>
    <p style="line-height: 2rem" @click="itemClick">  前往页面2</p>
    <p>{{$store.state.count}}</p>
    <p @click="$store.commit('add')">+</p>
    <p @click="$store.commit('reduce')">-</p>
  </div>
</template>

<script>
  import store from '@/vuex/store'
export default {
  name: 'page1',
  data(){
    return{

    }
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
