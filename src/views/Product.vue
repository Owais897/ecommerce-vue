<template>
  <div>
    <div>title of the product : {{ product.title + " " + product.id }}</div>
    <img :src="product.image" alt="" />
    {{ product.description }}
    <Counter :product="product"></Counter>
    <br />
    <router-link to="/"> Home </router-link>
  </div>
</template>

<script>
import Counter from "../components/Counter.vue";
export default {
  components: { Counter },
  data() {
    return {
      product: { ...this.$route.params.item },
    };
  },
  computed: {},
};
</script>

<style></style>
