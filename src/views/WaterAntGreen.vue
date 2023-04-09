<template>
  <div class="container">
      <h1>綠水苡</h1>
      <h2>綠水苡是湖泊守護者，由湖泊女孩綠苡轉化而成，擁有魔法力量，能操控水元素並保護生物。</h2>
      <p> 綠水苡可能是一種身體呈現淡綠色調的生物，身軀輕盈而充滿活力。它的身體形狀可能是綠色的卵形，上端逐漸變細，下端較為圓潤。綠水苡的頭部和身體可能呈現流線型，讓它看起來更加優美和流暢。綠水苡可能擁有兩個大眼睛，黑色瞳孔中閃爍著晶瑩的光芒，讓人感覺神秘而吸引人。它的觸角可能是柔軟而堅韌的，能夠承受一定的拉力，而且也佈滿了微小的感知器，能夠感知周圍的氣味、溫度和聲音等。綠水苡的身體表面可能佈滿了細小的突起和凸起，這些突起可能有著不同的形狀和大小，讓它的身體看起來更加美麗和複雜。它的身體表面也可能覆蓋著微小的細胞，使它看起來更加精緻。總體來說，綠水苡可能是一種看起來非常迷人而神秘的生物。 </p>
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
          name: '綠水苡1',
          image: '/src/assets/Picture/greenWaterAnt/greenWaterAnt1.jpg',
        },
        {
          name: '綠水苡2',
          image: '/src/assets/Picture/greenWaterAnt/greenWaterAnt2.jpg',
        },
        {
          name: '綠水苡3',
          image: '/src/assets/Picture/greenWaterAnt/greenWaterAnt3.jpg',
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
