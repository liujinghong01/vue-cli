<template>
  <div class="view-page">
    <h3>你好，这是页面2</h3>
    <p style="line-height: 2rem" @click="$router.goBack()">  返回</p>

  </div>
</template>

<script>
export default {
  name: 'page2'
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
