// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueRouter from 'vue-router'
import router from './router'

import axios from 'axios';
import Vuex from 'vuex'

import store from './store'
import is from "element-ui/src/locale/lang/is";

Vue.prototype.axios = axios;


//不在生产模式，也就不需要控制台提醒让我们打包生产上线
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueRouter)
Vue.use(Vuex)
//早所有路由跳转之前，用于判断是否登录或者登录后输入登录的页面进入的是首页，避免重复登录

router.beforeEach((to, from, next) => {
    let isLogin = sessionStorage.getItem('isLogin')

    if(to.path === '/logout'){
      //清空缓存,然后跳转至登录页面
      sessionStorage.clear()
      next({path: '/login'})
    }else if(to.path === '/login'){
      if (isLogin != null){
        next({path: '/index/admin123'})
      }else next()
    }else if(isLogin == null){
      next({path: '/login'})
    }
  next()

})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
