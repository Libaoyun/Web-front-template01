<template>
  <div >
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm"  class = "form-style">
      <h3 class="formTitle">欢迎登陆xxx系统</h3>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="form.username" autocomplete="off" ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
<!--        下面的参数ruleForm就是表单一开始的ref的名称，用于后面验证-->
        <el-button type="primary" @click="handleSubmit('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        username: [{
          required: true,
          message: "请输入用户名！",
          trigger: 'change'
        }],
        password: [{
          required: true,
          message: "请输入密码！",
          trigger: 'change'
        }]
      }
    }
  },
  methods: {
    handleSubmit(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sessionStorage.setItem('isLogin', 'true')
          //下面可以将用户登录名放置全局store中
          // 但是该方式有缺点，一旦刷新网页或者其他跳转，会使store数据清空，因此需要在刷新之前将数据尽量保存！
          //原理就是因为是单页面应用，所以存储的数据也只在单一页面中！一旦刷新数据就恢复初始状态
          this.$store.dispatch("asyncUpdateUser", {name: this.form.username})
          // this.$router.push('/index')
          this.$router.push({name: 'Index', params: {username: this.form.username}})
        } else {
          this.$message({
            message: '请输入用户名和密码！',
            type: 'warning'
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created(){
  }
}
</script>

<style  scoped>
  .form-style{
    width: 350px;
    margin: 130px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 30px #DCDFE6;
  }
  .formTitle{
    text-align: center;
  }

</style>
