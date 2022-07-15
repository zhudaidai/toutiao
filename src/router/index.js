import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login'
Vue.use(VueRouter)
// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login') // 直接配置的路由懒加载
  }
]

const router = new VueRouter({
  routes
})

export default router
