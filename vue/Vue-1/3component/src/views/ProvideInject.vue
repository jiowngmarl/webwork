<template>
  <div>
    <ProvideInjectChild></ProvideInjectChild>
  </div>
</template>
<script>
import ProvideInjectChild from '@/views/ProvideInjectChild.vue';

export default {
  components : {ProvideInjectChild},
  data() {
    return {
      items : ['A', 'B', 'C', 'D']
    }
  },
  provide() {
    return {
      itemLength: this.items.length
    };
  }
}
</script>