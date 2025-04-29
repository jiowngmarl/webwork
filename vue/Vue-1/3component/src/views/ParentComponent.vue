<template>
  <h2>부모 컴포넌트</h2>
  <ChildComponent ref="child_component"></ChildComponent>
</template>
<script>
import ChildComponent from '@/components/ChildComponent.vue';
export default {
  components : {ChildComponent}, // 필드명과 변수명이 같으면 하나로 적고 생략 가능 ex) "ChildComp" : ChildComponent
  mounted() {
    this.$refs.child_component.$refs.btn.click();
    this.$refs.child_component.childFunc();
    this.$refs.child_component.msg = '부모가 보내는 메시지'
  }
}
</script>