<template>
    <div>
      <h2>Product List</h2>
      <ul>
        <li v-for="product in products" :key="product.mno">
          {{ product.name }} - {{ product.price }}원
          <button @click="addToCart(product.mno, 1)">Add to Cart</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useCart from '../stores/useCart';
  
  const products = ref([
    { mno: 1, name: '아메리카노', price: 5000 },
    { mno: 2, name: '카페라떼', price: 7000 },
    { mno: 3, name: '에이드', price: 7000 },
  ]);
  
  const { addCart } = useCart();
  
  const addToCart = (mno, quantity) => {
    addCart(mno, quantity);
  };
  </script>
  