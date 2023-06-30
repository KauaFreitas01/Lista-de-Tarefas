import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaTarefas from '../views/ListatarefasView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: ListaTarefas,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
