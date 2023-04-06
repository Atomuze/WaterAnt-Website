<template>
  <div class="playground">
    <h1>水苡遊玩天地</h1>
    <p>「水苡」取決於想像和創意</p>

    <input type="text" :style="dynamicStyle" v-model="text1"/>
    <p> {{ text1 }}</p>

  </div>
</template>

<script setup>
  import {reactive, ref} from '@vue/reactivity'
  import {watch, watchEffect} from '@vue/runtime-core'
  const text = ref({
    levels:{
      text:'',
    },
    label:123,
  })

  const text1 = ref('水苡文')

  const stop = watchEffect(()=> {
    console.log(text.value.levels.text, text.value.label)
    if(text.value.label === 'stop') stop()  //停止監聽
  })

  watch(text1, (newData)=> {
    if(newData.length % 2 === 0){
      dynamicStyle.color = 'black'
      dynamicStyle.fontSize = '20px'
    } else {
      dynamicStyle.color = 'yellow'
      dynamicStyle.fontSize = '14px'
    }
  }) 

  const dynamicStyle = reactive({
    color:'yellow',
    fontSize: '14px',
    transition: 'ease-in-out 0.2s'
  })

</script>

<style scoped>
.habitats {
  padding: 2rem;
}

.habitats h1 {
  text-align: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 2rem 0;
}

li {
  text-align: center;
  flex: 1;
}

.habitat-images {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.habitat-images img {
  max-width: 30%;
  margin-bottom: 1rem;
}

</style>