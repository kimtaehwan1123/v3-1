import { defineStore } from "pinia";
import { ref } from "vue";

const useCart = defineStore('cartStore', () => {
  const cart = ref([]);

  const addCart = (id, quantity) => {
    const itemIndex = cart.value.findIndex(item => item.id === id);

    if (itemIndex !== -1) {
      cart.value[itemIndex].quantity += quantity;
    } else {
      cart.value.push({ id, quantity });
    }
  };

  const clearCart = () => {
    cart.value = [];
  };

  return { cart, addCart, clearCart };
});

export default useCart;