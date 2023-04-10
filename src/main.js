import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './views/Home.vue'
import enhance from './views/Enhance.vue'
import Upgrade from './views/Upgrade.vue'
import DrawCard from './views/DrawCard.vue'
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
    path: '/enhance',
    component: enhance
  },
  {
    path: '/upgrade',
    component: Upgrade
  },
  {
    path: '/drawcard',
    component: DrawCard
  },
  {
    path: '/playGround',
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
