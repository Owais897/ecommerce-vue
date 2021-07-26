<template>
  <div v-if="product">
    <div>title of the product : {{ product.title + " " + product.id }}</div>
    <img :src="product.image" alt="" />
    {{ product.description }}
    <Counter :product="product"></Counter>
    <br />
    <router-link to="/"> Home </router-link>
  </div>
  <div class="loader" v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import axios from 'axios';
import { apiMixin } from "../mixins";
import Counter from "../components/Counter.vue";

export default {
  components: { Counter },
  data() {
    return {
      product: null,
    };
  },
  computed: {},
  created: async function () {
    const { id } = this.$route.params;

    if (!id) {
      this.$router.push(`/`);
      return;
    }

    const { data } = await axios(`${this.apiURL}/products/${id}`);
    console.log({ data });

    this.product = data;
  },
  mixins: [apiMixin],
};
</script>

<style scoped>
.loader {
  height: calc(100vh - 64px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
