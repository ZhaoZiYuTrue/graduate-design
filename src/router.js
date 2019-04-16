import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'retrieval',
          name: 'retrieval',
          component: () => import(/* webpackChunkName: "retrieval" */ './views/Retrieval.vue')
        },
        {
          path: 'hardware',
          name: 'hardware',
          component: () => import(/* webpackChunkName: "hardware" */ './views/Hardware.vue')
        },
        {
          path: 'internet',
          name: 'internet',
          component: () => import(/* webpackChunkName: "internet" */ './views/Internet.vue')
        },
        {
          path: 'slow',
          name: 'slow',
          component: () => import(/* webpackChunkName: "slow" */ './views/Slow.vue')
        },
        
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ './views/Add.vue')
    },
    {
      path: '/dynamic-log',
      name: 'dynamic-log',
      component: () => import(/* webpackChunkName: "dynamic-log" */ './views/Dynamic-log.vue')
      
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: () => import(/* webpackChunkName: "test" */ './views/Test.vue')
      
    // },
  ]
})
