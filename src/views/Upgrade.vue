<template>
  <div>
    <div>
      <span>血量：{{ charactor.health }}</span>
      <button @click="upgrade('health')">升級</button>
    </div>
    <div>
      <span>攻擊力：{{ charactor.attack }}</span>
      <button @click="upgrade('attack')">升級</button>
    </div>
    <div>
      <span>防禦力：{{ charactor.defense }}</span>
      <button @click="upgrade('defense')">升級</button>
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
/* 可自訂樣式 */
</style>
