import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import AddEntry from '../views/AddEntry'
import AddSuccess from '../views/AddSuccess'
import GalleryTopic from '../views/GalleryTopic'
import DeleteEntry from '../views/DeleteEntry'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/entries',
    name: 'Gallery',
    component: Gallery,
    children: [
      {
        path: ':topic',
        name: 'GalleryTopic',
        props: true,
        component: GalleryTopic
      }
    ]
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
  },
  {
    path: '/add-success',
    name: 'Success',
    component: AddSuccess
  },
  {
    path: '/delete-entry/:entryid',
    name: 'DeleteEntry',
    props: true,
    component: DeleteEntry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  compilerOptions: 'isCustomElement',
  routes
})

export default router
