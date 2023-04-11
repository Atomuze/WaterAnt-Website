<template>
  <div class="habitats">
    <h1>水苡遊玩天地</h1>
    <div class="players">
      <div class="player">
        <h2>A</h2>
        <div class="player-info">
          <p>Health: {{ a.health }}</p>
          <p>Attack: {{ a.attack }}</p>
          <p>Defense: {{ a.defense }}</p>
        </div>
      </div>
      <div class="player">
        <h2>B</h2>
        <div class="player-info">
          <img class="card-image" src="/src/assets/Picture/enemys/fear_white.png"/>
          <div class="health-bar">
            <div
              class="health-bar-inner"
              :style="{ width: healthPercentage }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn" @click="attack">Attack</button>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";

const a = reactive({
  health: 100,
  attack: 10,
  defense: 5,
});

const b = reactive({
  maxHealth: 100,
  health: 100,
  attack: 8,
  defense: 3,
});

const attack = () => {
  b.health = b.health - (a.attack - b.defense);
  if(b.health<0) b.health = 0
};

const healthPercentage = computed(() => {
  console.log((b.health / b.maxHealth) * 100)
  return `${(b.health / b.maxHealth) * 100}%`;
})
</script>

<style scoped>
.habitats {
  text-align: center;
  margin-top: 20px;
}

.players {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.player {
  margin: 0 10px;
}

.player-info {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  background-color: aqua;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 設定卡片的陰影效果 */
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #c7b2de; /* 設定按鈕背景色為藍色 */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 設定卡片的陰影效果 */
}

.btn:hover {
  background-color: #ff00ff; /* 設定滑鼠移到按鈕時的背景色為深藍色 */
}
.health-bar {
  width: 120px;
  height: 10px;
  border: 1px solid #469bf6;
  border-radius: 15px;
  overflow: hidden;
}

.health-bar-inner {
  height: 100%;
  background: linear-gradient(to right, #ff00bb, #f247ca, #f14cdb, #f476d2, #fb91e6);
  transition: width 0.5s ease;
}
</style>
