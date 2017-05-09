<template>
  <div class="container">
    <header class="header">
      <el-row>
        <el-col :span="6">
          <div class="brand">
            XXX管理系统
          </div>
        </el-col>
      </el-row>
    </header>
    <div class="sidebar white-theme">
      <el-menu>
        <el-submenu index="1" class="white-theme" >
          <template slot="title">
            <i class="el-icon-message"></i>导航一
          </template>
          <el-menu-item index="1-1">
            <router-link to="/user" tag="li">用户</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/" tag="li">首页</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-submenu>

        <el-submenu index="2" class="white-theme" >
          <template slot="title">
            <i class="el-icon-menu"></i>导航二
          </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-1">选项1</el-menu-item>
        </el-submenu>

        <el-submenu index="3" class="white-theme" >
          <template slot="title">
            <i class="el-icon-menu"></i>导航三
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>

      </el-menu>
    </div>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'app'
}

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
  .brand {
    color: #FFF;
    font-size: 1.17em;
    font-weight: bold;
    margin-left: 10px;
    line-height: 60px;
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
