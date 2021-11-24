import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import All from '../views/All.vue'
import Away from '../views/Away.vue'
import NonCon from '../views/NonCon.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'all',
    component: All
  },
  {
    path: '/away',
    name: 'away',
    component: Away
  }, {
    path: '/home',
    name: 'home',
    component: Home
  },{
    path: '/noncon',
    name: 'noncon',
    component: NonCon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router