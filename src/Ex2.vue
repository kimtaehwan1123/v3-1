<template>
  <div>
    <!-- 버튼 그룹 컴포넌트 -->
    <ButtonGroup @selectFile="handleClick"></ButtonGroup>

    <!-- 리스트 컴포넌트 -->
    <ItemList :items="arr"></ItemList>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import ButtonGroup from './components/ex3/ButtonGroup.vue';
import ItemList from './components/ex3/ItemList.vue';

const getStores = async (fileName) => {
  const res = await axios.get(`http://localhost:5173/${fileName}`);
  return res.data;
};

const arr = ref([]);

const handleClick = (file) => {
  getStores(file).then(result => {
    console.log(result);
    arr.value = result;
  });
};
</script>

<style scoped lang="scss">
</style>