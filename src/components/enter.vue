<template>
  <div class="view-page">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in page" @click="itemClick(item,index)">{{ item.page }}</li>
    </ul>
    <div @click="close">关闭</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ' 入口页面',
      page:[
        {page:'页面1',path:'/page1'},
        {page:'页面2',path:'/page2'}
      ]
    }
  },
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
      // mui.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  h1{
    text-align: center;
  }
  li{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
  }
</style>
