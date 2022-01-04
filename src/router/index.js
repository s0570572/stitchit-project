import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from '../views/Gallery.vue'
import AddEntry from '../views/AddEntry'
import AddSuccess from '../views/AddSuccess'
import GalleryAnimals from '../views/GalleryAnimals'
import GalleryArchitecture from '../views/GalleryArchitecture'
import GalleryLandscape from '../views/GalleryLandscape'
import GalleryMiscellaneous from '../views/GalleryMiscellaneous'
import GalleryPeople from '../views/GalleryPeople'
import GalleryStilllife from '../views/GalleryStilllife'
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
  },
  {
    path: '/add-success',
    name: 'Success',
    component: AddSuccess
  },
  {
    path: '/entries-animals',
    name: 'GalleryAnimals',
    component: GalleryAnimals
  },
  {
    path: '/entries-architecture',
    name: 'GalleryArchitecture',
    component: GalleryArchitecture
  },
  {
    path: '/entries-landscape',
    name: 'GalleryLandscape',
    component: GalleryLandscape
  },
  {
    path: '/entries-miscellaneous',
    name: 'GalleryMiscellaneous',
    component: GalleryMiscellaneous
  },
  {
    path: '/entries-people',
    name: 'GalleryPeople',
    component: GalleryPeople
  },
  {
    path: '/entries-still-life',
    name: 'GalleryStilllife',
    component: GalleryStilllife
  },
  {
    path: '/delete-entry',
    name: 'DeleteEntry',
    component: DeleteEntry
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
