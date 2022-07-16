import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '@/views/login'
Vue.use(VueRouter)
// 路由表
const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout'), // 直接配置的路由懒加载
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        component: () => import('@/views/Home')
      },
      {
        path: '/video',
        component: () => import('@/views/Video')
      },
      {
        path: '/qa',
        component: () => import('@/views/QA')
      },
      {
        name: 'profile',
        path: '/profile',
        component: () => import('@/views/My')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
