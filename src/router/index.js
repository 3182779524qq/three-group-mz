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
const router = new Router({
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
      name: 'center',
      meta: { needLogin: true },
      component: Center
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
router.beforeEach(function (to, from, next) {
  console.log(to)
  console.log(document.cookie)
  if (to.meta.needLogin) {
    if (document.cookie) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
