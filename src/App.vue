<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/habitats">Habitats</router-link> |
      <router-link to="/food">Food</router-link> |
      <router-link to="/playground">Play Ground</router-link>
    </div>
  </div>
</template>

<style scoped>
.body {
  background-color: #fff;
  color: #333;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  background-color: #fff;
  color: #333; 
}
</style>