import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/toutiao-icon.css'

// 加载全局样式
import './styles/index.less'
// 全部引入vant组件
import Vant from 'vant'
import 'vant/lib/index.css'
// 加载动态设置 REM 基准值
import 'amfe-flexible/index.min.js'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
