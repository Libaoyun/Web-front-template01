<template>
  <div>
    会员等级: {{this.$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "memberLevel",
  props: ['id'],
  beforeRouteEnter: (to, from, next) =>{
    console.log("进入会员等级之前")
    //通过next回调函数拿到vm实例来使用axios方法获取数据，在页面之前完成
    next(
      // vm =>{
      // vm.getData()}
    );
  },
  beforeRouteLeave: (to, from, next) =>{
    console.log("离开入会员等级之前")
    next();
  },
  methods: {
    getData() {
      this.axios.get('http://localhost:8080/data.json')
        .then(res => {
          console.log(res)
        })
        .catch(err =>{
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
