<template>
  <div>
    <img src="/src/assets/logo.png" @click="showHearts" />
    <div v-if="show" class="hearts-container">
      <span v-for="(heart, index) in hearts" :key="index" class="heart">{{
        heart
      }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";

export default {
  setup() {
    const state = reactive({
      show: false,
      hearts: [],
    });

    function showHearts() {
      state.show = true;
      createHearts();
      setTimeout(() => {
        state.show = false;
        state.hearts = [];
      }, 2000);
    }

    function createHearts() {
      const container = document.querySelector(".hearts-container");
      const heart = "❤️";
      const hearts = [];

      for (let i = 0; i < 50; i++) {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        const heartElement = document.createElement("span");
        heartElement.innerText = heart;
        heartElement.style.left = `${x}px`;
        heartElement.style.top = `${y}px`;
        hearts.push(heartElement);
        container.appendChild(heartElement);
      }

      state.hearts = hearts;
    }

    return {
      showHearts,
      state,
    };
  },
};
</script>

<style>
.hearts-container {
  position: fixed;
  z-index: 9999;
}

.heart {
  position: absolute;
  font-size: 30px;
  color: red;
  animation: fly 2s linear;
}

@keyframes fly {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -200px);
    opacity: 0;
  }
}
</style>
