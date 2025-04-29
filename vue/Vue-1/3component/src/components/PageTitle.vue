<template>
  <div class = "alert alert-warning">
    <h2>{{ title }} {{ subtitle }}</h2>
  </div>
</template>
<script>
export default {
  props  : ["title", "subtitle"], // props로 받은 정보는 읽기 전용, 변경이 불가능하다
  data() {},
  methods : {},
  Mounted() {},
  watch : {}
}
</script>