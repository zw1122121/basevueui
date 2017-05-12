<template>
  <el-row>
    <el-col :span="18" :offset="3">
      <div class="show-panel">
        <slot>
          内容
        </slot>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .show-panel {
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    padding: 20px;
  }
</style>
