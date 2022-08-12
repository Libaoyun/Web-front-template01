<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-header height="80px" style="text-align: right; font-size: 12px;">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              会员中心
            </el-dropdown-item>
            <el-dropdown-item>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
<!--        <span>{{$route.params.username}}</span>-->
        <span>{{$store.getters.getUser.name}}</span>
      </el-header>

      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>会员管理</template>
              <el-menu-item-group>
<!--              路由传参方式之一：路径传参：-->
<!--              to='/member/list/param' 其中param就是参数，又或者动态封装成对象如下：-->
                <el-menu-item index="1-1">
                  <router-link :to="{name: 'MemberLevel',params: {id: 2}}">会员等级</router-link>
<!--               传参方式二：props传参与上面几乎一致，不同就是需要在路由配置上加上props:true这一属性
                    然后在使用时需要使用props，如：props:['id']，然后就可以直接用id了，其他都一样
                    因此也就不会出现this.$route.params这种形式来使用参数了-->
                </el-menu-item>
                <el-menu-item index="1-2" >
                  <router-link to='/member/list'>会员列表</router-link>
                </el-menu-item>
                <el-menu-item index="1-3" >
                  <router-link to='/goIndex/admin123'>回到首页</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>商品管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">商品等级</el-menu-item>
                <el-menu-item index="2-2">商品列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view/>
          <!--          <el-table :data="tableData">-->
          <!--            <el-table-column prop="date" label="日期" width="140">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column prop="name" label="姓名" width="120">-->
          <!--            </el-table-column>-->
          <!--            <el-table-column prop="address" label="地址">-->
          <!--            </el-table-column>-->
          <!--          </el-table>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
