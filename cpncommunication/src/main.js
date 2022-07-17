import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 定义个bus事件总线作为组件通信的桥梁
export const bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
