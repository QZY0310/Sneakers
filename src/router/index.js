import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import calendar from '@/pages/home/calendar'
import exchange from '@/pages/home/exchange'
import details from '@/pages/home/details'
import classify from '@/pages/home/classify'
import search from '@/pages/home/search'
import Advance from '@/pages/home/Advance'
import my from '@/pages/home/my'
import land from '@/pages/home/land'
import register from '@/pages/home/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/calender',
      name: 'calender',
      component: calendar
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/Advance',
      name: 'Advance',
      component: Advance
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/',
      name: 'land',
      component: land
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
