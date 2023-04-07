<template>
    <div class="container">
        <h1>紫水苡</h1>
        <h2>水苡經過水苡後誕生了紫水苡</h2>
        <p>紫水苡的身體呈現卵形，上端漸漸變細，下端較圓潤，約有 5 至 10 公分長。它的身體外觀柔軟，充滿了彈性和活力，表面光滑且富有光澤。紫水苡的身體主要以深紫色為主，但因為光線和角度的不同，紫色會呈現出微妙的變化，有時甚至會呈現出藍紫色調。紫水苡的顏色非常鮮豔，像是一種珍貴寶石一般，非常迷人。它的頭部和身體呈流線型，流暢而優美。紫水苡有著兩個大眼睛，黑色的瞳孔讓人感到深邃神秘，看起來非常可愛。紫水苡的觸角與身體相連，非常柔軟，佈滿了微小的感知器，讓它能夠感知周圍的氣味、溫度和聲音等，並且對於紫水苡來說也是溝通的重要工具。紫水苡的身體表面佈滿了細小的突起和凸起，這些突起有著不同的形狀和大小，令它的身體看起來更加美麗和複雜。紫水苡的表面也覆蓋著微小的細胞，使它看起來更加精緻。</p>
        <div class="card-container">
            <div class="card" v-for="(place, index) in places" :key="index">
                <img class="card-image" :src="place.image" :alt="place.name" />
                <h2>{{ place.name }}</h2>
            </div>
        </div>
        
    </div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      places: [
        {
          name: '紫水苡1',
          image: '/src/assets/Picture/purpleWaterAnt/purpleWaterAnt1.jpg',
        },
        {
          name: '紫水苡2',
          image: '/src/assets/Picture/purpleWaterAnt/purpleWaterAnt2.jpg',
        },
        {
          name: '紫水苡3',
          image: '/src/assets/Picture/purpleWaterAnt/purpleWaterAnt3.jpg',
        }
      ],
    };
  }
};
</script>

<style scoped>

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
}

.card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  max-width: 300px;
  margin: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 10px;
  /* justify-content: space-around; */
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  max-width: 100%;
  margin-bottom: 1rem;
  border-radius: 10px;
}

</style>
