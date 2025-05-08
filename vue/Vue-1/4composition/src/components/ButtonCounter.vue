<template>
  <div>
    <button @click="incrementChild">
      <slot></slot>
    </button> 
    <button @click="incrementChild">handler {{props.count}}</button> 
    <button @click="$emit('incrementevent', 1)">emit인수 {{props.count}}</button> 
    <button @click="$emit('incrementevent')">emit {{props.count}}</button> 
    <button @click="this.count++">직접변경안됨 {{count}}</button>  <!-- props는 읽기 전용이기 때문에 바로 변경 불가능 --> 
  </div>
</template>
<script setup>

import { defineProps, defineEmits } from 'vue';

const props = defineProps(["count"]);
const emit = defineEmits(["incrementevent"]) 


function incrementChild(){
      emit('incrementevent', props.count+1)
} 

</script>


