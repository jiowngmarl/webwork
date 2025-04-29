<template>
  <FancyButton>팬시버튼</FancyButton>
  <FancyButton>저장하기</FancyButton>
  
  <SlotModalLayout>
    <template v-slot:header>팝업타이틀</template>  <!-- 축약으로 #header로 사용가능 -->
    <template #default>
      <p>팝업컨텐츠</p>
      <p>팝업컨텐츠</p>
    </template>
    <template #footer><button type="button">닫기</button></template>
  </SlotModalLayout>

  <ProvideInject></ProvideInject>
</template>
<script>
import FancyButton from '@/components/FancyButton.vue';
import SlotModalLayout from '@/components/SlotModalLayout.vue';
import ProvideInject from '@/views/ProvideInject.vue';
export default {

  components : {FancyButton, SlotModalLayout, ProvideInject}

}
</script>