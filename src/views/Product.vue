<template>
  <div>
    <div>title of the product : {{ title + " " + id }}</div>
    <img :src="img" alt="" />
    {{ description }}
    <Counter></Counter>
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
      ...this.$route.params.item,
    };
  },
  computed: {},
};
</script>

<style></style>
