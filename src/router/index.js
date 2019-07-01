import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 导入路由
import Home from '@/components/home'
import User from '@/components/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'home',
      name: 'Home',
      component: Home
    },
    {
      path: 'user',
      name: 'User',
      component: User
    }
  ]
})
