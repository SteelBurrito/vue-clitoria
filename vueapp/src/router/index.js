import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dogs from '@/components/Dogs'


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
    }
  ]
})
