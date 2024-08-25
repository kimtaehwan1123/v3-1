<template>
    <div>
      <button @click="handleClick('s0.json')">S0</button>
      <button @click="handleClick('s1.json')">S1</button>
      <button @click="handleClick('s2.json')">S2</button>
      <button @click="handleClick('s3.json')">S3</button>
      <button @click="handleClick('s4.json')">S4</button>
      <button @click="handleClick('s5.json')">S5</button>
      <button @click="handleClick('s6.json')">S6</button>
    </div>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['selectFile']);
  
  const handleClick = (file) => {
    emit('selectFile', file);
  };
  </script>
  
  <style scoped lang="scss">

  </style>
  