<template>
  <div>
    <button @click="subtractFromCounter(product)">-</button>
    {{ value }}
    <button @click="addToCounter(value)">+</button>
    <button v-show="value > 0" class="btn" @click="addToCart()">
      Add to cart
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      value: 0,
    };
  },
  props: {
    product: Object,
  },
  computed: {
    ...mapState(["cart"]),
  },
  watch: {
    value() {
      this.product.value === this.value;
      console.log("111111111111111", this.cart);
    },
  },
  methods: {
    ...mapMutations(["addProductToCart", "removeProductToCart"]),
    addToCounter() {
      this.value++;
    },
    subtractFromCounter() {
      if (this.value == 0) return 0;
      this.value--;
    },
    addToCart() {
      // store.commit("addProductToCart", this.product);
      this.product.value = this.value;
      this.addProductToCart(this.product);
    },
  },
};
</script>

<style scoped>
.counter {
  font-size: 5rem;
}
button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}
input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}

.btn {
  border-radius: 0.5rem;
  width: auto;
  background: #41b983;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}
</style>
