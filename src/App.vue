<template>
  <div class="toolbar">
    <router-link to="/" class="logo">
      <div class="logo-wrapper">
        <img class="logo" src="./assets/logo.png" alt="" />
      </div>
    </router-link>
    <nav class="nav-items">
      <router-link to="/enhance" class="nav-item">強化</router-link> 
      <router-link to="/upgrade" class="nav-item">升級</router-link> 
      <router-link to="/playground" class="nav-item">遊玩</router-link> 
    </nav>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'Toolbar',
};
</script>

<style scoped>
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  background-color: #C7B2DE;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.logo {
  max-height: 100%;
  max-width: 100%;
}

/* .logo img {
  height: 30px;
} */

.nav-items {
  display: flex;
  align-items: center;
}

.nav-item {
  color: #fff;
  font-size: 1.2rem;
  margin: 0 1rem;
  text-decoration: none;
}

.nav-item:hover {
  color: #9c36b5;
}
</style>
