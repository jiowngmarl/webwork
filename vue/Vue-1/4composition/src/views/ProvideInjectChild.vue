<template>
<div>{{ itemLength }}</div>
</template>
<script setup>
import { inject } from 'vue';
import { onMounted } from 'vue';

const itemLength = inject("itemLength");

onMounted(()=>{
  console.log(itemLength);
});
  
</script>