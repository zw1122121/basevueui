<template>
  <layout>
    <template slot="header">
      <el-row>
        <el-col :span="6">
          <div class="brand">
            XXX管理系统
          </div>
        </el-col>
      </el-row>
    </template>
    <template slot="sidebar">
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
    </template>
    <router-view></router-view>
  </layout>
</template>

<script>
import Layout from './Layout'
export default {
  name: 'app',
  components : {
    Layout
  }
}
</script>
<style scoped>
  .brand {
    color: #FFF;
    font-size: 1.17em;
    font-weight: bold;
    margin-left: 10px;
    line-height: 60px;
  }
</style>
