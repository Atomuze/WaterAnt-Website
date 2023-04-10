<template>
  <div>
    <button @click="drawCard">抽卡</button>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>你抽到 {{ cardDrawn }}</h2>
        <p>{{ cardDrawn }}</p>
        <button @click="close">關閉</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
const showModal = ref(false);
const cardDrawn = ref(null);

const drawCard = () => {
  showModal.value = true;
  const cards = ["green water ant", "purple water ant", "angel water ant"];
  const randomIndex = Math.floor(Math.random() * cards.length);
  const card = cards[randomIndex];
  cardDrawn.value = card;
};

const close = () => {
  showModal.value = false;
};
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
}
</style>