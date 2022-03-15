import Vue from 'vue'
import Router from 'vue-router'

// Containers
//const TheContainer = () => import('../containers/TheContainer')


// Views - Pages
//const Page404 = () => import('../views/pages/Page404')
const Main = () => import('../views/Home.vue')
const Tickets = () => import('../views/Tickets.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes(),
})
  
function configRoutes () {  
  return [    
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: {
        permission: 'public'
      }
    },
    {
      path: '/tickets',
      name: 'Tickets',
      component: Tickets,
      meta: {
        permission: 'public'
      }
    }
  ]
}
 

export default router