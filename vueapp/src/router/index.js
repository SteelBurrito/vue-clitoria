import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dogs from '@/components/Dogs'
import Crypto from '@/components/Crypto'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/Dogs',
      name: 'Dogs',
      component: Dogs
    },

    {
      path: '/Crypto',
      name: 'Crypto',
      component: Crypto
    }
  ]
})
