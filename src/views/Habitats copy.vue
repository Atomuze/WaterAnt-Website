<template>
  <div class="habitats">
    <h1>水苡的棲息地</h1>
    <p>「水苡」並不是一種真正的生物或植物，水苡可以被想像成在水中游泳，或者在樹叢中爬行，而具體的出現地點則取決於想像和創意</p>
    <ul>
      <li>水中的水苡</li>
      <li>土地</li>
      <li>空氣</li>
    </ul>
    <div class="habitat-images">
      <img src="/src/assets/water_ant.jpg" alt="水中的水苡">
      <img src="/src/assets/water_ant.jpg" alt="土地中的水苡">
      <img src="/src/assets/water_ant.jpg" alt="空氣中的水苡">
    </div>
  </div>
</template>

<style scoped>
.habitats {
  padding: 2rem;
}

.habitats h1 {
  text-align: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 2rem 0;
}

li {
  text-align: center;
  flex: 1;
}

.habitat-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.habitat-images img {
  max-width: 30%;
  margin-bottom: 1rem;
}

</style>