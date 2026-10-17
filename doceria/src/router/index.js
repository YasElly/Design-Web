
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CardapioView from '@/views/CardapioView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/cardapio',
    name: 'Cardapio',
    component: CardapioView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
