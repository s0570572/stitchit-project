import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import AddEntry from '../views/AddEntry'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/entries',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/add-entry',
    name: 'Add entry',
    component: AddEntry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
