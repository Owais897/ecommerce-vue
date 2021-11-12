<template>
  <div>
    <div v-if="product">
      <a-space direction="vertical" size="large" style="padding: 50px 30px">
        <h2>{{ product.title }}</h2>
        <a-row :gutter="[24, 24]">
          <div class="align-item">
            <a-col :span="12">
              <div class="image-box">
                <img :src="product.thumbnail" alt="" width="100%" />
              </div>
            </a-col>
            <a-col :span="12">
              <div class="product-detail">
                <h2>Price: ${{ product.price }}</h2>
                <p>{{ product.description }}</p>
                <Counter :product="product"></Counter>
              </div>
            </a-col>
          </div>
        </a-row>
      </a-space>
    </div>
    <div class="loader" v-else>
      <a-spin size="large" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { apiMixin } from '../mixins';
import Counter from '../components/Counter.vue';

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
.image-box {
  border: 1px solid #cccccc;
  overflow: hidden;
  padding: 15px;
  border-radius: 5px;
}
.image-box img {
  max-width: 350px;
  object-fit: contain;
}
.product-detail {
  text-align: left;
}
.product-detail h2 {
  color: #747691;
  font-size: 30px;
}
.align-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
