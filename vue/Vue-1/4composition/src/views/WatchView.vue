<script setup>
//WatchView.vue
import { ref, watch, computed, reactive } from 'vue'

const books = reactive([ 'Vue 2 - Advanced Guide',  
              'Vue 3 - Basic Guide',  
              'Vue 4 - The Mystery' ])



const question = ref('')
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다')
const src = ref('')

const publishedBooksMessage = computed( () => {
  return books.length > 0 ? 'yes' : 'no'
})

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) { 
    answer.value = '생각 중...' 
    try { 
        const res = await fetch('https://yesno.wtf/api') 
        const data = await res.json()
        answer.value = data.answer === 'yes' ?  
                       '네' : '아니오' 
        src.value = data.image
      } catch (error) { 
        answer.value = '에러! API에 연결할 수 없습니다.' + error 
      } 
    }
});

// export default { 
//   data() { 
//     return { 
//       question: '', 
//       answer: '.', 
//       src:''
//     } 
//   }, 
//   watch: { 
//     // 질문이 변경될 때마다 이 함수가 실행됩니다 
//     question(newQuestion, oldQuestion) { 
//       if (newQuestion.includes('?')) {   this.getAnswer()    } 
//     } 
//   }, 
//   methods: { 
//     async getAnswer() { 
//       this.answer = '생각 중...' 
//       try { 
//         const res = await fetch('https://yesno.wtf/api') 
//         const data = await res.json()
//         this.answer = data.answer === 'yes' ?  
//                        '네' : '아니오' 
//         this.src = data.image
//       } catch (error) { 
//         this.answer = '에러! API에 연결할 수 없습니다.' + error 
//       } 
//     } 
//   } 
// } 
</script>
<template>
<input v-model="question">
<div>{{ answer }}</div>
<img :src="src" />
<hr>
{{ books.length > 0 ? 'yes' : 'no' }}<br>
{{ publishedBooksMessage }}
</template>