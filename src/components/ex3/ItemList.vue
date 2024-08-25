<template>
    <ul>
      <li v-for="item in items" :key="item.sno">
        {{ item }}
      </li>
    </ul>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  });
  </script>
  
  <style scoped lang="scss">
  </style>