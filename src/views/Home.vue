<template>
  <div class="container">
    <h1 class="title">水苡</h1>
    <h2>
      「水苡」並不是一種真正的生物或植物，水苡咳苡被想像成在水中游泳，或者在樹叢中爬行，而具體的出現地點則取決於想像和創意
    </h2>
    <p>下面有許多不同品種的「水苡」</p>
    <div class="card" v-for="(place, index) in places" :key="index">
      <img class="card-image" :src="place.image" :alt="place.name" />
      <h2>{{ place.name }}</h2>
      <button class="btn" v-on:click="toOtherPage(index)">了解更多</button>
    </div>
  </div>
</template>

<script setup>


const toOtherPage = (index) => {
  if (index == 0) {
    router.push("waterantgreen");
  } else if (index == 1) {
    router.push("waterantpurple");
  }
};

const places = [
        {
          name: "綠水苡",
          image: "/src/assets/Picture/greenWaterAnt/greenWaterAnt.jpg",
        },
        {
          name: "紫水苡",
          image: "/src/assets/Picture/purpleWaterAnt/purpleWaterAnt.jpg",
        },
      ]
</script>

<style scoped>
.container {
  color: #333;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

.title {
  color: #000000; /* 設定標題文字顏色為藍色 */
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.card-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
}

.card {
  max-width: 900px;
  margin: 1rem auto;
  padding: 1rem;
  background-color: #f5f5f5;
  color: #333; /* 設定卡片文字顏色為深色 */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card img {
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;
  background-color: #fff; /* 設定卡片背景色為白色 */
  color: #333; /* 設定卡片文字顏色為深色 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 設定卡片的陰影效果 */
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #c7b2de; /* 設定按鈕背景色為藍色 */
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
