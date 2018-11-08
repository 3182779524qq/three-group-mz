import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import buyCard from '@/views/buyCard'
// import cinema from '../views/cinema'
// import login from '../views/login'
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/cinema',
    //   name: 'cinema',
    //   component: cinema
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/card',
      name: 'card',
      component: buyCard
    }
  ]
})
