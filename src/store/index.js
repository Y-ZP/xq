import Vue from 'vue'
import Vuex from 'vuex'
// 引入个人模块
import User from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 挂载 store 模块
  modules: {
    User
  }
})
export default store
