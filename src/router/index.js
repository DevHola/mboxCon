import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Register from '@/components/Register'
import login from '@/components/login'
import videochat from '@/components/videochat'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
     {
      path: '/',
      name: 'Register',
      component:Register
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
	 {
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/videochat/:id',
      name: 'videochat',
      component: videochat
    }
  ]
})
