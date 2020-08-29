import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import About from '../views/About';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /* bu da olur
  {
    path: "/about",
    name: "About",
    component: About
  },
  */
  {
    path: '/about',
    name: 'About',
    //ihtiyacın olduğunda yükleme yöntemi.
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //webpackChunkName = networkte hangi isimde çağırcağını gösterir.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
