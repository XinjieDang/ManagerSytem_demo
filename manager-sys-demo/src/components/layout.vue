<template>
  <div class="mainContent">
    <el-container
      style="height: 650px; border: 1px solid #eee; overflow-y: hidden"
    >
      <el-aside width="210px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-menu-item index="2-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>修改头像</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <el-row>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <el-button type="primary">添加</el-button>
              </div>
            </el-col>
            <el-col :span="18">
              <div class="grid-content bg-purple-light">
                <el-form
                  :inline="true"
                  :model="formInline"
                  class="demo-form-inline"
                >
                  <el-form-item label="审批人">
                    <el-input
                      v-model="formInline.user"
                      placeholder="审批人"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-select
                      v-model="formInline.region"
                      placeholder="活动区域"
                    >
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-col>
          </el-row>
          <el-table
            :data="tableData"
            style="margin-left: 15px; margin-top: 20px"
          >
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column label="操作">
              <a href="#"><i class="el-icon-edit"></i></a>
              &nbsp;
              <a href="#"><i class="el-icon-delete"></i></a>
            </el-table-column>
          </el-table>
          <div style="margin-top: 30px">
            <el-row>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100"
                  >
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.mainContent {
  width: 1480px;
  height: 600px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
body {
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}
</style>
 <script>

 </script>
<script>

export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    };
    return {
      dialogVisible: false,
      tableData: Array(10).fill(item),
       formInline: {
          user: '',
          region: ''
        }
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
     onSubmit() {
        console.log('submit!');
      }
  }
};
</script>