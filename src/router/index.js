import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import AboutView from '@/components/AboutView'
import ContactView from '@/components/ContactView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: HomeView
    },
    {
      path:'/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})
