<template>
  <div class="view-page">
    <h3> <span style="float: left;"  @click="$router.go(-1)">返回</span>你好,这是页面2</h3>
    <p style="line-height: 2rem" @click="goPage()">  页面3</p>

  </div>
</template>

<script>
export default {
  name: 'page2',
  methods:{
    goPage(){
      this.$router.push({
        path:'/page3',

      })
    }
  },
  deactivated(){
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
