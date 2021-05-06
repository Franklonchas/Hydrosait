import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewRios from '../views/ViewRios.vue'
import Inicial from '../views/Inicial.vue'
import CreateRio from '../views/CreateRio.vue'
import EditRio from '../views/EditRio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Inicial
  },
  {
    path: '/inicial/',
    component: Inicial
  },
  {
    path: '/viewRios/',
    component: ViewRios
  },
  {
    path: '/createRio/',
    component: CreateRio
  },
  {
    path: '/editRio/',
    component: EditRio
  },
]

const router = new VueRouter({
  routes
})

export default router
