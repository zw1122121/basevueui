<template>
  <show-panel>
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
  </show-panel>
</template>

<script>
  import ShowPanel from './ShowPanel'
  export default {
    components: {
      ShowPanel
    }
  }
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
