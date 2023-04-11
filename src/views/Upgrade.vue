<template>
  <div>
    <h1>升級你的專屬水苡</h1>
    <div class="stat">
      <span>血量：{{ charactor.health }}</span>
      <button class="btn" @click="upgrade('health')">升級</button>
    </div>
    <div class="stat">
      <span>攻擊力：{{ charactor.attack }}</span>
      <button class="btn" @click="upgrade('attack')">升級</button>
    </div>
    <div class="stat">
      <span>防禦力：{{ charactor.defense }}</span>
      <button class="btn" @click="upgrade('defense')">升級</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const charactor = reactive({
  health: 100,
  attack: 5,
  defense: 3,
});

const upgrade = (stat) => {
  switch (stat) {
    case "health":
      charactor.health += 5;
      break;
    case "attack":
      charactor.attack += 2;
      break;
    case "defense":
      charactor.defense += 1;
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

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #C7B2DE; /* 設定按鈕背景色為藍色 */
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 1rem;
}

.btn:hover {
  background-color: #ff00ff; /* 設定滑鼠移到按鈕時的背景色為深藍色 */
}
</style>
