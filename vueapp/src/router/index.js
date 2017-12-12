import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AnotherOne from '@/components/AnotherOne'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/AnotherOne',
      name: 'AnotherOne',
      component: AnotherOne
    }
  ]
})
