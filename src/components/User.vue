<template>
  <div>
    <el-row>

    </el-row>
    <el-table
      :data="users"
      border
      style="width: 100%">
      <el-table-column type="expand">
        <template scope="props">
          <p>State: {{ props.row.userName }}</p>
          <p>City: {{ props.row.nikeName }}</p>
          <p>Address: {{ props.row.createTime }}</p>
          <p>Zip: {{ props.row.lastLoginTime }}</p>
        </template>
      </el-table-column>
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="nikeName"
        label="人员姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="lastLoginTime"
        label="最后登录时间">
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            size="small">编辑</el-button>
          <el-button
            size="small"
            type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row>
      <div style="float: right;">
        <el-pagination
          :current-page="page._page"
          :page-size="page._limit"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change = "handleSizeChange"
          @current-change = "handlePageChange"
        >
        </el-pagination>
      </div>
    </el-row>
  </div>

</template>

<script>
  import Affix from './Affix'
  import BasicForm from './BasicForm'
  export default {
    data() {
      return {
        users : [],
        page : {
          _page : 1,
          _limit : 10,
          total : 0
        }
      }
    },
    methods: {
      getUserPage(param) {
        let {_page = 1, _limit = 10, total = 0} = param ? param : {}
        this.axios.get("/api/users", {
          params: {
            _limit,
            _page,
          }
        }).then(response => {
          this.users = response.data
          this.page.total = response.data.length * 6
        })
      },
      handleSizeChange(size) {
        this.page._limit = size
        this.getUserPage(this.page)
      },
      handlePageChange(page) {
        this.page._page = page
        this.getUserPage(this.page)
      }
    },
    created: function () {
     this.getUserPage()
    },
    components: {
      Affix,BasicForm
    }
  }
</script>

<style>
  .ivu-affix {
    position: fixed;
    z-index: 20;
  }
</style>
