import store from '@/store'
import axios from 'axios'
// import { config } from 'vue/types/umd'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net/' // 接口的基准路径
})

// 请求拦截器
request.interceptors.request.use(
  // 想在发送请求前做什么
  // config 本次请求的配置
  // 必须要返回出去
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  // 请求错误的时候，处理的方法
  (error) => {
    return Promise.reject(error)
  }
)

// 相应拦截器

export default request
