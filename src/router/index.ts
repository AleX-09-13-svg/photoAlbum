import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AlbumNaturePage from '@/pages/AlbumNaturePage.vue'
import AlbumFamilyPage from '@/pages/AlbumFamilyPage.vue'
import AlbumTravelPage from '@/pages/AlbumTravelPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/albums/nature', name: 'album-nature', component: AlbumNaturePage },
  { path: '/albums/family', name: 'album-family', component: AlbumFamilyPage },
  { path: '/albums/travel', name: 'album-travel', component: AlbumTravelPage },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

