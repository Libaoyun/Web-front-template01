// 这里将user单拿出来是因为项目中可能数据比较多，代码一堆容易臃肿，因此将state进行按特定分类抽离出来：
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const userStore = {
  // 这里是全局state对象，用于存放全局数据，比如用户登录信息等，避免了组件传参的冗余
  // 为防止页面刷新数据丢失，故在初始化之前判断是否session有相应值，有则添加无则初始化。
  state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    user:{
      name: '111'
    }
  },
  //这里是计算属性，可以提高性能，因此使用时方法不要加括号()，用于获取最新state状态，
  getters: {
    getUser(state){
      return state.user;
    }
  },
  //这里是唯一一处可以修改state值的方法（同步执行，会阻塞）
  mutations: {
    updateUser(state, user){
      state.user = user
    }
  },
  actions: {
    //context是上下文的意思，在这里代表mutations，user就是待更改的对象
    asyncUpdateUser(context, user){
      context.commit("updateUser", user)
    }
  }

}

//也可以使用如下方式，将每个属性单拿出来，到使用store时依次放进去即可，不过这种适合单store的情况，如果大项目中store较多不建议用！
const state={
  user:{
    name: ''
  }
};

//这里是计算属性，用于获取最新state状态
const getters={
  getUser(state){
    return state.user;
  }
};

//这里是唯一一处可以修改state值的方法（同步执行，会阻塞）
const mutations={
  updateUser(state, user){
    state.user = user
  }
}

//这里可以将mutations改为异步执行，防止阻塞
const actions={
  //context是上下文的意思，在这里代表mutations，user就是待更改的对象
  asyncUpdateUser(context, user){
    context.commit("updateUser", user)
  }
}

export default userStore

