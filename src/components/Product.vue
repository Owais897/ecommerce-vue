<template>
  <a-space direction="vertical" size="large" style="padding: 50px">
    <a-row :gutter="[20, 20]">
      <a-col class="gutter-row" :span="6" v-for="item in items" :key="item.id">
        <a-card @click="openThisProduct(item)" hoverable>
          <img slot="cover" alt="example" :src="item.image" />
          <a-card-meta :title="item.title + item.id">
            <template slot="description">
              {{ item.description.substring(0, 65) + "..." }}
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </a-space>
</template>

<script>
import { apiMixin } from "../mixins";
import axios from "axios";

export default {
  created: async function () {
    const { data } = await axios(`${this.apiURL}/products`);
    this.items = data;
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    openThisProduct(item) {
      this.$router.push(`product/${item.id}`);
    },
  },
  mixins: [apiMixin],
};
</script>

<style scoped>
.ant-card-cover img {
  object-fit: contain;
  min-height: 280px;
  max-height: 280px;
  display: inline-block;
  padding: 12px;
}
</style>
>
