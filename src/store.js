import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  // state 放我们全局需要共享的数据的
  state: {
    hone: '卖座首页',
    file: '卖座影片',
    cinema: '卖座影院',
    center: '我的卖座',
    card: '查询/绑定/激活卖座卡',
    login: '注册卖座',
    register: '注册卖座'
  },

  getters: {
  },

  mutations: {

  },

  actions: {

  },

  modules: {

  }
})

export default store
