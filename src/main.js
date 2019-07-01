// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入了vue
import Vue from 'vue'
// 导入了根组件
import App from './App'
// 导入了router路由对象
import router from './router'

// 关闭了生产提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
