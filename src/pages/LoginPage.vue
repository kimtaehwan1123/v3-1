<template>
    <div>
      <h1>Login Page</h1>
  
      <input type="text" v-model="midInput" placeholder="Enter Member ID">
  
      <button @click="handleClick">Login</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useMember from '../stores/useMember';
  import { useRouter } from 'vue-router';
  
  const midInput = ref('');
  
  const { login } = useMember();
  const router = useRouter();
  
  const handleClick = () => {
    const mid = midInput.value;
    login(mid);
  
    // 로그인 후 키오스크 페이지로 이동
    router.push('/kiosk');
  };
  </script>
  
  <style lang="scss" scoped>
  /* 스타일 추가 가능 */
  </style>