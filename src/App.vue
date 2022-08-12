<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    //让页面刚开始就监听，一旦刷新就将数据保存
    window.addEventListener('beforeunload', this.saveState)
  },
  methods: {
    //下面方法就是用于页面刷新时将数据暂存到session中
    saveState(){
      //因为state是json形式，而session只能存字符串，因此将其转为串！
      sessionStorage.setItem('state', JSON.stringify(this.$store.state.user))
    }
}

}
</script>

<style>

</style>
