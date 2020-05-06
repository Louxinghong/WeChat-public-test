import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Area',
    component: () => import('@/views/area/App.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
