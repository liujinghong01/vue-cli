<template>
  <div class="view-page">
    <mt-header title="页面三">
      <a   slot="left">
        <a @click="$router.go(-1)" class="back-icon">返回</a>
      </a>
      <!--这个头部导航栏关键的是mt-header父标签,而该标签内的内容是根据需求写的哦-->
    </mt-header>

  </div>
</template>

<script>
export default {
  name: 'page3'
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
inactive
