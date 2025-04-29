<template>
  <h2>부모 컴포넌트</h2>
  <ChildComponent @send-message="sendMessage"></ChildComponent>
</template>
<script>
import ChildComponent from '@/components/ChildComponent4.vue';
export default {
  components : {ChildComponent}, // 필드명과 변수명이 같으면 하나로 적고 생략 가능 ex) "ChildComp" : ChildComponent
  methods : {
    sendMessage(message) {
      console.log(message )
    }
  }
}
</script>