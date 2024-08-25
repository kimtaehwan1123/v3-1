<template>
    <div>
      <ul>
        <li v-for="t in todos" :key="t.id">{{ t }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const todos = ref([]);
  
  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return res.data;
  };
  
  getData().then(arr => todos.value = arr);
  </script>
  
  <style scoped lang="scss">
  </style>