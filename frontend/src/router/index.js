import Vue from 'vue'
import Router from 'vue-router'
import Pagina from '@/Pagina'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pagina',
      component: Pagina
    }
  ]
})
