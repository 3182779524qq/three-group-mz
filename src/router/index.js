import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import buyCard from '@/views/buyCard'
import File from '@/views/File'
import Filecom from '@/views/Filecom.vue'
import Filenow from '@/views/Filenow.vue'
import Details from '@/views/Details.vue'
import Psotion from '@/views/Psotion.vue'
import Cinema from '@/views/cinema.vue'
import Center from '@/views/center.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/card',
      name: 'card',
      component: buyCard
    },
    {
      path: '/file/',
      component: File,
      children: [
        {
          path: 'coming-soon',
          component: Filecom
        },
        {
          path: 'now-playing',
          component: Filenow
        },
        {
          path: '',
          redirect: 'now-playing'
        }
      ]
    },
    {
      path: '/file/:id',
      name: 'detauls',
      component: Details
    },
    {
      path: '/city',
      component: Psotion
    },
    {
      path: '/cinema',
      component: Cinema
    },
    {
      path: '/center',
      component: Center
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
