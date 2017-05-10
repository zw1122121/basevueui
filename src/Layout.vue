<template>
  <div class="container">
    <header class="header">
      <slot name="header"></slot>
    </header>
    <nav class="sidebar white-theme">
      <slot name="sidebar"></slot>
    </nav>
    <section class="content">
      <slot></slot>
    </section>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
  header.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index : 2048;
    background: #2b83f9 linear-gradient(143deg, #2945cb 20%, #2b83f9 81%, #3a9dff);
  }
  .sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 200px;
    border-right: 1px solid #d4d8e2;
    z-index : 2048;
    overflow: auto;
    background-color: #fff;
  }
  section.content {
    background-color: #fff;
    padding-left: 201px;
    margin-right: 0;
    padding-top: 60px;
    position: relative;
    height: 100%;
    box-sizing: border-box;
  }
</style>
<style>
  .sidebar .el-submenu__title {
    font-weight: bold;
  }
  .sidebar::-webkit-scrollbar {
    width: 2px;
  }
  .sidebar::-webkit-scrollbar-thumb {
    background-color: #d4d8e2;
  }
</style>
