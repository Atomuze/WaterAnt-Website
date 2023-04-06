import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Habitats from './views/Habitats.vue'
import Food from './views/Food.vue'
import Play_Ground from './views/PlayGround.vue'
import Water_Ant from './views/WaterAnt.vue'
import Water_Ant_Green from './views/WaterAntGreen.vue'
import Water_Ant_Purple from './views/WaterAntPurple.vue'

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/habitats',
      component: Habitats
    },
    {
      path: '/food',
      component: Food
    },
    {
      path: '/PlayGround',
      component: Play_Ground
    },
    {
      path: '/waterant',
      component: Water_Ant
    },
    {
      path: '/waterantgreen',
      component: Water_Ant_Green
    },
    {
      path: '/waterantpurple',
      component: Water_Ant_Purple
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

createApp(App).use(router).mount('#app')
