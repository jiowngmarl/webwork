<template>

  

  <div>
    <input ref="my-input" :value="hello"/>
    현재페이지는 {{ $route.fullPath }} <br>
    <a href="#" @click="router.push('/')">home</a>
    <a href="#" @click="goPage">about</a>
  </div>

  <hr/>
  {{ count.value }}
  <button @click="clickHandler">클릭</button>
  <ButtonCounter :counter="count.value" @incrementevent="clickHandler">자식컴포넌트</ButtonCounter>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTemplateRef } from 'vue';
import ButtonCounter from '@/components/ButtonCounter.vue';

const count = reactive({value:0})
const router = useRouter()
const route = useRoute()
const input = useTemplateRef('my-input')

function clickHandler(initValue) {
  if(initValue > 0) {
    count.value = initValue
  } else {
    count.value++
  }

}

function goPage() {
  // router.push("/about");
  router.push({name:"about"});
}

onMounted(()=>{
  console.log('count=',count.value);
  console.log('input=',input.value.value);
});

// const clickHandler = () => {
//   alert("클릭됨")
// }
//function과 const 두개가 같은 방식임, 표현만 다름

</script>
