<template>
  <div>
    <span class="price"> Total Price: {{ (product.price * value).toFixed(2) }} </span>
    <br />
    <a-button
      @click="subtractFromCounter(product)"
      type="primary"
      shape="circle"
    >
      -
    </a-button>
    {{ value }}
    <a-button @click="addToCounter(product)" type="primary" shape="circle">
      +
    </a-button>
    <br />
    <a-button v-show="value > 0" type="primary" @click="addToCart()">
      Add to cart
    </a-button>
    <a-button v-show="value > 0" type="danger" @click="removeFromCart()">
      Remove From cart
    </a-button>
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
      this.product.value = this.value;
      this.addProductToCart({ ...this.product });
    },
    removeFromCart() {
      this.removeProductToCart(this.product.id);
    },
    updateValue() {
      let check = this.cart.find((v) => v.id === this.product.id);
      if (check) {
        this.value = check.value;
      }
    },
  },
  mounted() {
    this.updateValue();
  },
};
</script>

<style scoped>
.counter {
  font-size: 5rem;
}
.ant-btn {
  margin: 12px 0;
}
.ant-btn-danger {
  margin-left: 10px !important;
}
.price {
  color: orange;
  font-size: 20px;
}
</style>
