import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/login";


Vue.use(Router)

export default new Router({
  //使用history历史模式可以使浏览器地址不带#号
  //默认是hash模式，会带#号
  mode: 'history',
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  },
    {
      path: '/index/:username',
      name: 'Index',
      component: () => import('../views/index'),
      children: [{
        path: '/member/list',
        name: 'MemberList',
        component: () => import('../views/member/memberList')
      },
        {
          path: '/member/level/:id',
          name: 'MemberLevel',
          component: () => import('../views/member/memberLevel')
        }
      ]
    },

    //回到首页的路由重定向，主要用于相同页面但名称不同或者路径不同。并无差别
    {
      path: '/goIndex/:username',
      redirect: '/index/:username'
    },




    {
      //用 * 表示匹配以上未被匹配的任意路径，一般用于404返回页面，用/*或*都可以
      path: '/*',
      name: '404',
      component: () => import('../views/404')
    },
  ]

})
