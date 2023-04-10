<template>
  <div class="habitats">
    <h1>水苡遊玩天地</h1>
    <div>
      <h2>A: {{ a.health }}</h2>
      <h2>B: {{ b.health }}</h2>
      <button @click="attack">Attack</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const a = reactive({
  health: 100,
  attack: 10,
  defense: 5,
});

const b = reactive({
  health: 100,
  attack: 8,
  defense: 3,
});

const attack = () => {
  b.health = b.health - (a.attack - b.defense);
};
</script>