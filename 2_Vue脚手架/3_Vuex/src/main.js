import Vue from 'vue'
import App from './App'
// 使用store
import store from './vuex/store'

// 关闭生产提示
Vue.config.productionTip = false



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
