<template>
  <h1>水苡遊玩天地</h1>
  <div class="upgrade">
    <h2>升級你的專屬水苡</h2>
    <div class="stat">
      <span>血量：{{ a.health }}</span>
      <button class="btn" @click="upgrade('health')">升級</button>
    </div>
    <div class="stat">
      <span>攻擊力：{{ a.attack }}</span>
      <button class="btn" @click="upgrade('attack')">升級</button>
    </div>
    <div class="stat">
      <span>防禦力：{{ a.defense }}</span>
      <button class="btn" @click="upgrade('defense')">升級</button>
    </div>
  </div>
  <div class="playground">
    <h2>用你的專屬水苡打敗敵人吧</h2>
    <div class="players">
      <div class="player">
        <h2>A</h2>
        <div class="player-info">
          <p>Health: {{ a.health }}</p>
          <p>Attack: {{ a.attack }}</p>
          <p>Defense: {{ a.defense }}</p>
          <div class="health-bar">
            <div
              class="health-bar-inner"
              :style="{ width: playerHealthPercentage }"
            ></div>
          </div>
        </div>
      </div>
      <div class="player">
        <h2>B</h2>
        <div class="player-info">
          <img
            class="card-image"
            src="/src/assets/Picture/enemys/fear_white.png"
          />
          <div class="health-bar">
            <div
              class="health-bar-inner"
              :style="{ width: enemyHealthPercentage }"
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
  maxHealth: 100,
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
  a.health = a.health - (b.attack - a.defense);
  if (b.health < 0) b.health = 0;
};

const enemyHealthPercentage = computed(() => {
  return `${(b.health / b.maxHealth) * 100}%`;
});

const playerHealthPercentage = computed(() => {
  return `${(a.health / a.maxHealth) * 100}%`;
});

const upgrade = (stat) => {
  switch (stat) {
    case "health":
      a.health += 5;
      break;
    case "attack":
      a.attack += 2;
      break;
    case "defense":
      a.defense += 1;
      break;
    default:
      break;
  }
};
</script>

<style scoped>
.stat {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: aqua;
}
.playground {
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
  background: linear-gradient(
    to right,
    #ff00bb,
    #f247ca,
    #f14cdb,
    #f476d2,
    #fb91e6
  );
  transition: width 0.5s ease;
}
</style>
