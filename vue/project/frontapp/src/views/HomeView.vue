<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    로그인 카운트 {{ $store.state.count }} <br>
    로그인 여부 {{ $store.state.loginYn }} <br>
    로그인 이메일 {{ $store.state.email }} <br>
    <hr>
    <TheWelcome />
  </main>
</template>
