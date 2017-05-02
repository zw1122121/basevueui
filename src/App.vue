<template>
  <div id="app">
    <div class="container">
      <el-col :span="24" class="header">
        <el-col :span="6" class="logo-area">
          XXX管理系统
        </el-col>
      </el-col>
      <el-col :span="24" class="main">
        <el-col :span="4" class="sidebar">
          <el-menu>
            <el-submenu  index="1">
              <template slot="title"><i class="el-icon-message"></i>系统功能</template>
              <el-menu-item index="1-1"><router-link to="/user" tag="li"><i class="el-icon-message"></i>用户</router-link></el-menu-item>
              <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>

        <el-col :span="20" class="content-container">
          <div>
            <el-button type="text">文字按钮</el-button>
          </div>
          <el-col :span="24" class="content-wrapper">
            <router-view></router-view>
          </el-col>

        </el-col>
      </el-col>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app'
}

</script>

<style>
  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  .header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
  }
  .logo-area {
    width: 230px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    overflow: hidden;
    width: 100%;
  }
  .sidebar, .sidebar .el-menu {
    height:100%;
  }
  .content-container {
    overflow: scroll;
    padding: 20px;
    height: 100%;
  }
  .content-wrapper {
    box-sizing: border-box;
  }
</style>
