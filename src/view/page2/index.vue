<template>
  <div class="view-page">
    <h3>你好，这是页面2</h3>
    <span style="line-height: 2rem" @click="$router.go(-1)">  返回</span>
  </div>
</template>

<script>
export default {
  name: 'page2'
}
</script>

<style lang="less">

</style>
