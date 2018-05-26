<template>
  <div class="view-page">
    <h1>{{ msg }}</h1>
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
export default {
  name: 'HelloWorld',
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
