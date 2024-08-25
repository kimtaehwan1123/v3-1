<template>
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.mno">
          Product ID: {{ item.mno }}, Quantity: {{ item.quantity }}
        </li>
      </ul>
      <button @click="clearCart">Clear Cart</button>
    </div>
  </template>
  
  <script setup>
  import useCart from '../stores/useCart';
  
  const { cart, clearCart } = useCart();
  </script>
  