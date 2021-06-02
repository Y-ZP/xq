import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
// 注册全局组件
import Components from '@/components/index'

// 导入vant, 字体图标
import Vant from 'vant'
// 引入vantcss
import 'vant/lib/index.css'
// 它能根据的手机尺寸来调整rem的基准值
import 'amfe-flexible'

// 注册全局组件
Vue.use(Components)

// 注册vant
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
