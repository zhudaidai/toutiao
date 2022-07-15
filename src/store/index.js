// import { importManager, storage } from 'less'
// import { from } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'

import { getToken, setToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 声明token
    // 再从本地取出来
    user: getToken() || {}
  },
  // 修改数据
  mutations: {
    // 修改token
    setUser (state, payload) {
      state.user = payload
      // 先储存到本地
      setToken(payload)
    }
  }
})
